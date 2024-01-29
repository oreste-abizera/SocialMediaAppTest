import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import SignInScreen from "./screens/SignInScreen";
import CustomHeader from "./components/CustomHeader";
import { useState } from "react";

export default function App() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
  return (
    <View style={isDarkMode ? styles.darkContainer : styles.container}>
      <CustomHeader isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <SignInScreen isDarkMode={isDarkMode} />
      <StatusBar style={isDarkMode ? "light" : "dark"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  darkContainer: {
    flex: 1,
    backgroundColor: "#212B36",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
