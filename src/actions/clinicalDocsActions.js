import * as types from '../constants/actionTypes';
import {getData} from '../utils/http.client';
import 'babel-polyfill';


// example of a thunk using the redux-thunk middleware
export function toggleCollapseComponent(event, id) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.CLINICALDOCS_TOGGLE_FUNCTION,
      id
    });
  };
}

export function loadSuccess(resp){
  return {type: types.FETCH_DATA_SUCCESS, resp};
}

export function fetchClinicalDocsData (){
  return async function (dispatch){
    let resp = await getData();
    dispatch(loadSuccess(resp.data));

    // var resp = .then(resp => {
    //   dispatch(loadSuccess(resp.data));
    // }).catch(error => {
    //   throw(error);
    // })

  };

}

