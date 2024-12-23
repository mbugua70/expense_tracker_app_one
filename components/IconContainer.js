import { View, Text, StyleSheet } from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { GlobalStyles } from "../constants/styles";

const IconContainer = ({ category, size, iconDimensions, backgroundcolor, color }) => {


  return (
    <>
      <View style={[styles.screen, {...iconDimensions}, {backgroundColor: backgroundcolor}]}>
        <FontAwesome5 name={category} size={size} color={color} />
      </View>
    </>
  );
};

export default IconContainer;

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",

  },
});
