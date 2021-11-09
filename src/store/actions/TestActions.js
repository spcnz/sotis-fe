import { CREATE_TEST, CREATE_TEST_ERROR, GET_TESTS, SET_CURRENT_TEST, SET_TESTS } from './ActionTypes';

export const createTest = testData => {
  return {
    type: CREATE_TEST,
    payload: testData
  };
};

export const createTestError = payload => {
  return {
    type: CREATE_TEST_ERROR,
    payload
  };
};

export const setCurrentTest = payload => {
  return {
    type: SET_CURRENT_TEST,
    payload
  }
}

export const getAllTest = payload => {
  return {
    type: GET_TESTS,
    payload
  }
}

export const setTests = payload => {
  return {
    type: SET_TESTS,
    payload
  }
}