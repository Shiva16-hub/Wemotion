import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient"; // Import LinearGradient

const { width } = Dimensions.get("window");

const ForgatePassword = ({ navigation }) => {
  const [email, setEmail] = useState(""); // State to store the email input

  const handleContinue = () => {
    // Handle the logic for password reset instructions
    console.log("Reset password instructions sent to:", email);
    // Navigate to SendEmailScreen
    navigation.navigate("SendEmailScreen");
  };

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-left" size={20} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Forgot Your Password?</Text>

      {/* Description */}
      <Text style={styles.description}>
        No worries, enter your email, and we’ll send you instructions to reset it.
      </Text>

      {/* Email Input */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Continue Button */}
      <LinearGradient
        colors={email ? ['#A858F4', '#9032E6'] : ['#E0BFFF', '#E0BFFF']} // Linear Gradient for active/inactive button
        style={[styles.continueButton, email ? styles.activeButton : styles.inactiveButton]}
      >
        <TouchableOpacity onPress={handleContinue} disabled={!email} style={styles.continueButtonTouchable}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 30, // Adjust as needed
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 200,
  },
  description: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 30,
  },
  label: {
    fontSize: 20,
    color: "#000",
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    width: "100%",
    height: 50,
  },
  continueButton: {
    width: width * 0.9,
    alignSelf: "center",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  continueButtonTouchable: {
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "transparent", // Let the gradient be visible
  },
  inactiveButton: {
    backgroundColor: "transparent", // Let the gradient be visible
  },
  continueText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ForgatePassword;
