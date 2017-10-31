import * as types from '../constants/actionTypes';
import {getData} from '../utils/http.client';


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

export function loadSuccess(resp) {
  return {
    type: types.FETCH_DATA_SUCCESS,
    resp
  };
}
export function loadError(resp) {
  return {
    type: types.FETCH_DATA_ERROR,
    resp
  };
}

export function fetchClinicalDocsData() {
  return (dispatch) => {
    let httpClient = getData();
  //  let fet = g.get();

    httpClient.get().then((resp) => {
      dispatch(loadSuccess(resp.data));
    })
    .catch((err)=>{
      dispatch(loadError(err.response));
      console.log(err);
    });
  };

}
