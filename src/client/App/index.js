import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Boilerplate from './components/Boilerplate';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Boilerplate} />
  </Route>
);
