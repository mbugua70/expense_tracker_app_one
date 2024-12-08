import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ManageExpenseDetail from "../components/ManageExpenseDetail";
import ManageButton from "../components/ManageButton";

const ManageExpense = ({ route }) => {
  const expenseID = route.params;

  return (
    <>
      <View style={styles.screen}>
        <ManageExpenseDetail expenseID={expenseID} />
        {/* we will have a button (delete or add button or both) */}

        <ManageButton />
      </View>
    </>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
