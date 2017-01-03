import React from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute} from 'react-router';
import NewAppList from './components/NewAppList';

export default (<Route path="new" component={NewAppList}/>);
