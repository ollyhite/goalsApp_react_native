import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [goals, setGoal] = useState([]);
  function goalInputHandler(enteredText) {
    setInputText(enteredText);
  }

  function addGoalHandler() {
    if (!inputText) {
      alert("Please Enter Goal");
    } else {
      setGoal((currentGoals) => [
        ...currentGoals,
        //use{}is more better won't have same key error
        // { text: inputText, key: Math.random().toString() },
        //if data from api wont have key might id
        { text: inputText, id: Math.random().toString() },
      ]);
      setInputText("");
    }
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={inputText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        {/* FlatList replace ScrollView becuz ScrollView will render all list when scroll, if data pretty long will make app too slow. FlatList only show when near scroll it*/}
        {/* <ScrollView alwaysBounceVertical={false}>
          {goals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          //if data from api wont have key might id
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
    flexDirection: "column",
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#009999",
  },
  goalText: {
    color: "white",
  },
});
