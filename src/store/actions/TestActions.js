import { CREATE_TEST, CREATE_TEST_ERROR, GET_TESTS, SET_CURRENT_TEST, SET_TESTS, GET_TEST, SUBMIT_TEST, COMPARE_RESULTS, SET_RESULTS, GET_FIRST_QUESTION, SET_QUESTION, GET_NEXT_QUESTION, SUBMIT_ANSWER } from './ActionTypes';

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

export const getTest = payload => {
  return {
    type: GET_TEST,
    payload
  }
}

export const submitTest = payload => {
  return {
    type: SUBMIT_TEST,
    payload
  }
}

export const compareResults = payload => {
  return {
    type: COMPARE_RESULTS,
    payload
  }
}

export const setResults = payload => {
  return {
    type: SET_RESULTS,
    payload
  }
}

export const getFirstQuestion = payload => {
  return {
    type: GET_FIRST_QUESTION,
    payload
  }
}

export const setQuestion = payload => {
  return {
    type: SET_QUESTION,
    payload
  }
}

export const getNextQuestion = payload => {
  return {
    type: GET_NEXT_QUESTION,
    payload
  }
}

export const submitAnswer = payload => {
  return {
    type: SUBMIT_ANSWER,
    payload
  }
}