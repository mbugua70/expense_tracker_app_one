import { View, Text, StyleSheet } from "react-native";
import TotalDashboard from "../components/TotalDashboard";
import Expenses from "../components/Expenses";
import ExpensesContainer from "../components/ExpensesContainer";
import RecentHeaderContainer from "../components/RecentHeaderContainer";
import { DUMMY_EXPENSES } from "../constants/dummy-data";
import { ExpenseContext } from "../store/expenseContext";
import { useContext } from "react";
import { getMinusDate } from "../util/getDateHandler";

const RecentExpenses = () => {
  const { expenseData } = useContext(ExpenseContext);

  // recent functionality

  const recentExpenses = expenseData.filter((expense) => {
    const today = new Date();
    const last7days = getMinusDate(today, 7);

    return expense.date > last7days;
  });

  const expensesTotal = recentExpenses.reduce((sum, expense) => {
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
        <ExpensesContainer expenses={recentExpenses} />
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
