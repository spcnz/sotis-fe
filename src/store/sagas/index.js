import { all, takeLatest } from 'redux-saga/effects';
import { CREATE_TEST, GET_PARTS, LOGIN, REGISTER } from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import { getParts } from './PartSagas';
import { testCreate } from './TestSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(CREATE_TEST, testCreate),
    takeLatest(GET_PARTS, getParts)
  ]);
}