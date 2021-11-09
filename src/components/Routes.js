import React from 'react';
import PrivateRoute from '../containers/PrivateRoute';
import PublicRoute from '../containers/PublicRoute';
import HomePage from './HomePage';
import TestStepper from '../containers/Test/CreateTest/TestStepper';
import Login from '../containers/Auth/Login';
import { BrowserRouter, Switch } from 'react-router-dom';
import {
  HOME,
  CREATE_TEST,
  LOGIN,
  TESTS
} from '../routes';
import TestTable from '../containers/Test/TestTable';

 export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={HomePage} path={HOME} exact />
          <PublicRoute restricted={true} component={Login} path={LOGIN} exact />
          <PrivateRoute component={TestStepper} path={CREATE_TEST} exact />
          <PrivateRoute component={TestTable} path={TESTS} exact />
        </Switch>
      </BrowserRouter>
  );
}