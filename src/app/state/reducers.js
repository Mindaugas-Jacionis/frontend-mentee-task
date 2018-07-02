import { combineReducers } from 'redux';
import authReducer from '../../auth/reducer';
import serverReducer from '../../servers/reducer';

const AUTH = 'AUTH';
const SERVER = 'SERVER';

const rootReducer = combineReducers({
  [AUTH]: authReducer,
  [SERVER]: serverReducer
});

export default rootReducer;
