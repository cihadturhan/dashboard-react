import * as types from '../constants/ActionTypes';
import constants from 'constants';
const api = constants.url.api;

export function getUserInfo() {
  return (dispatch, getState) => {

    return dispatch({
      types: [types.USER_FETCH_REQUEST, types.USER_FETCH_SUCCESS, types.USER_FETCH_SUCCESS ],
      payload: {
        request: {
          url: api.userInfo,
          withCredentials: true
        }
      }
    });

  };
}


