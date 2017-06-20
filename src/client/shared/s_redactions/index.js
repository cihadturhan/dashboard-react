import {combineReducers} from 'redux';

import user from './user';
import mainnav from './mainnav';
import activeItem from './activeItem';
import location from './location';
import currentPage from './currentPage';

const rootReducer = combineReducers({
  user,
  mainnav,
  activeItem,
  location,
  currentPage
});

export default rootReducer;
