import { View, Text, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../constants/styles";

const AddNewExpense = () => {
  return (
    <View style={styles.screen}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressedContainer, styles.pressed]
            : styles.pressedContainer
        }
      >
        <Ionicons name="add-outline" size={32} color="white" />
      </Pressable>
    </View>
  );
};

export default AddNewExpense;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 0,
    overflow: "hidden",
    position: "absolute",
    bottom: 20,
    right: 10,
    borderRadius: 32,
  },

  addIcon: {
    padding: 0,
    margin: 0,
  },

  pressedContainer: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
