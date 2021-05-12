import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  GOOGLE_USER_LOGIN_REQUEST,
  GOOGLE_USER_LOGIN_SUCCESS,
  GOOGLE_USER_LOGIN_FAIL,
  GOOGLE_USER_LOGOUT,
} from '../constants/userConstants';

export const userGoogleLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case GOOGLE_USER_LOGIN_REQUEST:
      return {loading: true};
    case GOOGLE_USER_LOGIN_SUCCESS:
      return {loading: false, userInfo: action.payload};
    case GOOGLE_USER_LOGIN_FAIL:
      return {loading: false, error: action.payload};
    case GOOGLE_USER_LOGOUT:
      return {loading: false, userInfo: null};
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {loading: true};
    case USER_LOGIN_SUCCESS:
      return {loading: false, userInfo: action.payload};
    case USER_LOGIN_FAIL:
      return {loading: false, error: action.payload};
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {loading: true};
    case USER_REGISTER_SUCCESS:
      return {loading: false, userInfo: action.payload};
    case USER_REGISTER_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
