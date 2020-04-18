import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, authDetails = {}, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authDetails.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
