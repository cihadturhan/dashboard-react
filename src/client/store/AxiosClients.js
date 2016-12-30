import constants from 'constants';
import axios from 'axios';


export default axios.create({
  default: {
    baseURL: constants.url.API_DOMAIN,
    withCredentials: true,
    responseType: 'json',
    json: true
  },
  remote: {
    baseURL: constants.url.SELF_DOMAIN,
    withCredentials: true,
    responseType: 'json',
    json: true
  }
});
