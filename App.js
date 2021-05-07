import React from 'react';

// redux
import {Provider} from 'react-redux';
import store from './store';

// Navigation
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
