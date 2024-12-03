import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import ExpenseList from "./ExpenseList";

const ExpensesContainer = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => <ExpenseList itemData={item} />}
    />
  );
};

export default ExpensesContainer;
