import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthScreens, DashboardScreens} from './AppNavigator';

// redux
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;

  return (
    <NavigationContainer>
      {!userInfo ? <AuthScreens /> : <DashboardScreens />}
    </NavigationContainer>
  );
};

export default AuthNavigator;
