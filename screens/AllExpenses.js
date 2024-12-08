import { View, Text, StyleSheet } from 'react-native'
import Dashboard from '../components/Dashboard'
import Expenses from '../components/Expenses'
import HeaderExpenses from "../components/HeaderExpenses";
import AddNewExpense from "../components/AddNewExpense";
import { DUMMY_EXPENSES } from "../constants/dummy-data";


const AllExpenses = () => {
  return (
    <View style={styles.screen}>
      <Dashboard expenses={DUMMY_EXPENSES} />
      {/* heading for expenses and button */}
      {/* <HeaderExpenses /> */}
      <Expenses expenses={DUMMY_EXPENSES} />
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
