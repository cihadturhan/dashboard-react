import React from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute} from 'react-router';
import PageNotFound from './components/PageNotFound';

export default (
  <Route path="*" component={PageNotFound}/>
);
