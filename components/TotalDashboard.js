import { View, Text, StyleSheet } from "react-native";

const TotalDashboard = ({ expensesTotal }) => {
  return (
    <View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalTextOne}>Kshs</Text>
        <Text style={styles.totalText}>{expensesTotal.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default TotalDashboard;

const styles = StyleSheet.create({
  totalContainer: {
    height: 100,
    backgroundColor: "#171717",
    marginVertical: 22,
    borderRadius: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  totalTextOne: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginHorizontal: 4,
  },

  totalText: {
    color: "#fff",
    marginHorizontal: 4,
    fontSize: 34,
    fontWeight: "bold",
  },
});
