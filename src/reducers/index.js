import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import clinicaldocsProps from './clinicalDocsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  clinicaldocsProps,
  routing: routerReducer
});

export default rootReducer;
