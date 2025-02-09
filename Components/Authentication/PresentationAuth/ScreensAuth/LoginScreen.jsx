// src/screens/LoginScreen.jsx

import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Alert, Keyboard, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../WidgetsAuth/InputField';
import PasswordInputField from '../WidgetsAuth/PasswordInputField';
import SubmitButton from '../WidgetsAuth/SubmitButton';
import AuthService from '../../ApplicationAuth/ServicesAuth/AuthService';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = async () => {
    if (!isFormValid) {
      setErrorMessage('Please fill in both fields');
      return;
    }

    try {
      const result = await AuthService.handleLogin({ email, password });
      if (result.status === 'success') {
        setErrorMessage('');
        Alert.alert('Login Successful');
        navigation.reset({
          index: 0,
          routes: [{ name: 'HomeScreen' }],
        });
      } else {
        setErrorMessage(result.message || 'Incorrect email/username or password');
      }
    } catch (error) {
      console.error('Login Error:', error);
      setErrorMessage('Failed to login. Please try again.');
    }
  };

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Ionicons name="arrow-back" size={28} style={styles.backIcon} onPress={() => navigation.goBack()} />
          <Text style={styles.signupText} onPress={() => navigation.navigate('SignupScreen')}>Sign up</Text>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Login to join the conversation and connect with your community</Text>

          <InputField label="Email or username" value={email} onChange={setEmail} placeholder="Email or username" />
          <PasswordInputField
            label="Password"
            value={password}
            onChange={setPassword}
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
          />

          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

          <Text style={styles.forgotPasswordText} onPress={() => navigation.navigate("ForgatePassword")}>
            Forget password?
          </Text>
        </View>
      </ScrollView>

      <View style={keyboardVisible ? styles.buttonContainerWithKeyboard : styles.buttonContainer}>
        <SubmitButton title="Continue" onPress={handleLogin} disabled={!isFormValid} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  backIcon: {
    position: 'absolute',
    top: 18,
    left: 20,
    color: '#000',
  },
  signupText: {
    position: 'absolute',
    top: 18,
    right: 20,
    color: '#666',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    marginTop: 100,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  forgotPasswordText: {
    color: '#666',
    textAlign: 'right',
    marginBottom: 20,
    fontSize: 14,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  buttonContainerWithKeyboard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
});

export default LoginScreen;
