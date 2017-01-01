export const USER_FETCH_REQUEST = 'USER_FETCH_REQUEST';
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
export const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE';

import constants from 'constants';
const api = constants.url.api;


export const initialState = {
  item: undefined,
  isStarted: false,
  isFetching: false,
  isSaving: false,
  errors: []
};

// Reducer
export default function user(state = initialState, action) {
  let item;
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return {
        ...state,
        errors: [],
        isStarted: true,
        isFetching: true
      };
    case USER_FETCH_SUCCESS:
      item = action.payload.data;
      return {
        ...state,
        isFetching: false,
        item: {
          ...item
        }
      };
    case USER_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}

//Action Creators

export function getUserInfo() {
  return (dispatch, getState) => {

    return dispatch({
      types: [USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_FAILURE],
      payload: {
        request: {
          url: api.userInfo,
          withCredentials: true
        }
      }
    });

  };
}


