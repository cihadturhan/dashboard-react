import mainnavData from 's_constants/mainnavData';
import {browserHistory} from 'react-router';

export default {
  user: {},
  mainnav: mainnavData,
  activeItem: null,
  location: browserHistory.getCurrentLocation(),
  currentPage: {}
};
