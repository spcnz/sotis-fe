import { all, takeLatest } from 'redux-saga/effects';
import { CREATE_PART, CREATE_TEST, GET_PARTS, LOGIN, REGISTER } from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import { getParts, partCreate } from './PartSagas';
import { testCreate } from './TestSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(CREATE_TEST, testCreate),
    takeLatest(GET_PARTS, getParts),
    takeLatest(CREATE_PART, partCreate)
  ]);
}