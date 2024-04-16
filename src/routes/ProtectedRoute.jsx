import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import useAdminCRUD from "../hooks/useAdminCRUD";
import useAdminContext from "../hooks/useAdminContext";
import { isAuthenticated } from "../helpers/utils";
import APILoader from "../components/APILoader";
import API_URLS from "../api/urls";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {updateData } = useAdminContext();

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
      if (permissions) updateData({ permissions: permissions });
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
