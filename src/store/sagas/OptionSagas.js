import { call, put } from 'redux-saga/effects';
import OptionService from '../../services/OptionService';
import { createdOption, setOptions } from '../actions/OptionActions';

export function* getOptions({ payload }) {
  try {
    const data = yield call(OptionService.getAll, payload);
    yield put(setOptions(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}


export function* optionCreate({ payload }) {
  try {
    console.log(payload)
    const data = yield call(OptionService.create, payload);
    yield put(createdOption(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}
