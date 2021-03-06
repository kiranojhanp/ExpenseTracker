import React, {useEffect} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {WEB_CLIENT_ID} from '../CONSTANTS';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
  offlineAccess: true,
});

import {
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import {Text} from 'react-native-paper';

import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import InputText from '../components/InputText';
import BackButton from '../components/BackButton';
import {theme} from '../core/theme';

// redux
import {useSelector, useDispatch} from 'react-redux';
import {googleLogin} from '../actions/userAction';

export default function LoginScreen({navigation}) {
  const dispatch = useDispatch();
  const userGoogleLogin = useSelector(state => state.userGoogleLogin);
  const {loading, error} = userGoogleLogin;

  const _signin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const {idToken} = userInfo;

      dispatch(googleLogin(idToken));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Background>
      {loading && (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      )}

      {!loading && (
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .min(8, 'Must be more than 8 characters')
              .required('Required'),
          })}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <>
              <BackButton goBack={() => navigation.goBack()} />
              <Logo />
              {error && <Header>Some error occured</Header>}
              <Header>Welcome back.</Header>

              <InputText
                label="Email"
                returnKeyType="next"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email && touched.email}
                errorText={errors.email}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
              />
              <InputText
                label="Password"
                returnKeyType="done"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={errors.password && touched.password}
                errorText={errors.password}
                secureTextEntry
              />
              <View style={styles.forgotPassword}>
                <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
                  <Text style={styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
              </View>
              <Button mode="contained" onPress={handleSubmit}>
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  'Login'
                )}
              </Button>

              <Text>OR</Text>

              <GoogleSigninButton
                style={{width: 312, height: 58}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={_signin}
                disabled={loading}
              />

              <View style={styles.row}>
                <Text>Don???t have an account? </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      )}
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
