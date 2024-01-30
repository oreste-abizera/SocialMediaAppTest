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

const HorizontalLine = () => (
  <View style={{ flex: 1, height: 1, backgroundColor: "#7F97AC" }} />
);

const SignInScreen = ({ isDarkMode }: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: isDarkMode ? "white" : "black" }]}>
        Hi There!
      </Text>
      <Text style={styles.subtitle}>Welcome back, Sign in to your account</Text>

      {/* Email Input */}
      <View
        style={[styles.inputContainer, isDarkMode && styles.darkInputContainer]}
      >
        <TextInput
          placeholder="Your email"
          style={[styles.input, isDarkMode && styles.darkInput]}
          placeholderTextColor={isDarkMode ? "#90BAE4" : "#5F7993"}
        />
      </View>

      {/* Password Input */}
      <View
        style={[styles.inputContainer, isDarkMode && styles.darkInputContainer]}
      >
        <TextInput
          placeholder="Your password"
          style={[styles.input, isDarkMode && styles.darkInput]}
          secureTextEntry={!isPasswordVisible}
          placeholderTextColor={isDarkMode ? "#90BAE4" : "#5F7993"}
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

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
        <Ionicons
          name="chevron-forward"
          size={20}
          color="#FFFFFF"
          style={{ marginLeft: 4 }}
        />
      </TouchableOpacity>

      {/* OR Line */}
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <HorizontalLine />
        <Text style={{ color: "#7F97AC", marginHorizontal: 8, fontSize: 12 }}>
          OR
        </Text>
        <HorizontalLine />
      </View>

      {/* Social Buttons */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 24,
        }}
      >
        <TouchableOpacity
          style={[styles.socialButtonStyle, { marginRight: 16 }]}
        >
          <Image
            source={googleImage}
            style={{ height: 23, width: 23, resizeMode: "contain" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonStyle}>
          <Image
            source={isDarkMode ? whiteAppleImage : appleImage}
            style={{ height: 23, width: 23, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: isDarkMode ? "#688CAC" : "#7F97AC" }}>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    shadowColor: "#3385FF",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    // shadowRadius: 20,
    shadowOpacity: 0.1,
    elevation: 20,
  },
  signInButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  socialButtonStyle: {
    borderColor: "#7F97AC",
    borderWidth: 1,
    borderRadius: 16,
    height: 56,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignInScreen;
