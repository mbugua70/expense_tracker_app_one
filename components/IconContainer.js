import { View, Text, StyleSheet } from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { GlobalStyles } from "../constants/styles";

const IconContainer = ({ category, size, iconDimensions }) => {
 

  return (
    <>
      <View style={[styles.screen, {...iconDimensions}]}>
        <FontAwesome5 name={category} size={size} color="white" />
      </View>
    </>
  );
};

export default IconContainer;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: GlobalStyles.colors.primary800,
    justifyContent: "center",
    alignItems: "center",

  },
});
