import { View, Text, StyleSheet } from "react-native";
import IconContainer from "./IconContainer";
import { GlobalStyles } from "../constants/styles";
import Expense from "./Expense";

const ExpenseDetails = ({ selectedDetails }) => {
  const iconDimensions = {
    width: 60,
    height: 60,
    borderRadius: 30,
  }
  return (
    <View style={styles.screen}>
      {/* we will have an icon(category) */}
      <View style={styles.iconContainer}>
        <IconContainer category={selectedDetails.category} size={32} iconDimensions={iconDimensions} color="white" backgroundcolor={GlobalStyles.colors.primary800}/>
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
