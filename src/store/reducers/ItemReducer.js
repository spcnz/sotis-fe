import { CREATED_ITEM, SET_ITEMS, SET_ITEM } from '../actions/ActionTypes';

const initialState = {
    all: [],
    current: null
  };

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {...state, all: action.payload };
    case CREATED_ITEM:
      return {...state, all : [...state.all, action.payload]}
    case SET_ITEM:
      return {...state, current: action.payload }
    default:
      return state;
  }
};

export default itemReducer;

