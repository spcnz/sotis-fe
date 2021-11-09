import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { HOME } from '../../routes';

export function PublicRoute({
  component: Component,
  restricted,
  ...rest
}) {
    const isAuthenticated = useSelector(state => state.authUser.isAuth);

    return (
        <Route {...rest} 
            render={props => isAuthenticated  && restricted ? <Redirect to={HOME} /> : <Component {...props} />  }
        />
    );
}

export default PublicRoute;