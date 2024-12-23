import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import {ExpenseContext} from "../store/expenseContext";

import FormContainer from "../components/Form";
import SubmitButton from "../components/SubmitButton";

const AddEdit = ({ route, navigation }) => {
  const id = route.params;

  const {addExpense, editExpense, expenseData: expenses} = useContext(ExpenseContext)

  const isEditting = !!id;
  let submitText = isEditting ? "EDIT" : "SUBMIT"

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditting ? "Edit An Expense" : "Add New Expense",
      headerTintColor: "#fff",
    });
  }, [route, navigation, isEditting]);

  // handlesubmission

  function handleSubmission(expenseData){

    if(submitText === "SUBMIT"){
       addExpense(expenseData)
       navigation.goBack()
    }


    if(submitText === "EDIT"){
     editExpense(id.id.expensesID, expenseData)
     navigation.goBack();
    }

 }

  // default values when on editing state


    const selectedExpense = isEditting && (expenses.find((expense) => expense.id === id.id.expensesID));


  return (
    <View style={styles.screen}>
      <FormContainer submitText={submitText}  onSubmit={handleSubmission} selectedExpense={selectedExpense }/>
    </View>
  )
};

export default AddEdit;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})
