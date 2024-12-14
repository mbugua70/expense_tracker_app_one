import { View, Text, StyleSheet } from "react-native";
import TotalDashboard from "../components/TotalDashboard";
import Expenses from "../components/Expenses";
import ExpensesContainer from "../components/ExpensesContainer";
import RecentHeaderContainer from "../components/RecentHeaderContainer";
import { DUMMY_EXPENSES } from "../constants/dummy-data";
import { ExpenseContext } from "../store/expenseContext";
import { useContext } from "react";

const RecentExpenses = () => {
  const { expenseData } = useContext(ExpenseContext);

  const expensesTotal = expenseData.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.screen}>
      {/* recent expenses */}

      <RecentHeaderContainer
        expensePeriod="Last 7 Days"
        expenseTotal={expensesTotal}
      />

      <View style={styles.recentContainer}>
        <ExpensesContainer expenses={expenseData} />
      </View>
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  recentContainer: {
    flex: 2,
    paddingHorizontal: 10,
  },
});
