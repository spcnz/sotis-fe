import { CREATE_SECTION, GET_SECTIONS, SET_SECTIONS, CREATED_SECTION, SET_CURRENT_PART, SET_CURRENT_SECTION } from './ActionTypes';

export const getSections = payload => {
  return {
    type: GET_SECTIONS,
    payload
  };
};

export const setSections = payload => {
    return {
      type: SET_SECTIONS,
      payload    
  };
};

export const createSection = payload => {
    return {
      type: CREATE_SECTION,
      payload
    };
};

export const createdSection = payload => {
    return {
      type: CREATED_SECTION,
      payload
    };
};

export const setCurrentSection = payload => {
  return {
    type: SET_CURRENT_SECTION,
    payload
  };
};