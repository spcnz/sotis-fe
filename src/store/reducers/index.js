import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './AuthReducer';
import testReducer from './TestReducer';
import errorReducer from './ErrorReducer';
import partReducer from './PartReducer';
import sectionReducer from './SectionReducer';
import itemReducer from './ItemReducer';
import optionReducer from './OptionReducer';
import subjectReducer from './SubjectReducer';
import graphReducer from './GraphReducer';

const hist = history =>
  combineReducers({
    authUser: authReducer,
    test: testReducer,
    error: errorReducer,
    part: partReducer,
    section: sectionReducer,
    item: itemReducer,
    option: optionReducer,
    subject: subjectReducer,
    graph: graphReducer,
    router: connectRouter(history)
});

export default hist;