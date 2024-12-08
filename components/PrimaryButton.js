import { View, Text, Pressable, StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../constants/styles";

const PrimaryButton = ({ onPress, icon, color, backGroundColor }) => {
  return (
    <View style={[styles.screen, { backgroundColor: backGroundColor }]}>
      <Pressable style={styles.screenButton} onPress={onPress}>
        <Ionicons name={icon} size={24} color={color} />
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  screen: {
    overflow: "hidden",
    borderRadius: 25,
    margin: 10,
  },

  screenButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
});
