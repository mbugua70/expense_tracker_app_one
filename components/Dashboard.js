import { View, Text, StyleSheet, Image } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


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
      <View style={styles.totalContainer}>
        <Text style={styles.totalTextOne}>Kshs</Text>
        <Text style={styles.totalText}>{expensesTotal.toFixed(2)}</Text>
      </View>
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
     alignItems: "center"
    },

    dashboardContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center"
    },

    textDashboard: {
        fontSize: 20,
        fontWeight: "bold"
    },

    imageMain: {
        width: 48,
        height: 48,
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8
    },

    image: {
        width: "100%",
        height: "100%"
    },

    totalContainer: {
       height: 100,
       backgroundColor: "#171717",
       marginVertical: 26,
       borderRadius: 28,
       flexDirection: "row",
       alignItems: "center",
       justifyContent: "center"
    },

    totalTextOne: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "600",
      marginHorizontal: 4
    },

    totalText: {
      color: "#fff",
      marginHorizontal: 4,
      fontSize: 34,
      fontWeight: "bold"
    }
})