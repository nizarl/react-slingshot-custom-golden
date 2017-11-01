import * as types from '../constants/actionTypes';
import {getData} from '../utils/http.client';


// example of a thunk using the redux-thunk middleware
export function toggleCollapseComponent(event, id) {
  return function (dispatch) {
    // thunk
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

    httpClient.get().then((resp) => {
      dispatch(loadSuccess(resp.data));
    })
    .catch((err)=>{
      console.log(err); // eslint-disable-line no-console
      dispatch(loadError(err));
    });
  };

}
