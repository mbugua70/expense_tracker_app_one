import { View, Text, StyleSheet } from "react-native";
import IconContainer from "./IconContainer";
import { GlobalStyles } from "../constants/styles";
import Expense from "./Expense";

const ExpenseDetails = ({ selectedDetails }) => {
  return (
    <View style={styles.screen}>
      {/* we will have an icon(category) */}
      <View style={styles.iconContainer}>
        <IconContainer category={selectedDetails.category} size={32} />
      </View>
      {/* details */}
      <Expense selectedDetails={selectedDetails} />
    </View>
  );
};

export default ExpenseDetails;

const styles = StyleSheet.create({
  screen: {
    margin: 20,
    padding: 20,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 12,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
