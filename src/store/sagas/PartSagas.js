import { call, put } from 'redux-saga/effects';
import PartService from '../../services/PartService';
import { createdPart, setCurrentPart, setParts } from '../actions/PartActions';

export function* getParts({ payload }) {
  try {
    const data = yield call(PartService.getAll, payload);
    yield put(setParts(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}


export function* partCreate({ payload }) {
  try {
    const data = yield call(PartService.create, payload.testId, payload.partInfo,);
    yield put(createdPart(data));
    yield put(setCurrentPart(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}
