import axios from 'axios';
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

import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const googleLogin = idToken => async dispatch => {
  try {
    // request action
    dispatch({type: GOOGLE_USER_LOGIN_REQUEST});

    // set content type
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // send post request
    const {data} = await axios.post(
      `https://still-eyrie-92675.herokuapp.com/api/auth/google`,
      {
        token: idToken,
      },
    );

    // send back user data
    dispatch({
      type: GOOGLE_USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GOOGLE_USER_LOGIN_FAIL,
      payload: error,
    });
  }
};

export const login = (email, password) => async dispatch => {
  try {
    // request action
    dispatch({type: USER_LOGIN_REQUEST});

    // set content type
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // authorize users and send post request
    const {data} = await axios.post(
      `https://reqres.in/api/login`,
      {
        email,
        password,
      },
      config,
    );

    // send back user data
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // catch and send back the error
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (name, email, password) => async dispatch => {
  try {
    // request action
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    // set content type
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // authorize user
    const {data} = await axios.post(
      'https://reqres.in/api/register',
      {
        email,
        password,
      },
      config,
    );

    // send back registration response
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // catch error
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const googleLogout = () => async dispatch => {
  await GoogleSignin.revokeAccess();
  await GoogleSignin.signOut();
  dispatch({type: GOOGLE_USER_LOGOUT});
};

export const logout = () => dispatch => {
  dispatch({type: USER_LOGOUT});
};
