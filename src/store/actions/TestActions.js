import { CREATE_TEST, CREATE_TEST_ERROR, SET_CURRENT_TEST } from './ActionTypes';

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