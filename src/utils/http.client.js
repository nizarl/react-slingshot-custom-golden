import * as types from '../constants/actionTypes';
import axios from 'axios';

export function getData(params) { 
    return  axios.get('../mocks/clinicaldocs.mock.json'); 
    // return async dispatch => {
    //   function onSuccess(success) {
    //     dispatch({ type: types.FETCH_DATA_SUCCESS, payload: success });
    //     return success;
    //   }
    //   function onError(error) {
    //     dispatch({ type: types.FETCH_DATA_ERROR, error });
    //     return error;
    //   }
    //   try {
    //     const success = await axios.get('../mocks/clinicaldocs.mock');
    //     return onSuccess(success);
    //   } catch (error) {
    //     return onError(error);
    //   }
    // }
  }