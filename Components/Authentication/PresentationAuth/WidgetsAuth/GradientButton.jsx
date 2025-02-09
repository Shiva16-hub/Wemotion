import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient colors={['#A858F4', '#9032E6']} style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  primaryButton: {
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 100,
    marginBottom: 25,
   
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default GradientButton;
