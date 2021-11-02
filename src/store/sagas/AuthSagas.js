import { call, put } from 'redux-saga/effects';
import { push} from 'connected-react-router';

import { authUser, loginError, registerError } from '../actions/AuthActions';
import AuthService from '../../services/AuthService';
import { HOME, LOGIN } from '../../routes';

export function* userLogin({ payload }) {
  try {
    yield call(AuthService.login, payload);

    yield put(authUser(true));
    yield put(push(HOME));
  } catch (error) {
    yield put(loginError(true));
  }
}

export function* userRegister({ payload }) {
  try {
    yield call(AuthService.signup, payload);
    yield put(push(LOGIN));
  } catch (error) {
    yield put(registerError(true));
  }
}
