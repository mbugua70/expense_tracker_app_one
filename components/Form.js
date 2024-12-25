import { View, Text, TextInput, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { ExpenseContext } from "../store/expenseContext";
import { useNavigation } from "@react-navigation/native";

import InputContainer from "./InputContainer";
import CategoryContainer from "./CategoryContainer";
import SubmitButton from "./SubmitButton";

const FormContainer = ({submitText,  selectedExpense, onSubmit}) => {

  const [category, setCategory] = useState(selectedExpense ? selectedExpense.category : "");
  const [inputs, setInputs] = useState({
    amount: {
      value: selectedExpense ? selectedExpense.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: selectedExpense ? selectedExpense.date. toString() : "",
      isValid: true,
    },
    title: {
      value: selectedExpense ? selectedExpense.title  : "",
      isValid: true
    },
    description: {
      value: selectedExpense? selectedExpense.description : "",
      isValid: true,
    },
  })

  // handle function
function handleInputChange(inputType, enteredText){
  setInputs((prevValue) => {
    return {
      ...prevValue,
      [inputType]: {value: enteredText}
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
       <InputContainer label="Title" invalid={!inputs.title.isValid}  textConfig={{
        onChangeText: handleInputChange.bind(this,"title"),
        value: inputs.title.value
       }}/>
       </View>
      <View style={styles.flexItem}>
      <InputContainer label="Amount" invalid={!inputs.amount.isValid} textConfig={{
         keyboardType: 'decimal-pad',
         placeholder: "KES 0.00",
         onChangeText: handleInputChange.bind(this,"amount"),
         value: inputs.amount.value
       }}/>
      </View>
      </View>
        <InputContainer label="Date" invalid={!inputs.date.isValid}  textConfig={{
          placeholder: "YYYY-MM-DD",
         maxLength: 10,
         onChangeText: handleInputChange.bind(this,"date"),
         value: inputs.date.value
       }}/>
       <InputContainer label="Description" invalid={!inputs.description.isValid} textConfig={{
        multiline: true,
        onChangeText: handleInputChange.bind(this,"description"),
        value: inputs.description.value
       }}/>

       <CategoryContainer onCategory={handleCategory} category={category}/>
       <SubmitButton onSubmit={onSubmit} inputs={inputs} category={category}>{submitText}</SubmitButton>
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
