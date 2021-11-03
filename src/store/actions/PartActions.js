import { CREATE_PART, GET_PARTS, SET_PARTS, CREATED_PART } from './ActionTypes';

export const getParts = payload => {
  return {
    type: GET_PARTS,
    payload: payload
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