import { View, Button, TextInput, Modal, Image } from "react-native";
import { StyleSheet } from "react-native";

export default function GoalInput({
  goalInputHandler,
  addGoalHandler,
  inputText,
  modalVisible,
  endAddGoalHandler,
}) {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.img}
        />
        <TextInput
          placeholder="Your Goal..."
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={inputText}
          placeholderTextColor={"white"}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#3E6F76" />
          </View>
          <View style={styles.button} r>
            <Button
              title="Cancel"
              onPress={endAddGoalHandler}
              color="#E16B73"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    backgroundColor: "#9ACDBF",
    color: "white",
  },
  img: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#669A8C",
    backgroundColor: "#669A8C",
    borderRadius: 6,
    color: "white",
    width: "100%",
    marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
