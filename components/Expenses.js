import { View, Text, StyleSheet } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import HeaderExpenses from './HeaderExpenses'
import ExpensesContainer from './ExpensesContainer'


const Expenses = () => {
  return (
    <View style={styles.screen}>
        {/* heading for expenses and button */}
        <HeaderExpenses />

        {/* expenses components */}
        <ExpensesContainer />
    </View>
  )
}

export default Expenses

const styles = StyleSheet.create({
    screen: {
        flex: 2,
        paddingHorizontal: 20,
    }
})