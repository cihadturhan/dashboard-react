import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LeaderBoard from './pages/leaderboard'
import PageNotFound from './pages/pagenotfound';

import App from './components/App';
import Boilerplate from './components/Boilerplate';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Boilerplate} />
    {LeaderBoard}
    {PageNotFound}
  </Route>
);
