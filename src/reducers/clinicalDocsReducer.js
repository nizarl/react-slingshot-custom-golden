//import {CLINICALDOCS_TOGGLE_FUNCTION} from '../constants/actionTypes';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note: I'm using the ES6 spread operator to ensure immutability. It makes a shallow clone.

// You could do the following if you need access to further areas of state:
// export default function clinicalDocsReducer(state = initialState, action) {

// For example: to make this function reusable by many components make state=initialState,
// and use the component id to update state to any component that is collapsable

export default function clinicalDocsReducer(state = initialState.components.byId[1], action) {

  switch (action.type) {
    case types.CLINICALDOCS_TOGGLE_FUNCTION:
      return {
        ...state,
        isOpened: !state.isOpened
      };
    
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        clinicaldocsData: action.resp
      }

    default:
      return state;
  }
}
