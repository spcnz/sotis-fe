import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";
import Routes from './components/Routes';
import store from './store';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Routes history={history} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;