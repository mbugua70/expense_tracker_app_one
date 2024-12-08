import { View, Text, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../constants/styles";

const BackButtonIcon = ({ tintColor }) => {
  return (
    <View style={styles.screen}>
      <Pressable style={styles.buttonContainer}>
        <Ionicons name="arrow-back" size={24} color={tintColor} />
      </Pressable>
    </View>
  );
};

export default BackButtonIcon;

const styles = StyleSheet.create({
  screen: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: GlobalStyles.colors.primary50,
  },

  buttonContainer: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
