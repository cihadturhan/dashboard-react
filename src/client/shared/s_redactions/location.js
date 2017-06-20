import initalState from './initialState';
import {setCurrentPage} from './currentPage';

const LOCATION_UPDATE = 'LOCATION_UPDATE';


export default function(state = initalState.location,  action){
  switch (action.type){
    case LOCATION_UPDATE:
      return action.location;
    default:
      return state;
  }
}

// actions/location.js
export function routeLocationDidUpdate(location) {
  return (dispatch, getState) => {

    dispatch(setCurrentPage(location));

    dispatch({
      type: LOCATION_UPDATE,
      location: {
        ...location
      }
    });

  };
}


