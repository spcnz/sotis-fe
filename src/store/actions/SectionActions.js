import { CREATE_SECTION, GET_SECTIONS, SET_SECTIONS, CREATED_SECTION } from './ActionTypes';

export const getSections = payload => {
  return {
    type: GET_SECTIONS,
    payload: payload
  };
};

export const setSections = payload => {
    return {
      type: SET_SECTIONS,
      payload: payload
    };
};

export const createSection = payload => {
    return {
      type: CREATE_SECTION,
      payload: payload
    };
};

export const createdSection = payload => {
    return {
      type: CREATED_SECTION,
      payload: payload
    };
};