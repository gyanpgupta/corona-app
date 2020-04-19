import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./redux/Login";
import Dashboard from "./redux/Dashboard";
import PrivateRoute from "./redux/PrivateRoute";

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/">
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default Routes;
