import { call, put } from 'redux-saga/effects';
import GraphService from '../../services/GraphService';
import { addedLink } from '../actions/GraphActions';

export function* linkAdd({ payload }) {
  try {
    const data = yield call(GraphService.addLink, payload);
    yield put(addedLink(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}