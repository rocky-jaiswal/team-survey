import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { App } from './containers/App';
import { configureStore } from './store';

const history  = createHashHistory();
const store = configureStore(history);

document.addEventListener('DOMContentLoaded', (_e) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app')
  );
});
