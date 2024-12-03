import { View, Text, StyleSheet } from 'react-native'
import SecondaryButton from './SecondaryButton'


const HeaderExpenses = () => {
  return (
    <View style={styles.screen}>
       <Text style={styles.headerExpnse}>All Expenses</Text>
       <SecondaryButton>View All</SecondaryButton>
    </View>
  )
}

export default HeaderExpenses

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginEnd: 10,
  },

  headerExpnse: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
