import { ADDED_LINK } from '../actions/ActionTypes';

const initialState = {
    nodes: [],
    links : []
  };

const graphReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_LINK:
      return {...state, links: [...state.links, action.payload.link] }
    default:
      return state;
  }
};

export default graphReducer;

