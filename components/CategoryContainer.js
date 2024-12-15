 import { View, Text, StyleSheet } from 'react-native'
 import CategoryIconContainer from './CategoryIconContainer'

 const CategoryContainer = () => {
   return (
     <View style={styles.screen}>
       <Text>Category</Text>
       <View style={styles.screenIcon}>
        <CategoryIconContainer category="coffee" size="20" />
        <CategoryIconContainer category="home" size="20" />
        <CategoryIconContainer category="car" size="20" />
       </View>
       <View style={styles.screenIcon}>
        <CategoryIconContainer category="gas-pump" size="20" />
        <CategoryIconContainer category="pizza-slice" size="20" />
        <CategoryIconContainer category="coins" size="20" />
       </View>
     </View>
   )
 }

 export default CategoryContainer

 const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 8,
  },
  screenIcon: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
 })