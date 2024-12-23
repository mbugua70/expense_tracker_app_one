import { View, Text, TextInput, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { ExpenseContext } from "../store/expenseContext";
import { useNavigation } from "@react-navigation/native";

import InputContainer from "./InputContainer";
import CategoryContainer from "./CategoryContainer";
import SubmitButton from "./SubmitButton";

const FormContainer = ({submitText,  selectedExpense, onSubmit}) => {

  const [category, setCategory] = useState(selectedExpense ? selectedExpense.category : "");
  const [inputValue, setInputValue] = useState({
    amount: selectedExpense ? selectedExpense.amount.toString() : "",
    date: selectedExpense ? selectedExpense.date. toString() : "",
    title: selectedExpense ? selectedExpense.title  : "",
    description: selectedExpense? selectedExpense.description : "",
  })

  // handle function
function handleInputChange(inputType, enteredText){
  setInputValue((prevValue) => {
    return {
      ...prevValue,
      [inputType]: enteredText
    }
  })
}

// handle category function

function  handleCategory (inputCategory) {
  setCategory(inputCategory)
}

// handle form submission




  return (
    <View style={styles.screen}>
      <View style={styles.flexContainer}>
       <View style={styles.flexItem}>
       <InputContainer label="Title"  textConfig={{
        onChangeText: handleInputChange.bind(this,"title"),
        value: inputValue.title
       }}/>
       </View>
      <View style={styles.flexItem}>
      <InputContainer label="Amount" textConfig={{
         keyboardType: 'decimal-pad',
         placeholder: "KES 0.00",
         onChangeText: handleInputChange.bind(this,"amount"),
         value: inputValue.amount
       }}/>
      </View>
      </View>
        <InputContainer label="Date" textConfig={{
          placeholder: "YYYY-MM-DD",
         maxLength: 10,
         onChangeText: handleInputChange.bind(this,"date"),
         value: inputValue.date
       }}/>
       <InputContainer label="Description" textConfig={{
        multiline: true,
        onChangeText: handleInputChange.bind(this,"description"),
        value: inputValue.description
       }}/>

       <CategoryContainer onCategory={handleCategory} category={category}/>  
       <SubmitButton onSubmit={onSubmit} inputValue={inputValue} category={category}>{submitText}</SubmitButton>
    </View>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  flexContainer: {
    flexDirection: "row",
  },
  flexItem: {
    flex: 1
  }
})
