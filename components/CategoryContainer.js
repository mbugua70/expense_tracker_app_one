 import { View, Text, StyleSheet } from 'react-native'
 import CategoryIconContainer from './CategoryIconContainer'
import { useState } from 'react'

 const CategoryContainer = () => {
  const [isCategory, setCategory] = useState(false)
  function handleCategory(){
    setCategory(prev => !prev)
    console.log(isCategory)
  }
   return (
     <View style={styles.screen}>
       <Text>Category</Text>
       <View style={styles.screenIcon}>
        <CategoryIconContainer category="coffee" size="20" onPress={handleCategory} isCategory={isCategory}/>
        <CategoryIconContainer category="home" size="20" onPress={handleCategory} isCategory={isCategory}/>
        <CategoryIconContainer category="car" size="20"onPress={handleCategory} isCategory={isCategory} />
       </View>
       <View style={styles.screenIcon}>
        <CategoryIconContainer category="gas-pump" size="20" onPress={handleCategory} isCategory={isCategory} />
        <CategoryIconContainer category="pizza-slice" size="20" onPress={handleCategory} isCategory={isCategory} />
        <CategoryIconContainer category="coins" size="20" onPress={handleCategory} isCategory={isCategory} />
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
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
 })