import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        //for android the press style will change
        android_ripple={{ color: "#07C4C4" }}
        onPress={props.deleteGoalHandler.bind(this, props.id)}
        //for ios the press style will change
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    padding:16,
    backgroundColor: "#669A8C",
  },
  pressItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
