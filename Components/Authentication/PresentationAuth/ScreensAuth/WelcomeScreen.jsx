import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BackgroundVideo from '../WidgetsAuth/BackgroundVideo';
import GradientButton from '../WidgetsAuth/GradientButton';

const WelcomeScreen = ({navigation}) => {
  const handleLoginPress = () => {
    navigation.navigate('LoginScreen');
  };

  const handleSignupPress = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <View style={styles.background}>
      <BackgroundVideo />

      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Think..Record..Engage</Text>
          <Text style={styles.description}>
            Get started with just a few quick taps. Jump right into engaging conversations and
            connect with others effortlessly, no delays or hassle.
          </Text>
          <GradientButton title="Dive into WeMotions" onPress={() => {}} />
          <TouchableOpacity style={styles.secondaryButton} onPress={handleSignupPress}>
            <Text style={styles.secondaryButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles remain as in the original code.
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  overlay: {
    flex: 1,
    //backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderRadius: 32,
    padding: 30,
    width: 450,
    height: 400,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 550,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  description: {
    fontSize: 18,
    color: '#444',
    marginBottom: 35,
  },
  primaryButton: {
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 25,
    width: '100%',
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  loginButton: {
    position: 'absolute',
    top: 30, // Adjust spacing for better alignment with the status bar
    right: 20, // Adjust spacing to position it on the right
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // White color for visibility
  }
});

export default WelcomeScreen;
