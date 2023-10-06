import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

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
      <GoalInput
        addGoalHandler={addGoalHandler}
        goalInputHandler={goalInputHandler}
        inputText={inputText}
      />
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
            return <GoalItem text={itemData.item.text} />;
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
  goalsContainer: {
    flex: 5,
    flexDirection: "column",
  },
});
