import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import useAdminCRUD from "../hooks/useAdminCRUD";
import useAdminContext from "../hooks/useAdminContext";
import { isAuthenticated } from "../helpers/utils";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {updateData } = useAdminContext();

  const [getPermission, response] = useAdminCRUD({
    url: "http://localhost:5001/getpermissions",
    method: "create",
    shoudldSetLoading: true, 
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

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location.pathname },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
