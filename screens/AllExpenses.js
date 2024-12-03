import { View, Text, StyleSheet } from 'react-native'
import Dashboard from '../components/Dashboard'
import Expenses from '../components/Expenses'
import HeaderExpenses from "../components/HeaderExpenses";
import AddNewExpense from "../components/AddNewExpense";

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
