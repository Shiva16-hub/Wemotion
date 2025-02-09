import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, StyleSheet } from 'react-native';

const PasswordVisibilityToggle = ({ isPasswordVisible, setIsPasswordVisible }) => {
  return (
    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
      <Ionicons
        name={isPasswordVisible ? 'eye' : 'eye-off'}
        size={24}
        color="#000"
        style={styles.passwordIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  passwordIcon: {
    marginLeft: 10,
  },
});

export default PasswordVisibilityToggle;
