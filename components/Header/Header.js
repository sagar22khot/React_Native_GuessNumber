import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Colors from "../../constants/colors";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // header: {
  //   width: "100%",
  //   height: 90,
  //   paddingTop: 36,
  //   backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
  //   alignItems: "center",
  //   borderBottomColor: Platform.OS === "android" ? "#ccc" : "transparent",
  //   borderBottomWidth: Platform.OS === "android" ? 1 : 0,
  // },
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomWidth: 0,
    borderBottomColor: "transparent",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});

export default Header;
