import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './AuthReducer';
import testReducer from './TestReducer';
import errorReducer from './ErrorReducer';
import partReducer from './PartReducer';

const hist = history =>
  combineReducers({
    authUser: authReducer,
    test: testReducer,
    error: errorReducer,
    part: partReducer,
    router: connectRouter(history)
});

export default hist;