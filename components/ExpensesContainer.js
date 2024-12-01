import { View, Text, StyleSheet } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { GlobalStyles } from '../constants/styles';

const ExpensesContainer = () => {
  return (
    <View style={styles.detailsContainer}>
       {/* icon */}
       <FontAwesome5 name="coffee" size={24} color={ GlobalStyles.colors.primary800} />
       {/* details */}
       <View>
         <Text style={styles.textHeader}>Coffee</Text>
         <Text style={styles.textDetails}>Lorem ipsum dolor sit.</Text>
       </View>
       {/* cash details */}
       <Text style={styles.textPrice}>Kshs 100</Text>
    </View>
  )
}

export default ExpensesContainer

const styles = StyleSheet.create({
    detailsContainer: {
        marginTop: 20,
        borderRadius: 16,
        padding: 18,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#e7e7ea"
    },

    textHeader: {
        fontWeight: "700",
        fontSize: 16
    },

    textDetails: {
        fontSize: 12,
        color: "gray",
        fontWeight: "700"
    },
    textPrice: {
        fontSize: 16,
        fontWeight: "700"
    }
})