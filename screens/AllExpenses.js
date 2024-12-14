import { View, Text, StyleSheet } from 'react-native'
import Dashboard from '../components/Dashboard'
import Expenses from '../components/Expenses'
import HeaderExpenses from "../components/HeaderExpenses";
import AddNewExpense from "../components/AddNewExpense";
import { DUMMY_EXPENSES } from "../constants/dummy-data";
import { ExpenseContext } from "../store/expenseContext";
import { useContext } from "react";

const AllExpenses = () => {
  const { expenseData } = useContext(ExpenseContext);
  return (
    <View style={styles.screen}>
      <Dashboard expenses={expenseData} />
      {/* heading for expenses and button */}
      {/* <HeaderExpenses /> */}
      <Expenses expenses={expenseData} />
      <AddNewExpense />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
