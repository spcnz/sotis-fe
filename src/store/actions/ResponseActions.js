import { ADD_RESPONSE, SUBMIT_RESPONSES } from './ActionTypes';

export const addResponse = payload => {
  return {
    type: ADD_RESPONSE,
    payload: payload
  };
};

export const submitResponses = payload => {
    return {
      type: SUBMIT_RESPONSES,
      payload: payload
    };
};