import React from 'react';
import PrivateRoute from '../containers/PrivateRoute';
import PublicRoute from '../containers/PublicRoute';
import HomePage from './HomePage';
// import Dashboard from '../containers/Dashboard';
import Login from '../containers/Auth/Login';
// import Register from '../containers/auth/Register';
import { BrowserRouter, Switch } from 'react-router-dom';
import {
  HOME,
  DASHBOARD,
  LOGIN,
  REGISTER,
} from '../routes';

 export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={HomePage} path={HOME} exact />
          {/* <PublicRoute restricted={true} component={Register} path={REGISTER} exact /> */}
          <PublicRoute restricted={true} component={Login} path={LOGIN} exact />
          {/* <PrivateRoute component={Dashboard} path={DASHBOARD} exact /> */}
        </Switch>
      </BrowserRouter>
  );
}