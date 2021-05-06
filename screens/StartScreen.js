import React from 'react';

import Background from '../components/Background';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

const StartScreen = ({navigation}) => {
  return (
    <Background>
      <Logo />
      <Header>Expense Tracker</Header>
      <Paragraph>The easiest way to track your expenses records.</Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('Register')}>
        Sign Up
      </Button>
    </Background>
  );
};

export default StartScreen;
