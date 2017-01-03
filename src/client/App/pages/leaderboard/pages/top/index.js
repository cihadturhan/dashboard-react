import React from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute} from 'react-router';
import TopAppList from './components/TopAppList';

export default (<Route path="top" component={TopAppList}/>);
