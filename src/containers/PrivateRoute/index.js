import { Route, Redirect } from 'react-router-dom';
import { HOME } from '../../routes';
import { useSelector } from "react-redux";

export function PrivateRoute({
  component: Component,
  ...rest
}) {
    const isAuthenticated = useSelector(state => state.authUser);

    return (
        <Route {...rest} 
            render={props => isAuthenticated ? <Component {...props} /> : <Redirect to={HOME} />}
        />
    );
}

export default PrivateRoute;