import * as types from '../constants/ActionTypes';
import {url} from 'constants';

export const initialState = {
  item: undefined,
  isStarted: false,
  isFetching: false,
  isSaving: false,
  errors: []
};

export default function user(state = initialState, action) {
  let item;
  switch (action.type) {
    case types.USER_FETCH_REQUEST:
      return {
        ...state,
        errors: [],
        isStarted: true,
        isFetching: true
      };
    case types.USER_FETCH_SUCCESS:
      item = action.payload.data;
      return {
        ...state,
        isFetching: false,
        item: {
          ...item
        }
      };
    case types.USER_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}
