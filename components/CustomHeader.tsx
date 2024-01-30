import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

const CustomHeader = (props: Props) => {
  return (
    <View style={[styles.container, props.isDarkMode && styles.containerDark]}>
      {/* back button */}
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          borderWidth: 1,
          borderColor: !props.isDarkMode ? "#F4F9FF" : "#364452",
          borderRadius: 50,
          paddingRight: 12,
          paddingVertical: 4,
          width: 80,
        }}
      >
        <Ionicons
          name="chevron-back"
          size={18}
          color={props.isDarkMode ? "white" : "#212B36"}
        />
        <Text
          style={{
            marginLeft: 4,
            color: props.isDarkMode ? "white" : "#212B36",
          }}
        >
          Back
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: props.isDarkMode ? "white" : "#212B36",
          fontWeight: "600",
          marginLeft: -70,
        }}
      >
        Sign In
      </Text>
      <View>
        {/* change modes */}
        <Ionicons
          name={props.isDarkMode ? "sunny" : "moon"}
          size={24}
          color={props.isDarkMode ? "white" : "#212B36"}
          onPress={() => props.setIsDarkMode(!props.isDarkMode)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingTop: 40,
    marginBottom: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 110,
    paddingHorizontal: 23,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(229, 242, 255, 0.80)",
    shadowColor: "#000",
    shadowOpacity: 0.13,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  containerDark: {
    shadowColor: "rgba(22, 28, 36, 0.30)",
    borderBottomColor: "rgba(76, 113, 223, 0.82)",
    backgroundColor:
      "linear-gradient(277deg, rgba(48, 60, 90, 0.64) -25.41%, rgba(39, 44, 60, 0.78) 89.57%)",
  },
});

export default CustomHeader;
