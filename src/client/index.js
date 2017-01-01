/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './config/routes';

//import './styles/styles.css'; //Webpack can import CSS files too!
import 'bootstrap/less/bootstrap.less';
import 'font-awesome/css/font-awesome.css';

import '../nifty/nifty.less'; //Webpack can import LESS files too!
import './index.less'; //Webpack can import LESS files too!

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
