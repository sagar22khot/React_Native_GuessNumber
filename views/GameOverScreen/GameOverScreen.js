import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import MainButton from "../../components/MainButton/MainButton";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        {/* <Text>The Game is Over!</Text> */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/Image/success.jpg")}
            style={styles.image}
            resizeMode="cover"
          ></Image>
        </View>
        <Text>
          Your phone needed {props.roundsNumber} rounds to guess the number{" "}
          {props.userNumber}
        </Text>
        <View style={styles.restartButtonContainer}>
          <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    // justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    height: Dimensions.get("window").width * 0.7,
    width: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  restartButtonContainer: {
    marginHorizontal: 20,
    marginVertical: Dimensions.get("window").height / 60,
  },
});

export default GameOverScreen;
