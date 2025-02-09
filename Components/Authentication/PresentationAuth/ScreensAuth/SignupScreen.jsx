import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../WidgetsAuth/InputField';
import PasswordInputField from '../WidgetsAuth/PasswordInputField';
import GradientButton from '../WidgetsAuth/GradientButton';
import AuthService from '../../ApplicationAuth/ServicesAuth/AuthService';

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isFormValid = firstName.trim() && lastName.trim() && username.trim() && email.trim() && password.trim();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <Ionicons
          name="arrow-back"
          size={28}
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.loginText} onPress={() => navigation.navigate('LoginScreen')}>Login</Text>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>Signup to join the conversation and connect with your community</Text>

        <InputField label="First name" value={firstName} onChange={setFirstName} />
        <InputField label="Last name" value={lastName} onChange={setLastName} />
        <InputField label="Username" value={username} onChange={setUsername} />
        <InputField label="Email" value={email} onChange={setEmail} keyboardType="email-address" />
        <PasswordInputField
          label={'Password'}
          value={password}
          onChange={setPassword}
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
        />
        
        <GradientButton
          title="Continue"
          onPress={() => AuthService.handleSignUp({ firstName, lastName, username, email, password }, navigation)}
          isDisabled={!isFormValid}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, padding: 20, backgroundColor: '#FFFFFF' },
  backIcon: { color: '#000' },
  loginText: { position: 'absolute', top: 18, right: 20, color: '#666', fontWeight: 'bold', fontSize: 16 },
  title: { fontSize: 30, fontWeight: 'bold', color: '#000', marginBottom: 10, marginTop: 20 },
  subtitle: { fontSize: 19, color: '#666', marginBottom: 20, marginTop: 10 },
});

export default SignupScreen;
