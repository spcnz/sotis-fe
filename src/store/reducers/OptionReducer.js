import { CREATED_OPTION, SET_OPTIONS } from '../actions/ActionTypes';

const initialState = {
    all: []
  };

const optionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPTIONS:
      return {...state, all : action.payload }
    case CREATED_OPTION:
      return {...state, all : [...state.all, action.payload]}
    default:
      return state;
  }
};

export default optionReducer;

