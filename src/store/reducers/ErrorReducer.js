import { CREATE_TEST_ERROR, LOGIN_ERROR, REGISTER_ERROR } from '../actions/ActionTypes';

const initialState = {
  loginError: false,
  registerError: false,
  testCreateError: false
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    case REGISTER_ERROR:
      return { ...state, registerError: action.payload };
    case CREATE_TEST_ERROR:
        return { ...state, testCreateError: action.payload };
    default:
      return state;
  }
};

export default errorReducer;