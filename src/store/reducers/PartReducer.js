import { CREATED_PART, PART_ADDED_TO_TEST, SET_CURRENT_PART, SET_PARTS, SET_TEST_PARTS } from '../actions/ActionTypes';

const initialState = {
    all: [],
    current : {},
    testParts: []
  };

const partReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PARTS:
      return {...state, all : action.payload }
    case CREATED_PART:
      return {...state, all : [...state.all, action.payload]}
    case SET_CURRENT_PART:
      return {...state, current: action.payload }
    case SET_TEST_PARTS:
        return {...state, testParts : action.payload }
    case PART_ADDED_TO_TEST:
        return {...state, testParts: [...state.testParts, action.payload]}
    default:
      return state;
  }
};

export default partReducer;

