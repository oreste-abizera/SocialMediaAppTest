import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

const CustomHeader = (props: Props) => {
  return (
    <View style={[styles.container]}>
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
        }}
      >
        Sigh In
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
    marginTop: 40,
    marginBottom: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 72,
    paddingHorizontal: 23,
  },
});

export default CustomHeader;
