import { CREATED_SECTION, SET_SECTIONS } from '../actions/ActionTypes';

const initialState = {
    all: {}
  };

const sectionReducer = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case SET_SECTIONS:
      newState = {...state, all : {...state.all}};
      const { partId, all } = action.payload
      newState.all[partId] = all
      return newState;
    case CREATED_SECTION:
      console.log('heree', action)
      newState = {...state, all : {...state.all} };
      console.log(newState)
      const id = action.payload.part_id
      console.log('id', id)
      newState.all[id] = [...newState.all[id], action.payload];
      console.log(newState)
      return newState;
    default:
      return state;
  }
};

export default sectionReducer;

