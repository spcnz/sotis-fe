import { call, put } from 'redux-saga/effects';
import { createTestError, setCurrentTest, setTests } from '../actions/TestActions';
import TestService from '../../services/TestService';

export function* testCreate({ payload }) {
  try {
    const data = yield call(TestService.create, payload);
    console.log(payload, " SALJEM ");
    console.log(data, " DOIBO ODG")
    yield put(setCurrentTest(data.id));
  } catch (error) {
    yield put(createTestError(true));
  }
}


export function* getAllTests({ payload }) {
  try {
    const data = yield call(TestService.getAll, payload);
    yield put(setTests(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}

export function* getTest({ payload }) {
  try {
    const data = yield call(TestService.getById, payload);
    yield put(setCurrentTest(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}

