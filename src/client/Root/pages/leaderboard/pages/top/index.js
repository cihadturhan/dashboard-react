import React from 'react';
import {render} from 'react-dom';
import {Route, IndexRedirect} from 'react-router';
import TopAppList from './components/TopAppList';

export const TopRedirect = (<IndexRedirect to="top"/>);

import Category from 's_constants/category';
import {slugify} from 'maUtils';

let defaultCategory = slugify(Category.DEFAULT_IOS_CATEGORY.name);

export default (
  <Route path="top" component={TopAppList}>
    <IndexRedirect to={`platform/playstore/device/iphone/country/us/category/${defaultCategory}`}/>
    <Route path="platform/:platform/device/:device/country/:country/category/:category" component={TopAppList}/>
  </Route>
);
