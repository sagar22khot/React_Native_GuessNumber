import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
