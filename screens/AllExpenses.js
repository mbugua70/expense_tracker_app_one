import { View, Text, StyleSheet } from 'react-native'
import Dashboard from '../components/Dashboard'
import Expenses from '../components/Expenses'


const AllExpenses = () => {
  return (
     <View style={styles.screen}>
        <Dashboard />
        <Expenses/>
     </View>
  )
}

export default AllExpenses

const styles = StyleSheet.create({
   screen: {
      flex: 1,
   }
})
