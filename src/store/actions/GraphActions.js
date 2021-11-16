import { ADD_LINK, ADDED_LINK } from './ActionTypes';

export const linkNodes = payload => {
  return {
    type: ADD_LINK,
    payload: payload
  };
};


export const addedLink = payload => {
    return {
      type: ADDED_LINK,
      payload: payload
    };
};