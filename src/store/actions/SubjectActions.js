import { GET_SUBJECTS, SET_SUBJECTS } from './ActionTypes';

export const getSubjects = payload => {
  return {
    type: GET_SUBJECTS,
    payload: payload
  };
};

export const setSubjects = payload => {
    return {
      type: SET_SUBJECTS,
      payload: payload
    };
};