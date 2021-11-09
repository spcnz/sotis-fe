import { AUTH_USER } from '../actions/ActionTypes';
import AuthService from '../../services/AuthService';

const authReducer = (state =
  { 
    isAuth: AuthService.isAuthenticated(),
    role: AuthService.getRole()
  }, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { isAuth: action.payload }
    default:
      return state;
  }
};

export default authReducer;

