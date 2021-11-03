import { all, takeLatest } from 'redux-saga/effects';
import { CREATE_ITEM, CREATE_OPTION, CREATE_PART, CREATE_SECTION, CREATE_TEST, GET_ITEMS, GET_OPTIONS, GET_PARTS, GET_SECTIONS, LOGIN, REGISTER } from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import { getItems, itemCreate } from './ItemSagas';
import { getOptions, optionCreate } from './OptionSagas';
import { getParts, partCreate } from './PartSagas';
import { getSections, sectionCreate } from './SectionSagas';
import { testCreate } from './TestSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(CREATE_TEST, testCreate),
    takeLatest(GET_PARTS, getParts),
    takeLatest(CREATE_PART, partCreate),
    takeLatest(GET_SECTIONS, getSections),
    takeLatest(CREATE_SECTION, sectionCreate),
    takeLatest(GET_ITEMS, getItems),
    takeLatest(CREATE_ITEM, itemCreate),
    takeLatest(GET_OPTIONS, getOptions),
    takeLatest(CREATE_OPTION, optionCreate),
  ]);
}