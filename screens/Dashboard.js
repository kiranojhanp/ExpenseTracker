import React, {useEffect} from 'react';

import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {googleLogout} from '../actions/userAction';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();

  const userGoogleLogin = useSelector(state => state.userGoogleLogin);
  const {loading, error, userInfo} = userGoogleLogin;

  return (
    <Background>
      <Logo logo={userInfo.picture} />
      <Header>{userInfo.name}</Header>
      <Paragraph>{userInfo.email}</Paragraph>
      <Button mode="outlined" onPress={() => dispatch(googleLogout())}>
        Logout
      </Button>
    </Background>
  );
}
