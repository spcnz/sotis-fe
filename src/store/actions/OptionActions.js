import { CREATE_OPTION, GET_OPTIONS, SET_OPTIONS, CREATED_OPTION } from './ActionTypes';

export const getOptions = payload => {
  return {
    type: GET_OPTIONS,
    payload: payload
  };
};

export const setOptions = payload => {
    return {
      type: SET_OPTIONS,
      payload: payload
    };
};

export const createOption = payload => {
    return {
      type: CREATE_OPTION,
      payload: payload
    };
};

export const createdOption = payload => {
    return {
      type: CREATED_OPTION,
      payload: payload
    };
};