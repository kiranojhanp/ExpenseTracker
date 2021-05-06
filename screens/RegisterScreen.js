import React, {useEffect} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

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
import {register} from '../actions/userAction';

export default function RegisterScreen({navigation}) {
  const dispatch = useDispatch();
  const userRegister = useSelector(state => state.userRegister);
  const {loading, error: registerError, userInfo} = userRegister;

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
    }
  }, [userInfo]);

  return (
    <Background>
      <BackButton goBack={() => navigation.goBack()} />
      <Logo />
      <Header>Create Account</Header>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(40).required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Must be more than 8 characters')
            .required('Required'),
        })}
        onSubmit={values =>
          dispatch(register(values.name, values.email, values.password))
        }>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <InputText
              label="Name"
              returnKeyType="next"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              touched={touched.name}
              error={errors.name}
              errorText={errors.name}
              autoCapitalize="none"
            />
            <InputText
              label="Email"
              returnKeyType="next"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              touched={touched.email}
              error={errors.email}
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
              touched={touched.password}
              error={errors.password}
              errorText={errors.password}
              secureTextEntry
            />

            <Button mode="contained" onPress={handleSubmit}>
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                'Sign Up'
              )}
            </Button>

            <Button
              mode="contained"
              onPress={handleSubmit}
              style={{marginTop: 24}}>
              Sign Up
            </Button>
          </>
        )}
      </Formik>

      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
