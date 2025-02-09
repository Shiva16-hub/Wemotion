import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SubmitButton = ({ title, onPress, disabled }) => (
  <TouchableOpacity
    style={[styles.button, disabled && styles.inactiveButton]}
    onPress={onPress}
    disabled={disabled}
  >
    {disabled ? (
      <Text style={styles.buttonText}>{title}</Text>
    ) : (
      <LinearGradient colors={['#A858F4', '#9032E6']} style={styles.activeButton}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensures gradient respects border radius
  },
  activeButton: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveButton: {
    backgroundColor: '#E0BFFF',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SubmitButton;
