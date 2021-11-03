import { CREATED_ITEM, SET_ITEMS } from '../actions/ActionTypes';

const initialState = {
    all: []
  };

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {...state, all : action.payload }
    case CREATED_ITEM:
      return {...state, all : [...state.all, action.payload]}
    default:
      return state;
  }
};

export default itemReducer;

