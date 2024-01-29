import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import googleImage from "../assets/google.png";
import appleImage from "../assets/apple.png";
import whiteAppleImage from "../assets/white-apple.png";

type Props = {
  isDarkMode: boolean;
};

const SignInScreen = ({ isDarkMode }: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: isDarkMode ? "white" : "black" }]}>
        Hi There
      </Text>
      <Text style={styles.subtitle}>Welcome back, Sign in to your account</Text>
      <View
        style={[styles.inputContainer, isDarkMode && styles.darkInputContainer]}
      >
        <TextInput
          placeholder="Your email"
          style={[styles.input, isDarkMode && styles.darkInput]}
        />
      </View>
      <View
        style={[styles.inputContainer, isDarkMode && styles.darkInputContainer]}
      >
        <TextInput
          placeholder="Your password"
          style={[styles.input, isDarkMode && styles.darkInput]}
          secureTextEntry={!isPasswordVisible}
        />
        <Ionicons
          name={isPasswordVisible ? "eye-off" : "eye"}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={{ marginLeft: 8 }}
          size={24}
          color="#5F7993"
        />
      </View>
      <Text style={styles.forgotPassword}>Forgot password</Text>
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "#E0E0E0" }} />
        <Text style={{ color: "#5F7993", marginHorizontal: 8 }}>OR</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "#E0E0E0" }} />
      </View>
      <View
        style={{ display: "flex", flexDirection: "row", marginVertical: 16 }}
      >
        <TouchableOpacity
          style={{
            marginRight: 8,
            borderColor: "#E0E0E0",
            borderWidth: 1,
            borderRadius: 12,
            padding: 20,
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={isDarkMode ? whiteAppleImage : appleImage}
            style={{ height: 30, resizeMode: "contain" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 8,
            borderColor: "#E0E0E0",
            borderWidth: 1,
            borderRadius: 12,
            padding: 20,
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={googleImage}
            style={{ height: 30, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={{ color: isDarkMode ? "white" : "black" }}>
          Don't have an account?
        </Text>
        <Text style={{ color: "#3385FF", marginLeft: 8 }}>Sign Up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  title: {
    color: "#212B36",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 16,
  },
  subtitle: {
    color: "#5F7993",
    fontSize: 16,
    marginBottom: 24,
    maxWidth: 255,
  },
  inputContainer: {
    backgroundColor: "rgba(244, 246, 246, 0.52)",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(204, 217, 255, 0.15)",
    padding: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  darkInputContainer: {
    backgroundColor: "rgba(56, 78, 99, 0.52)",
    borderColor: "rgba(51, 102, 255, 0.15)",
  },
  input: {
    flex: 1,
    color: "#5F7993",
    fontSize: 14,
    fontWeight: "400",
  },
  darkInput: {
    color: "#90BAE4",
  },
  forgotPassword: {
    color: "#3385FF",
    fontSize: 16,
    marginBottom: 16,
  },
  signInButton: {
    backgroundColor: "#3385FF",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  signInButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default SignInScreen;
