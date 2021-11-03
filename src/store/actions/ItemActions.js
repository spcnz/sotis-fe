import { CREATE_ITEM, GET_ITEMS, SET_ITEMS, CREATED_ITEM } from './ActionTypes';

export const getItems = payload => {
  return {
    type: GET_ITEMS,
    payload: payload
  };
};

export const setItems = payload => {
    return {
      type: SET_ITEMS,
      payload: payload
    };
};

export const createItem = payload => {
    return {
      type: CREATE_ITEM,
      payload: payload
    };
};

export const createdItem = payload => {
    return {
      type: CREATED_ITEM,
      payload: payload
    };
};