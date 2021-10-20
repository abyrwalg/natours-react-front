import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import { store } from './redux/store';

import Routes from './routes';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <Switch>
          <Route path="/" component={Routes} />
        </Switch>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
