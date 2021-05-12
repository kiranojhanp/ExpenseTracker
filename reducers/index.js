import {
  userGoogleLoginReducer,
  userLoginReducer,
  userRegisterReducer,
} from './userReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  userGoogleLogin: userGoogleLoginReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

export default rootReducer;
