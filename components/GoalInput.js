import { View, Button, TextInput } from "react-native";
import { StyleSheet } from "react-native";

export default function GoalInput({
  goalInputHandler,
  addGoalHandler,
  inputText,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={inputText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
