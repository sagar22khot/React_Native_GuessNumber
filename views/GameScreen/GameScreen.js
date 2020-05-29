import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import NumberContainer from "../../components/NumberContainer/NumberContainer";
import Card from "../../components/Card/Card";
import MainButton from "../../components/MainButton/MainButton";
import { Ionicons } from "@expo/vector-icons";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  var rndNum = 0;
  const temp = Math.floor(Math.random() * (max - min));
  // console.log(" ");
  // console.log("temp", temp);
  rndNum = temp + min;
  // console.log("rnd", rndNum);
  // if (rndNum === exclude) {
  //   generateRandomBetween(min, max, exclude);
  // } else {
  // console.log("rndFFFF", rndNum);
  return rndNum;
  // }
};

// const renderListItem = (value, i, numOfRound) => (
//   <View key={i} style={styles.listItem}>
//     <Text>#{numOfRound}</Text>
//     <Text>{value}</Text>
//   </View>
// );

const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <Text>#{listLength - itemData.index}</Text>
    <Text>{itemData.item}</Text>
  </View>
);

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  // const [rounds, setRounds] = useState(0);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    // console.log(
    //   currentLow.current,
    //   " ",
    //   currentHigh.current,
    //   " ",
    //   currentGuess
    // );
    var nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    console.log("Next: ", nextNumber);
    setCurrentGuess(nextNumber);
    // setRounds((curRounds) => curRounds + 1);
    setPastGuesses((curPastGuesses) => [
      nextNumber.toString(),
      ...curPastGuesses,
    ]);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => nextGuessHandler("lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={() => nextGuessHandler("greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.list}>
        {/* <ScrollView>
          {pastGuesses.map((guess, i) =>
            renderListItem(guess, i, pastGuesses.length - i)
          )}
        </ScrollView> */}
        {/* for flat list view video 83 */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.temp}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    height: "100%",
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 5,
    width: 400,
    maxWidth: "90%",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  list: {
    width: Dimensions.get("window").width > 500 ? "60%" : "80%",
    flex: 1,
  },
});

export default GameScreen;
