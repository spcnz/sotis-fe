import { all, takeLatest } from 'redux-saga/effects';
import { CREATE_ITEM, CREATE_OPTION, CREATE_PART, CREATE_SECTION, CREATE_TEST, GET_ITEMS, GET_OPTIONS, GET_PARTS, GET_ITEM, GET_SECTIONS, GET_SUBJECTS, GET_TESTS, LOGIN, REGISTER, GET_TEST, ADD_LINK, SUBMIT_TEST, GENERATE_RESULTS, ADD_PART_TO_TEST, GET_TEST_PARTS } from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import { getItems, itemCreate, getItem } from './ItemSagas';
import { getOptions, optionCreate } from './OptionSagas';
import { getParts, getTestParts, partCreate, testAddPart } from './PartSagas';
import { getSections, linkSections, sectionCreate } from './SectionSagas';
import { getSubjects } from './SubjectSagas';
import { generateResults, getTest, submitTest, testCreate } from './TestSagas';
import { getAllTests } from './TestSagas';

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
    takeLatest(GET_ITEM, getItem),
    takeLatest(CREATE_ITEM, itemCreate),
    takeLatest(GET_OPTIONS, getOptions),
    takeLatest(CREATE_OPTION, optionCreate),
    takeLatest(GET_SUBJECTS, getSubjects),
    takeLatest(GET_TESTS, getAllTests),
    takeLatest(GET_TEST, getTest),
    takeLatest(ADD_LINK, linkSections),
    takeLatest(SUBMIT_TEST, submitTest),
    takeLatest(GENERATE_RESULTS, generateResults),
    takeLatest(ADD_PART_TO_TEST, testAddPart),
    takeLatest(GET_TEST_PARTS, getTestParts)
  ]);
}