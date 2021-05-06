import {userLoginReducer, userRegisterReducer} from './userReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

export default rootReducer;
