import { CREATED_SECTION, SET_SECTIONS } from '../actions/ActionTypes';

const initialState = {
    all: []
  };

const sectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SECTIONS:
      return {...state, all : action.payload }
    case CREATED_SECTION:
      return {...state, all : [...state.all, action.payload]}
    default:
      return state;
  }
};

export default sectionReducer;

