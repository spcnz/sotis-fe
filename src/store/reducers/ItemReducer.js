import { CREATED_ITEM, SET_ITEMS, SET_ITEM, SET_QUESTION } from '../actions/ActionTypes';

const initialState = {
    all: [],
    current: null,
    question: null
  };

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {...state, all: action.payload };
    case CREATED_ITEM:
      return {...state, all : [...state.all, action.payload]}
    case SET_ITEM:
      return {...state, current: action.payload }
    case SET_QUESTION:
      return {...state, question: action.payload }
    default:
      return state;
  }
};

export default itemReducer;

