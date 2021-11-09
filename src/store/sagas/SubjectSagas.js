import { call, put } from 'redux-saga/effects';
import SubjecService from '../../services/SubjectService';
import { setSubjects } from '../actions/SubjectActions';

export function* getSubjects({ payload }) {
  try {
    const data = yield call(SubjecService.getAll);
    yield put(setSubjects(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}
