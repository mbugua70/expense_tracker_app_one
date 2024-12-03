import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ManageExpenseDetail from "../components/ManageExpenseDetail";

const ManageExpense = () => {
  return (
    <>
      <View style={styles.screen}>
        <ManageExpenseDetail />
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
