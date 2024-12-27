import { useContext, useLayoutEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ALERT_TYPE, Dialog, AlertNotificationRoot } from 'react-native-alert-notification';
import Toast from 'react-native-toast-message';

import { Colors } from "react-native/Libraries/NewAppScreen";
import {ExpenseContext} from "../store/expenseContext";
import { createExpense, updateExpense, deleteExpense } from "../http/http";


import FormContainer from "../components/Form";
import SubmitButton from "../components/SubmitButton";
import LoadingIU from "../ui/LoadingIU";

const AddEdit = ({ route, navigation }) => {
  const id = route.params;
  const [isManaging, setIsManaging] = useState();
  const  [error, setError] = useState();

   const childRef = useRef(null)
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

  async function handleSubmission(expenseData){

    const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const isTitleValid = expenseData.title.trim().length > 0;
    const isDateValid = expenseData.date.toString() !== "Invalid Date";
    const isDescriptionValid = expenseData.description.trim().length > 0;
    const isCategoryValid = expenseData.category.trim().length > 0;


    if(!isAmountValid || !isTitleValid || !isDateValid || !isDescriptionValid || !isCategoryValid){

      Toast.show({
        type: "error",
        text1: 'Please check all your input values',
        position: 'bottom'
      });

      // form input validation
      childRef.current.handleInputvalidation(isAmountValid, isDateValid, isTitleValid, isDescriptionValid)
      return
    }else{

      if(submitText === "SUBMIT"){
       try{
        setIsManaging(true);
        const id = await  createExpense(expenseData);
        setIsManaging(false);
        addExpense({...expenseData, id: id})


           if (id && !error && !isManaging) {
             Toast.show({
               type: "info",
               text1: 'An expense has been added successfully',
               position: 'bottom',
               topOffset: 10,
             });
           }



        setTimeout(()=>{
          navigation.goBack()
        },2000)

       }catch(error){
        setError("Failed to add the expense")
       }
     }


     if(submitText === "EDIT"){
       try{
        setIsManaging(true)
        editExpense(id.id.expensesID, expenseData)

        // here we will wait for the promise to finish it's so as to take also advantage of creating loading UI.
        const status = await updateExpense(id.id.expensesID,expenseData);

         setIsManaging(false);
         if(status === 200 && !error && !isManaging){
          Toast.show({
            type: "success",
            text1: 'An expense has been updated successfully',
            position: 'bottom'
          });
         }

         setTimeout(() => {
          navigation.goBack();
         }, 2000)

       }catch(error){
        setError("Failed to update the expense")
       }
     }
    }

 }

  // default values when on editing state


    const selectedExpense = isEditting && (expenses.find((expense) => expense.id === id.id.expensesID));

    if(error && !isManaging){
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: error,
        closeOnOverlayTap: true,
        button: 'close',
      });
    }


  return (
   <AlertNotificationRoot>
     <View style={styles.screen}>
      {isManaging && <LoadingIU/>}
      <FormContainer submitText={submitText} ref={childRef}  onSubmit={handleSubmission} selectedExpense={selectedExpense }/>
      <Toast />
    </View>
   </AlertNotificationRoot>
  )
};

export default AddEdit;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})
