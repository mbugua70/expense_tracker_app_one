import { View, Text, StyleSheet } from "react-native";

const ExpensesOutContainer = ({ children }) => {
  return <View style={styles.screen}>{children}</View>;
};

export default ExpensesOutContainer;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
