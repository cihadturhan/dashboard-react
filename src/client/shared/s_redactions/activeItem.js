export const MAINNAV_SET_ACTIVE = 'MAINNAV_SET_ACTIVE';

import initalState from './initialState';

// Reducer
export default function activeItem(state = initalState.activeItem, action) {
  switch (action.type) {
    case MAINNAV_SET_ACTIVE:
      return action.data;

    default:
      return state;
  }
}

// Actions
export function setActive(data){
  return {type: MAINNAV_SET_ACTIVE, data};
}
