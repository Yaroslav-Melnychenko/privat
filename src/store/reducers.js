import { combineReducers } from 'redux';
import currencies from './currencies/reducer';
import atms from './atms/reducer';

export default combineReducers({
  currencies,
  atms
});