import { call, put } from 'redux-saga/effects';
import { createTestError, setCurrentTest, setResults, setTests } from '../actions/TestActions';
import TestService from '../../services/TestService';

export function* testCreate({ payload }) {
  try {
    const data = yield call(TestService.create, payload);
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

export function* submitTest({ payload }) {
  try {
    const data = yield call(TestService.submit, payload);
  } catch (error) {
    // yield put(createTestError(true));
  }
}

export function* generateResults({ payload }) {
  try {
    const data = yield call(TestService.generateResults, payload);
    yield put(setResults(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}



