import { View, Text, StyleSheet } from "react-native";
import TotalDashboard from "../components/TotalDashboard";
import Expenses from "../components/Expenses";
import ExpensesContainer from "../components/ExpensesContainer";
import RecentHeaderContainer from "../components/RecentHeaderContainer";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Shoes",
    description: "A pair of shoes",
    amount: 59.2,
    date: new Date("2024-12-1"),
    category: "social_need",
  },
  {
    id: "e2",
    title: "Coffee",
    description: "lorem test one",
    amount: 12.2,
    date: new Date("2023-12-1"),
    category: "drink",
  },
  {
    id: "e3",
    description: "A pair of cup",
    title: "Mug",
    amount: 10.2,
    date: new Date("2024-10-1"),
    category: "drink",
  },
  {
    id: "e4",
    description: "lorem test four",
    title: "Laptop",
    amount: 9.2,
    date: new Date("2014-12-1"),
    category: "secondary_need",
  },
  {
    id: "e5",
    description: "A pair of clothes",
    title: "Suit",
    amount: 100.2,
    date: new Date("2022-8-1"),
    category: "social_need",
  },
  {
    id: "e6",
    description: "lorem test five",
    title: "Book",
    amount: 33.2,
    date: new Date("2024-12-1"),
    category: "social_need",
  },
];

const RecentExpenses = () => {
  const expensesTotal = DUMMY_EXPENSES.reduce((sum, expense) => {
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
        <ExpensesContainer expenses={DUMMY_EXPENSES} />
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
