import * as types from '../constants/actionTypes';
import initialState from './initialState';

/*
* IMPORTANT: In Redux, state should only be changed by Reducers.
* State is considered immutable. (Object.assign and spread operator can be used to ensure immutability.)

* To access entire state object just you could do the following.
* export default function clinicalDocsReducer(state = initialState, action) {

* --------------- Example ClinicalDocs Reducer: ------------
*/
export default function clinicalDocsReducer(state = initialState.components.byId[1], action = action) {

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
      };

    case types.FETCH_DATA_ERROR:
      //You could update state here for failed fetch.  In this example just return state.
      return state;

    default:
      return state;
  }
}
