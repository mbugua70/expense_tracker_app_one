import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyles } from "../constants/styles";

const ManageExpenseDetail = () => {
  return (
    <LinearGradient
      colors={[GlobalStyles.colors.primary800, GlobalStyles.colors.primary50]}
      style={styles.screen}
    >
      <Text>ManageExpenseDetail</Text>
    </LinearGradient>
  );
};

export default ManageExpenseDetail;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
