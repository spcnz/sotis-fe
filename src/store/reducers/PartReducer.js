import { SET_PARTS } from '../actions/ActionTypes';

const initialState = {
    all: []
  };

const partReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PARTS:
      console.log('iz reducera')
      console.log(action.payload, 'reducer')
      return {...state, all : action.payload }
    // case SET_CURRENT_PART:
    //   return {...state, current: action.payload}
    default:
      return state;
  }
};

export default partReducer;

