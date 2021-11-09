import { SET_SUBJECTS } from '../actions/ActionTypes';

const initialState = {
    all: []
  };

const subjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBJECTS:
      return {...state, all : action.payload }
    default:
      return state;
  }
};

export default subjectReducer;

