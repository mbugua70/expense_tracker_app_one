import { View, Text, StyleSheet, Image } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import TotalDashboard from "./TotalDashboard";
import HeaderExpenses from "../components/HeaderExpenses";

const Dashboard = ({ expenses }) => {
  const expensesTotal = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <View style={styles.dashboardContainer}>
          <MaterialIcons name="dashboard" size={24} color="black" />
          <Text style={styles.textDashboard}>Dashboard</Text>
        </View>
        <View style={styles.imageMain}>
          <Image
            source={require("../assets/profile/profile.jpg")}
            style={styles.image}
          />
        </View>
      </View>
      <TotalDashboard expensesTotal={expensesTotal} />
      <HeaderExpenses />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dashboardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  textDashboard: {
    fontSize: 20,
    fontWeight: "bold",
  },

  imageMain: {
    width: 48,
    height: 48,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});