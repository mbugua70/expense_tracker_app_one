import { View, Text, StyleSheet, Image } from 'react-native'
import Dashboard from '../components/Dashboard'
import Expenses from '../components/Expenses'
import HeaderExpenses from "../components/HeaderExpenses";
import AddNewExpense from "../components/AddNewExpense";
import { DUMMY_EXPENSES } from "../constants/dummy-data";
import { ExpenseContext } from "../store/expenseContext";
import { useContext } from "react";

const AllExpenses = () => {
  const { expenseData } = useContext(ExpenseContext);

  let content;

  if(expenseData.length === 0){
    content = (<View style={styles.rootScreen}>
          <Image source={require("../assets/empty-box.png")} style={styles.image} />
          <Text style={styles.favoriteText}>You have no expenses</Text>
        </View>)
  }else{
    content=  <Expenses expenses={expenseData} />
  }
  return (
    <View style={styles.screen}>
      <Dashboard expenses={expenseData} />
      {/* heading for expenses and button */}
      {/* <HeaderExpenses /> */}

       {content}
      <AddNewExpense />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  // styling For empty UI

  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  favoriteText: {
    marginTop: 10,
    color: "#000000",
    textAlign: "center",
    fontSize: 18,
  },

  image: {
    width: 100,
    height: 100,
  },
});
