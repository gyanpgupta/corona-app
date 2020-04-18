import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./redux/Login";
import Details from "./redux/Details";
import PrivateRoute from "./redux/PrivateRoute";

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/">
          <Details />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default Routes;
