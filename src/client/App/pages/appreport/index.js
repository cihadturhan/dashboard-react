import React from 'react';
import {render} from 'react-dom';
import {Route,IndexRoute} from 'react-router';
import AppInfo from './components/AppInfo';

export default (<IndexRoute component={AppInfo}/>);

export const AppReport = (<Route path="appreport" component={AppInfo}/>);
