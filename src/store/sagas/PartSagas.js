import { call, put } from 'redux-saga/effects';
import PartService from '../../services/PartService';
import { addedPart, createdPart, setCurrentPart, setParts, setTestParts } from '../actions/PartActions';

export function* getParts() {
  try {
    const data = yield call(PartService.getAll);
    yield put(setParts(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}


export function* getTestParts({ payload }) {
  try {
    const data = yield call(PartService.getTestParts, payload);
    yield put(setTestParts(data));
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




export function* testAddPart({ payload }) {
  try {
    const data = yield call(PartService.addPart, payload.testId, payload.partId);
    yield put(addedPart(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}
