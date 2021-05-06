import React, {useState} from 'react';

import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import InputText from '../components/InputText';
import Button from '../components/Button';

export default function ForgotPassword({navigation}) {
  const [email, setEmail] = useState({value: '', error: ''});

  return (
    <Background>
      <BackButton goBack={() => {}} />
      <Logo />
      <Header>Restore Password</Header>
      <InputText
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button mode="contained" onPress={() => {}} style={{marginTop: 16}}>
        Send Instructions
      </Button>
    </Background>
  );
}
