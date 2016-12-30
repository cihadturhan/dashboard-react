/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './config/routes';
import {getUserInfo} from './actions/user';
import './styles/styles.css'; //Webpack can import CSS files too!
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(getUserInfo());


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
