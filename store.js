import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './reducers/index';

import thunk from 'redux-thunk';
const middleware = [thunk];

// get persisted user details
const userInfoFromStorage = AsyncStorage.getItem('userInfo')
  ? JSON.parse(AsyncStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: {userInfo: userInfoFromStorage},
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
