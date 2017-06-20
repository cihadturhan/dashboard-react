import React from 'react';
import { render } from 'react-dom';
import { Route, IndexRedirect} from 'react-router';
import NewAppList from './components/NewAppList';

import Category from 's_constants/category';
import {slugify} from 'maUtils';

let defaultCategory = slugify(Category.DEFAULT_IOS_CATEGORY.name);

export default (
  <Route path="new" component={NewAppList}>
    <IndexRedirect to={`platform/playstore/device/iphone/country/us/category/${defaultCategory}`}/>
    <Route path="platform/:platform/device/:device/country/:country/category/:category" component={NewAppList}/>
  </Route>
);
