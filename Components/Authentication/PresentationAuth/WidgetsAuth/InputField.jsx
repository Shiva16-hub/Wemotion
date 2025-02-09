import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({ label, value, onChange, keyboardType }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={label}
        value={value}
        onChangeText={onChange}
        keyboardType={keyboardType || 'default'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: { marginBottom: 20 },
  inputLabel: { fontSize: 18, fontWeight: 'bold', marginBottom: 4, color: '#000' },
  input: {
    borderWidth: 1.5,
    borderColor: '#666',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#000',
    height: 60,
  },
});

export default InputField;
