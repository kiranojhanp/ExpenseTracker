import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../constants/userConstants';

// remove all persisted data || logout
const clearStorage = async () => {
  try {
    await AsyncStorage.clear()
    alert('Storage successfully cleared!')
  } catch (e) {
    console.log(e);
  }
}

// persist the tokens
const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@token', jsonValue);
  } catch (e) {
    console.log(e);
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

    // persist user details
    await storeData(data);
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

    // persist user details
    await AsyncStorage.setItem('@token', JSON.stringify(data));
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

export const logout = () => dispatch => {
  clearStorage();
  dispatch({type: USER_LOGOUT});
};