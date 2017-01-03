import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LeaderBoard from './pages/leaderboard';
import PageNotFound from './pages/pagenotfound';

import App from './components/App';
import Index, {AppReport} from './pages/appreport';


export default (
  <Route path="/" component={App}>
    {Index}
    {AppReport}

    {LeaderBoard}
    {PageNotFound}
  </Route>
);
