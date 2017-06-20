export const CURRENT_PAGE_SET = 'CURRENT_PAGE_SET';

import initalState from './initialState';
import mainnavData from 's_constants/mainnavData';



// Reducer
export default function activeItem(state = initalState.currentPage, action) {
  switch (action.type) {
    case CURRENT_PAGE_SET:{
      const pathname = action.location.pathname;


      for (let key in mainnavData){
        let d = mainnavData[key];

        if(d.href == pathname){
          return Object.assign({}, d);
        }

        if(d.contents)
          for (let dd of d.contents) {
            if (dd.href == pathname)
              return Object.assign({}, dd);
          }

      }

      return null;
    }

    default:
      return state;
  }
}

// Actions
export function setCurrentPage(location){
  return {type: CURRENT_PAGE_SET, location};
}
