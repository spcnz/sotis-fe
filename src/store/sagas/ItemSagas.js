import { call, put } from 'redux-saga/effects';
import ItemService from '../../services/ItemService';
import { createdItem, setItems } from '../actions/ItemActions';

export function* getItems({ payload }) {
  try {
    const data = yield call(ItemService.getAll, payload);
    yield put(setItems(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}


export function* itemCreate({ payload }) {
  try {
    const data = yield call(ItemService.create, payload);
    yield put(createdItem(data));
  } catch (error) {
    // yield put(createTestError(true));
  }
}
