import React, { lazy, Suspense, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import ROUTES from "../constants/routes";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";
import APILoader from "../components/APILoader";
import NetworkDetector from "../hoc/NetworkDetector";
import useAdminContext from "../hooks/useAdminContext";
import Logout from "../pages/Authentication/Logout";
import Profile from "../pages/Profile";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/Authentication/Login"));
const Signup = lazy(() => import("../pages/Authentication/Signup"));
const Error404 = lazy(() => import("../components/Errors/Error404"));

const Routes = () => {
  const { loading,data,
    updateData, } = useAdminContext();

  const onUnLoad = () => {
    sessionStorage.setItem("data", JSON.stringify(data));
  };

  useEffect(() => {
    const storedData = sessionStorage.getItem("data");
    if (storedData) {
      updateData(JSON.parse(storedData));
    }
    sessionStorage.removeItem("data");
  }, []);

  useEffect(() => {
    window.addEventListener("unload", onUnLoad);

    return () => {
      window.removeEventListener("unload", onUnLoad);
    };
  });


  return (
    <Router>
      <ToastContainer hideProgressBar />
      {loading ? <APILoader /> : null}
      <Suspense fallback={<APILoader />}>
        <Switch>
          <Redirect exact from={ROUTES.HOME} to={ROUTES.LOGIN} />
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <Route exact path={ROUTES.SIGNUP} component={Signup} />
          <Route exact path={ROUTES.ERROR} component={ErrorPage} />
          <Route exact path={ROUTES.LOGOUT} component={Logout} />
          <Route exact path = {ROUTES.PROFILE} component = {Profile}/>
          <ProtectedRoute exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route component={Error404} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default NetworkDetector(Routes);
