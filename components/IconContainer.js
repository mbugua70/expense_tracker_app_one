import { View, Text, StyleSheet } from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { GlobalStyles } from "../constants/styles";

const IconContainer = ({ category, size }) => {
  let iconName = "coffee";
  let categoryName = category;
  if (category === "drink") {
    iconName = "coffee";
    categoryName = "Drinks";
  } else if (category === "social_need") {
    iconName = "home";
    categoryName = "Social Need";
  } else {
    iconName = "coins";
    categoryName = "Learning";
  }

  return (
    <>
      <View style={styles.screen}>
        <FontAwesome5 name={iconName} size={size} color="white" />
      </View>
    </>
  );
};

export default IconContainer;

const styles = StyleSheet.create({
  screen: {
    width: 60,
    height: 60,
    backgroundColor: GlobalStyles.colors.primary800,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});
