import React from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute} from 'react-router';

import LeaderBoardHome from './components/Leaderboard';
import PageContentBoilerplate from 's_components/PageContentBoilerplate';
import TopRoute, {TopRedirect} from './pages/top';
import NewRoute from './pages/new';

//TopRedirect redirects /leaderboard/ -> /leaderboard/top

export default (
  <Route path="leaderboard" component={PageContentBoilerplate}>
    {TopRedirect}
    {TopRoute}
    {NewRoute}
  </Route>);
