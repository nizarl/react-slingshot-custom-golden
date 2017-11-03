//NOTE: //SSO uses cookiestore
//We do not want to store state in 2 place (i.e. cookiestore and redux) so we use cookiestore

import Cookies from 'universal-cookie';
import config from '../project.properties';
const queryString = require('query-string');
const cookies = new Cookies();

export function patientData() {

  function set() {
    const parsed = queryString.parse(location.search);
    const patientIdFromUrl = parsed.patientId;

    const ssoPatId = cookies.get('patientId');
    const ssoAT = cookies.get('at');

    //Check for patientId in URL (this takes precedence while in test). We are using this for now for backward compatibility.
    if ((patientIdFromUrl)) {
      cookies.set('patientId', patientIdFromUrl);
    }

    // //check for patientId and authentication token in cookie store from Referer: cookie data set by referer no need to set in aggregator;
    else if (ssoPatId && ssoAT) {
      return true;
    }

    // //use default test patient (will remove once SSO and contextual data is ready)
    else {
      cookies.set('patientId', config.defaultTestPatientId);
    }

  }

  function get() {
    const patientIdFromCookieStore =  cookies.get('patientId');
    return patientIdFromCookieStore;


  }

  return {
    get: get,
    set: set
  };
}
