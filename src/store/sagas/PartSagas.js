import { call, put } from 'redux-saga/effects';
import PartService from '../../services/PartService';
import { setParts } from '../actions/PartActions';

export function* getParts({ payload }) {
  try {
    const data = yield call(PartService.getAll, payload);
    console.log(data)
    yield put(setParts(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}
