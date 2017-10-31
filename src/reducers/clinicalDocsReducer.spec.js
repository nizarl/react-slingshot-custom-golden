import * as ActionTypes from '../constants/actionTypes';
import reducer from './clinicalDocsReducer';
import clinicalDocsMockData from '../mocks/clinicaldocs.mock';
import {fetchClinicalDocsData} from '../actions/clinicalDocsActions';


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

  it('should handle FETCH_DATA_SUCCESS', () => {

    const action = { type: ActionTypes.FETCH_DATA_SUCCESS};
    fetchClinicalDocsData();
    setTimeout(function() {
        const expected = getAppState();
        expect(reducer(getAppState(), action)).toEqual(expected);
    }, 2000);
   
  });
});
