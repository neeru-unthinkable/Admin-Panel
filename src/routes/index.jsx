import { jwtDecode } from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useIdleTimer } from "react-idle-timer";
import React, { lazy, Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "../helpers/localStoragehelper";
import Profile from "../pages/Profile";
import ROUTES from "../constants/routes";
import { AUTH_CONFIG } from "../constants";
import ProtectedRoute from "./ProtectedRoute";
import APILoader from "../components/APILoader";
import useAdminCRUD from "../hooks/useAdminCRUD";
import { isAuthenticated } from "../helpers/utils";
import Logout from "../pages/Authentication/Logout";
import NetworkDetector from "../hoc/NetworkDetector";
import useAdminContext from "../hooks/useAdminContext";
import ConditionalRender from "../components/ConditionalRender";
import API_URLS from "../api/urls";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/Authentication/Login"));
const Signup = lazy(() => import("../pages/Authentication/Signup"));
const Error404 = lazy(() => import("../components/Errors/Error404"));

const Routes = () => {
  const history = useHistory();
  const location = useLocation();
  const { loading, data, updateData } = useAdminContext();

  const [refreshToken, response] = useAdminCRUD({
    url: API_URLS.refreshToken,
    method: "create",
    shouldSetLoading: false,
  });

  useEffect(() => {
    if (AUTH_CONFIG.NON_AUTHENTICATED_ROUTES.includes(location.pathname))
      return;
    const storedData = sessionStorage.getItem(AUTH_CONFIG.ADMIN_STORAGE);
    if (storedData) {
      updateData(JSON.parse(storedData));
    }
    sessionStorage.removeItem(AUTH_CONFIG.ADMIN_STORAGE);
  }, []);

  const handleUnload = () => {
    if (AUTH_CONFIG.NON_AUTHENTICATED_ROUTES.includes(location.pathname))
      return;
    sessionStorage.setItem(AUTH_CONFIG.ADMIN_STORAGE, JSON.stringify(data));
  };

  window.addEventListener("unload", handleUnload);
  useEffect(() => {
    return () => {
      window.removeEventListener("unload", handleUnload);
    };
  }, []);

  const handleOnIdle = () => {
    if (AUTH_CONFIG.NON_AUTHENTICATED_ROUTES.includes(location.pathname))
      return;
    history.replace(ROUTES.LOGOUT);
  };

  const handleOnAction = () => {
    if (isAuthenticated()) {
      const storedUserData = getItemFromLocalStorage(
        AUTH_CONFIG.AUTH_SESSION_INFO,
        true
      );
      if (storedUserData) {
        const { token, refreshToken: rt } = storedUserData;
        if (token) {
          const decoded = jwtDecode(token);
          const { exp } = decoded;
          const currentTime = Math.floor(Date.now() / 1000);
          if (exp <= currentTime) {
            history.replace(ROUTES.LOGOUT);
          } else if (exp - currentTime <= 180) {
            refreshToken({ data: { refreshToken: rt } });
          }
        }
      }
    }
  };

  useEffect(() => {
    if (response) {
      const { token } = response;
      const storedUserData = getItemFromLocalStorage(
        AUTH_CONFIG.AUTH_SESSION_INFO,
        true
      );
      storedUserData.token = token;
      setItemToLocalStorage(
        AUTH_CONFIG.AUTH_SESSION_INFO,
        storedUserData
      );
      updateData(storedUserData);
    }
  }, [response]);

  useIdleTimer({
    onIdle: handleOnIdle,
    onAction: handleOnAction,
    timeout: 5 * 1000,
    throttle: 2 * 1000,
  });

  return (
    <React.Fragment>
      <ToastContainer hideProgressBar />
      <ConditionalRender condition={loading} truthyComponent={<APILoader />} />
      <Suspense fallback={<APILoader />}>
        <Switch>
          <Redirect exact from={ROUTES.HOME} to={ROUTES.LOGIN} />
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <Route exact path={ROUTES.SIGNUP} component={Signup} />
          <Route exact path={ROUTES.LOGOUT} component={Logout} />
          <Route exact path={ROUTES.PROFILE} component={Profile} />
          <ProtectedRoute exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route component={Error404} />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};

export default NetworkDetector(Routes);
