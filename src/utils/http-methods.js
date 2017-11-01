// /*
// ** current convention below: components are coupled to application business services:
// https://patientsummary-app-int.chenmed.local/PatientSummaryService/patientSummary/componentName/patientId
// */
// import config from '../project.properties.json';
// import {BASE_URL} from '../Helpers/api-config';
// import {getPatientId} from './patient-info';
// import axios from 'axios';

// export const Fetch_Component_Data = function (obj) {
//   var baseUrl = BASE_URL;
//   var patientId = getPatientId();
//   var componentPath = config.componentInfo[obj.componentName].urlPath;
//   var ret = axios.get(baseUrl + componentPath + patientId);
//   return ret;
// }

// export const Fetch_Mock_Data = function () {
//   var baseUrl = '../mockdata/';
//   var fileName = 'clinicaldocs.json'
//   var ret = axios.get(baseUrl + fileName);
//   return ret;
// }