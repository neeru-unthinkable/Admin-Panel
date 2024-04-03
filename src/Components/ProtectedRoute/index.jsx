import React from "react";
import { Route, Redirect } from "react-router-dom";
// import Dashboard from "../../Pages/Dashboard";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  
  const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem("lending_admin"));
    console.log("user",user);
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
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
