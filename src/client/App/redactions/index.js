import {combineReducers} from 'redux';

import user from './user';
import mainnav from './mainnav';
import activeItem from './activeItem';

const rootReducer = combineReducers({
  user,
  mainnav,
  activeItem
});

export default rootReducer;
