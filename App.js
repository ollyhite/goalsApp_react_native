import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [goals, setGoal] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalVisible(false);
  };

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
      setModalVisible(false);
    }
  }

  const deleteGoalHandler = (id) => {
    setGoal((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <>
      {/* //StatusBar need <></> outside */}
      {/* <StatusBar style="auto"> */}
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#009999"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          goalInputHandler={goalInputHandler}
          inputText={inputText}
          modalVisible={modalVisible}
          endAddGoalHandler={endAddGoalHandler}
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
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  deleteGoalHandler={deleteGoalHandler}
                />
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
      {/* </StatusBar> */}
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor: "#81AEA2",
  },
  goalsContainer: {
    flex: 5,
    flexDirection: "column",
  },
});
