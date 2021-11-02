import { GET_PARTS, SET_PARTS } from './ActionTypes';

export const getParts = payload => {
  return {
    type: GET_PARTS,
    payload: payload
  };
};

export const setParts = payload => {
  console.log('iz akcije')
    return {
      type: SET_PARTS,
      payload: payload
    };
};