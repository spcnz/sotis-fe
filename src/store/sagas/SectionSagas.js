import { call, put } from 'redux-saga/effects';
import SectionService from '../../services/SectionService';
import { createdSection, setSections } from '../actions/SectionActions';

export function* getSections({ payload }) {
  try {
    const data = yield call(SectionService.getAll, payload);
    yield put(setSections(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}


export function* sectionCreate({ payload }) {
  try {
    const data = yield call(SectionService.create, payload);
    yield put(createdSection(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}
