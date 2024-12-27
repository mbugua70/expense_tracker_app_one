import { useContext, useEffect, useState} from "react";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import { View, Text, StyleSheet, Image } from 'react-native'

// utilities
import { DUMMY_EXPENSES } from "../constants/dummy-data";
import { ExpenseContext } from "../store/expenseContext";

import { fetchExpenses } from "../http/http";
// components
import Dashboard from '../components/Dashboard'
import Expenses from '../components/Expenses'
import HeaderExpenses from "../components/HeaderExpenses";
import AddNewExpense from "../components/AddNewExpense";
import LoadingIU from "../ui/LoadingIU";


const AllExpenses = ({navigation}) => {
  const { expenseData, setExpenses } = useContext(ExpenseContext);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  console.log(navigation);
  let content;

   useEffect(() => {
     async function getExpenses(){
        try{
          const expenses = await fetchExpenses()
          setExpenses(expenses);
         //  setFetchedExpenses(expenses);

        }catch(error){
          setError("Could not fetch the expenses")
        }
        setIsFetching(false);
     }

     getExpenses();
    }, [])

  if(expenseData.length === 0 && !error && !isFetching){
    content = (<View style={styles.rootScreen}>
          <Image source={require("../assets/empty-box.png")} style={styles.image} />
          <Text style={styles.favoriteText}>You have no expenses</Text>
        </View>)
  }else{
    content=  <Expenses expenses={expenseData} />
  }

  //  error ui
  useEffect(() => {
    if (error && !isFetching) {
      console.log(error);
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: error,
        closeOnOverlayTap: true,
        button: 'close',
        onPressButton: async ()=> {

            try{
              setIsFetching(true)
              const expenses = await fetchExpenses()
              setExpenses(expenses);
            }catch(error){
              setError("Could not fetch the expenses");
            }

          setIsFetching(false)
        }
      });
    }
  }, [error, isFetching, navigation]);


  // loading UI functionality
  if(isFetching){
    return <LoadingIU/>
  }

  return (
    <AlertNotificationRoot>
    <View style={styles.screen}>
      <Dashboard expenses={expenseData} />
      {/* heading for expenses and button */}
      {/* <HeaderExpenses /> */}

       {content}
       {/* <Expenses expenses={expenseData} /> */}
      <AddNewExpense />
    </View>
    </AlertNotificationRoot>
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
