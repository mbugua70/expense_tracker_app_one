import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { GlobalStyles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { ExpenseContext } from "../store/expenseContext";
import { useContext, useState } from "react";
import { deleteExpenseId } from "../http/http";
import LoadingIU from "../ui/LoadingIU";

const ManageButton = ({ expenseID }) => {
  const { deleteExpense } = useContext(ExpenseContext);
  const [isDeleting, setIsDeleting] = useState()
  const navigation = useNavigation();

  function handleAddExpense() {
    navigation.navigate("ManageExpenses", {
      id: expenseID,
    });
  }

 async function handleDeleteExpense() {
    setIsDeleting(true);
     await deleteExpenseId(expenseID.expensesID);
    deleteExpense(expenseID.expensesID);
    navigation.goBack();
  }


  // loading spinner

  if(isDeleting){
    return <LoadingIU/>
  }
  return (
    <View style={styles.screen}>
      <PrimaryButton
        onPress={handleDeleteExpense}
        icon="trash"
        color="white"
        backGroundColor={GlobalStyles.colors.error500}
      />
      <PrimaryButton
        onPress={handleAddExpense}
        icon="pencil"
        color="white"
        backGroundColor={GlobalStyles.colors.primary800}
      />
    </View>
  );
};

export default ManageButton;

const styles = StyleSheet.create({
  screen: {
    height: 80,
    borderRadius: 40,
    backgroundColor: "#585858",
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
