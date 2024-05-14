import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import useAdminCRUD from "../hooks/useAdminCRUD";
import { isAuthenticated } from "../helpers/utils";
import APILoader from "../components/APILoader";
import API_URLS from "../api/urls";
import { useDispatch } from "react-redux";
import { setLoginData } from "../redux/actions";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch(); 

  const [getPermission, response, loading] = useAdminCRUD({
    url: API_URLS.getPermissions,
    method: "create",
    shouldSetLoading: true, 
  });

  useEffect(() => {
    getPermission({});
  }, []);

  useEffect(() => {
    if (response) {
      const { permissions } = response;
      if(permissions) dispatch(setLoginData({permissions: permissions}))
    }
  }, []);

  if (loading) return <APILoader />;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && (
          <Component {...props} />
        )
      }
    />
  );
};

export default ProtectedRoute;
