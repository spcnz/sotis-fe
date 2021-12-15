import { SET_CURRENT_TEST, SET_RESULTS, SET_TESTS } from '../actions/ActionTypes';

const initialState = {
    all: [],
    current: null,
    results: null
  };

const partReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TESTS:
      return {...state, all : action.payload }
    case SET_CURRENT_TEST:
      return {...state, current: action.payload}
    case SET_RESULTS:
        return {...state, results: action.payload}
    default:
      return state;
  }
};

export default partReducer;

