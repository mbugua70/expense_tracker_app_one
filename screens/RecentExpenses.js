import { View, Text, StyleSheet, Image} from "react-native";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import TotalDashboard from "../components/TotalDashboard";
import Expenses from "../components/Expenses";
import ExpensesContainer from "../components/ExpensesContainer";
import RecentHeaderContainer from "../components/RecentHeaderContainer";
import { DUMMY_EXPENSES } from "../constants/dummy-data";
import { ExpenseContext } from "../store/expenseContext";
import { useContext, useEffect, useState } from "react";
import { getMinusDate } from "../util/getDateHandler";
import { fetchExpenses } from "../http/http";
import LoadingIU from "../ui/LoadingIU";

const RecentExpenses = () => {
  const { expenseData, setExpenses } = useContext(ExpenseContext);
  const [fetchedExpenses, setFetchedExpenses] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  // recent functionality

  useEffect(() => {
   async function getExpenses(){
         try{
          const expenses = await fetchExpenses()
          setExpenses(expenses);
         }catch(error){
          setError("Could not fetch recent expenses")
         }
         setIsFetching(false);

        //  setFetchedExpenses(expenses);
   }

   getExpenses();
  }, [])

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


  useEffect(() => {
    if (error && !isFetching) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: error,
        button: 'close',
        onPressButton: async ()=> {
          try{
            setIsFetching(true)
            const expenses = await fetchExpenses()
            setExpenses(expenses);
          }catch(error){
            setError("Could not fetch recent expenses");
          }
          setIsFetching(false)
        }
      });
    }
  }, [error, isFetching]);

  if(isFetching){
    return <LoadingIU />
  }


  return (
    <AlertNotificationRoot>
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
    </AlertNotificationRoot>
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
