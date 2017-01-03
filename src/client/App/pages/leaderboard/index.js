import React from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute} from 'react-router';

import AppHeader from './components/AppHeader';
import LeaderBoardHome from './components/Leaderboard';
import TopRoute from './pages/top';
import NewRoute from './pages/new';

export default (
  <Route path="leaderboard" component={AppHeader}>
    <IndexRoute component={LeaderBoardHome}/>
    {TopRoute}
    {NewRoute}
  </Route>);
