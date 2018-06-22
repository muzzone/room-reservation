import {popover, reservedSlots} from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  popover,
  reservedSlots
});

export default rootReducer;