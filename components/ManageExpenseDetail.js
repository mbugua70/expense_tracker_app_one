import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyles } from "../constants/styles";
import { DUMMY_EXPENSES } from "../constants/dummy-data";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import RecentHeaderContainer from "./RecentHeaderContainer";
import ExpenseDetails from "./ExpenseDetails";

const ManageExpenseDetail = ({ expenseID }) => {
  const navigation = useNavigation();
  const id = expenseID.expensesID;
  const expenseDetails = DUMMY_EXPENSES.find(
    (expenseDetail) => expenseDetail.id === id
  );

  const selectedDetails = {
    title: expenseDetails.title,
    description: expenseDetails.description,
    date: expenseDetails.date,
    amount: expenseDetails.amount,
    category: expenseDetails.category,
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedDetails.title,
      headerTitleStyle: { color: GlobalStyles.colors.primary800 },
    });
  }, [navigation, expenseID]);
  return (
    <LinearGradient
      colors={[GlobalStyles.colors.primary800, GlobalStyles.colors.primary50]}
      style={styles.screen}
    >
      <Text style={styles.textHeader}>{selectedDetails.title}</Text>
      <RecentHeaderContainer
        expensePeriod="Amount"
        expenseTotal={selectedDetails.amount}
      />

      <ExpenseDetails selectedDetails={selectedDetails} />
    </LinearGradient>
  );
};

export default ManageExpenseDetail;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 10,
    borderEndEndRadius: 40,
    borderEndStartRadius: 40,
  },
  textHeader: {
    color: "#fff",
    padding: 20,
    fontWeight: "bold",
    fontSize: 26,
  },
});
