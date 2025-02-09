// src/application/services/AuthService.jsx

import { Alert } from 'react-native';
import { createUser, sendEmailVerification, loginUser } from '../../DataAuth/ApisAuth/authApi';

const handleSignUp = async ({ firstName, lastName, username, email, password }, navigation) => {
  const payload = {
    first_name: firstName,
    last_name: lastName,
    username,
    email,
    password,
    device_identifier: 'djej9e4332',
    merge_account: false,
  };

  try {
    const result = await createUser(payload);
    if (result.status === 'success') {
      Alert.alert('Success', 'Account created successfully!');
      await sendEmailVerification(email);
      navigation.navigate('LoginScreen');
    } else {
      Alert.alert('Error', result.message || 'Something went wrong!');
    }
  } catch (error) {
    console.error('SignUp Error:', error);
    Alert.alert('Error', 'Failed to create account. Please try again.');
  }
};

const handleLogin = async ({ email, password }) => {
  const payload = {
    mixed: email,
    password,
    app_name: 'wemotions',
  };

  try {
    const result = await loginUser(payload);
    return result;
  } catch (error) {
    console.error('Login Error:', error);
    return { status: 'error', message: 'Failed to login. Please try again.' };
  }
};

const AuthService = {
  handleSignUp,
  handleLogin,
};

export default AuthService;
