import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import rootReducer from './reducers/index';

import thunk from 'redux-thunk';
const middleware = [thunk];

// for redux persist
const persistConfig = {
  key: 'persistedReducer',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

let persistor = persistStore(store);

export {store, persistor};
