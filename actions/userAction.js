import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

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

    // persist user details
    await AsyncStorage.setItem('userInfo', JSON.stringify(data));
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

export const logout = () => dispatch => {
  localStorage.removeItem('userInfo');
  dispatch({type: USER_LOGOUT});
};
