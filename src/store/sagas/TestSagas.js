import { call, put } from 'redux-saga/effects';
import { createTestError, setCurrentTest } from '../actions/TestActions';
import TestService from '../../services/TestService';

export function* testCreate({ payload }) {
  try {
    const data = yield call(TestService.create, payload);
    yield put(setCurrentTest(data.id));
  } catch (error) {
    yield put(createTestError(true));
  }
}
