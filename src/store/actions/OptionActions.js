import { CREATE_OPTION, GET_OPTIONS, SET_OPTIONS, CREATED_OPTION, SET_OPTION_RESULTS, SELECTED_OPTION } from './ActionTypes';

export const getOptions = payload => {
  return {
    type: GET_OPTIONS,
    payload
  };
};

export const setOptions = payload => {
    return {
      type: SET_OPTIONS,
      payload
    };
};

export const setOptionResults = payload => {
  return {
    type: SET_OPTION_RESULTS,
    payload
  };
};


export const createOption = payload => {
    return {
      type: CREATE_OPTION,
      payload
    };
};

export const createdOption = payload => {
    return {
      type: CREATED_OPTION,
      payload
    };
};

export const selectedOption = payload => {
  return {
    type: SELECTED_OPTION,
    payload
  };
};