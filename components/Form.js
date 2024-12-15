import { View, Text, TextInput, StyleSheet } from "react-native";
import InputContainer from "./InputContainer";
import CategoryContainer from "./CategoryContainer";


const FormContainer = () => {

  // handle function
function handleAmount(){

}
  return (
    <View style={styles.screen}>
      <View style={styles.flexContainer}>
       <View style={styles.flexItem}>
       <InputContainer label="Title"/>
       </View>
      <View style={styles.flexItem}>
      <InputContainer label="Amount" textConfig={{
         keyboardType: 'decimal-pad',
         placeholder: "KES 0.00",
         onChangeText: handleAmount
       }}/>
      </View>
      </View>
        <InputContainer label="Date" textConfig={{
          placeholder: "YYYY-MM-DD",
         maxLength: 10
       }}/>
       <InputContainer label="Description" textConfig={{
        multiline: true
       }}/>

       <CategoryContainer/>
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
