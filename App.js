import React from 'react';

// redux
import {Provider} from 'react-redux';
import {store, persistor} from './store';

// redux persist
import {PersistGate} from 'redux-persist/integration/react';

// Navigation
import AuthNavigator from './navigation/AuthNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
