import * as ActionTypes from '../constants/actionTypes';
import reducer from './clinicalDocsReducer';
import clinicalDocsMockData from '../mocks/clinicaldocs.mock';
import {fetchClinicalDocsData} from '../actions/clinicalDocsActions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import initialState from '../reducers/initialState';



describe('Reducers::ClinicalDocs', () => {

  const getInitialState = () => {
    return {
        clinicaldocsData: [],
        id: 1,
        isOpened: true,
        name: "clinicaldocs",
        urlPath: "clinicaldocs/"
    };
  };

  const getAppState = () => {
    return {
        clinicaldocsData: [clinicalDocsMockData],
        id: 1,
        isOpened: true,
        name: "clinicaldocs",
        urlPath: "clinicaldocs/"
    };
  };


  it('should set initial state by default', () => {
    const action = {
      type: 'unknown'
    };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle CLINICALDOCS_TOGGLE_FUNCTION', () => {
    const action = { type: ActionTypes.CLINICALDOCS_TOGGLE_FUNCTION};
    const expected = Object.assign(getAppState(), { isOpened:false });

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle FETCH_DATA_ERROR', () => {
    const action = { type: ActionTypes.FETCH_DATA_ERROR};
    const expected = Object.assign(getAppState());
    expect(reducer(getAppState(), action)).not.toBe(expected);
  });

  it('should handle FETCH_DATA_SUCCESS', () => { 
    //fetchClinicalDocsData();
    // let resp = clinicalDocsMockData;
    // const action = { type: ActionTypes.FETCH_DATA_SUCCESS};
    // const expected = Object.assign(getAppState());
    // expect(reducer(getAppState(), action, resp)).toEqual(expected);    
    
   

    let middlewares = [ thunk ];
    let mockStore = configureStore(middlewares);
    let store = mockStore(initialState);
    const action = { type: ActionTypes.FETCH_DATA_SUCCESS};
    store.dispatch(action);
    let resp = clinicalDocsMockData;
    const expected = Object.assign(getAppState());
    setTimeout(function() {
        expect(reducer(getAppState(), action, resp)).toEqual(expected);    
    }, 1000);
    });
});
