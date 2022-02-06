import { CREATE_PART, GET_PARTS, SET_PARTS, CREATED_PART, SET_CURRENT_PART, ADD_PART_TO_TEST, GET_TEST_PARTS, PART_ADDED_TO_TEST, SET_TEST_PARTS } from './ActionTypes';

export const getParts = () => {
  return {
    type: GET_PARTS
  };
};

export const setParts = payload => {
    return {
      type: SET_PARTS,
      payload: payload
    };
};

export const createPart = payload => {
    return {
      type: CREATE_PART,
      payload: payload
    };
};

export const createdPart = payload => {
    return {
      type: CREATED_PART,
      payload: payload
    };
};

export const setCurrentPart = payload => {
  return {
    type: SET_CURRENT_PART,
    payload: payload
  };
};

export const addPartToTest = payload => {
  return {
    type: ADD_PART_TO_TEST,
    payload: payload
  };
};


export const getTestParts = payload => {
  return {
    type: GET_TEST_PARTS,
    payload
  };
};

export const setTestParts = payload => {
  return {
    type: SET_TEST_PARTS,
    payload
  };
};

export const addedPart = payload => {
  return {
    type: PART_ADDED_TO_TEST,
    payload
  };
};

