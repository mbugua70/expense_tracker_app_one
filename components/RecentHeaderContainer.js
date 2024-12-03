import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

const RecentHeaderContainer = ({ expensePeriod, expenseTotal }) => {
  return (
    <View style={styles.dashboardContainer}>
      <View style={styles.recentContainer}>
        <Text style={styles.textOne}>{expensePeriod}</Text>
        <Text style={styles.textTwo}>KSh {expenseTotal.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default RecentHeaderContainer;

const styles = StyleSheet.create({
  dashboardContainer: {
    padding: 20,
  },
  recentContainer: {
    borderRadius: 12,
    // borderWidth: 1,
    // borderColor: GlobalStyles.colors.primary800,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 16,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  textOne: {
    fontWeight: "400",
    fontSize: 16,
  },
  textTwo: {
    fontWeight: "600",
    fontSize: 16,
    color: GlobalStyles.colors.primary700,
  },
});
