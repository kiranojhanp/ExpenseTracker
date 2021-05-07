import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './reducers/index';

import thunk from 'redux-thunk';
const middleware = [thunk];

// get persisted user details
const retrieveData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@token');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

var userData = retrieveData();

const userInfoFromStorage = userData ? userData : null;

const initialState = {
  userLogin: {userInfo: userInfoFromStorage},
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
