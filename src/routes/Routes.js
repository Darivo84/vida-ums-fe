import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from ".././components/pages/Login";
import Signup from ".././components/pages/Signup";
import ResetPassword from ".././components/pages/ResetPassword";
import Reset from ".././components/pages/Reset";
import Dashboard from ".././components/pages/Dashboard";
import AuthApi from "../utils/AuthApi";

function Routes() {
  return (
    <Switch>
      <RouteRegistration exact path="/" redirectTo="/login" component={Login} />
      <RouteRegistration path="/login" component={Login} />
      <RouteRegistration path="/signup" component={Signup} />
      <RouteRegistration path="/reset-password" component={ResetPassword} />
      <RouteRegistration path="/reset" component={Reset} />
      <RouteProtected path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

// Protected Routes
const RouteRegistration = ({ component: Component, ...rest }) => {
  const authApi = React.useContext(AuthApi);
  return (
    <Route
      {...rest}
      render={(props) =>
        !authApi.auth ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  );
};

const RouteProtected = ({ component: Component, ...rest }) => {
  const authApi = React.useContext(AuthApi);
  return (
    <Route
      {...rest}
      render={(props) =>
        authApi.auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default Routes;
