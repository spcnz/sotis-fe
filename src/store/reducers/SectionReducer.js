import { CREATED_SECTION, SET_SECTIONS } from '../actions/ActionTypes';

const initialState = {
    all: {}
  };

const sectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SECTIONS:
      const new_state = {...state, all : {...state.all}};
      const { partId, all } = action.payload
      new_state.all[partId] = all
      return new_state;
    case CREATED_SECTION:
      return {...state, all : [...state.all, action.payload]}
    default:
      return state;
  }
};

export default sectionReducer;

