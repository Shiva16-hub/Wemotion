import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PasswordInputField = ({ value, onChange, isPasswordVisible, setIsPasswordVisible, label }) => {
  return (
    <View>
      {/* Password Label */}
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={{ flex: 1, fontSize: 16, color: '#000' }}
          value={value}
          onChangeText={onChange}
          placeholder="Enter your password"
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Ionicons
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color="#000"
            style={styles.passwordIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputLabel: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#000' },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#666',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 30,
    height: 60,
  },
  passwordIcon: { marginLeft: 10 },
});

export default PasswordInputField;
