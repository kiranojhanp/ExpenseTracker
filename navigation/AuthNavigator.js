import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AuthScreens, DashboardScreens} from './AppNavigator';

// redux
import {useSelector} from 'react-redux';

const AuthNavigator = () => {
  const userGoogleLogin = useSelector(state => state.userGoogleLogin);
  const {loading, userInfo} = userGoogleLogin;

  return (
    <NavigationContainer>
      {!userInfo ? <AuthScreens /> : <DashboardScreens />}
    </NavigationContainer>
  );
};

export default AuthNavigator;
