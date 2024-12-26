import { View, Text, StyleSheet, Image } from "react-native";
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


  let content;

  if(recentExpenses.length === 0 && expensesTotal === 0){
     content = (
      <View style={styles.rootScreen}>
      <Image source={require("../assets/empty-box.png")} style={styles.image} />
      <Text style={styles.favoriteText}>You have no recent  expenses</Text>
    </View>
     )
  }else{
  content = <ExpensesContainer expenses={recentExpenses} />

  }


  return (
    <View style={styles.screen}>
      {/* recent expenses */}

      <RecentHeaderContainer
        expensePeriod="Last 7 Days"
        expenseTotal={expensesTotal}
      />

      <View style={styles.recentContainer}>

          {/* code to. show if their are no expenses */}

          {content}

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
