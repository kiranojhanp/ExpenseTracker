import React from 'react';

import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

// redux
import {useDispatch} from 'react-redux';
import {logout} from '../actions/userAction';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button mode="outlined" onPress={() => dispatch(logout())}>
        Logout
      </Button>
    </Background>
  );
}
