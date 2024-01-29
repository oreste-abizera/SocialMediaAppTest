import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

const CustomHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Ionicons
          name="chevron-back"
          size={24}
          color={props.isDarkMode ? "white" : "black"}
        />
        <Text
          style={{ marginLeft: 8, color: props.isDarkMode ? "white" : "black" }}
        >
          Back
        </Text>
      </View>
      <Text style={{ color: props.isDarkMode ? "white" : "black" }}>
        Sign In
      </Text>
      <View>
        {/* change modes */}
        <Ionicons
          name={props.isDarkMode ? "sunny" : "moon"}
          size={24}
          color={props.isDarkMode ? "white" : "black"}
          onPress={() => props.setIsDarkMode(!props.isDarkMode)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
    paddingHorizontal: 16,
    // box shadow
    // shadowColor: "#000000",
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.05,
    // shadowRadius: 4,
    // // elevation (for Android)
    // elevation: 5,
  },
});

export default CustomHeader;
