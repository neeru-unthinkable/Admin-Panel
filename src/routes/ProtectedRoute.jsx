import React from "react";
import { Route, Redirect } from "react-router-dom";

import { getItemFromLocalStorage } from "../helpers/localStoragehelper";
import { AUTH_CONFIG } from "../constants";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    const user = JSON.parse(getItemFromLocalStorage(AUTH_CONFIG.AUTH_SESSION_INFO));
    return user && user.token;
  };

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
