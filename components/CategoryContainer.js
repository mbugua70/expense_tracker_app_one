 import { View, Text, StyleSheet } from 'react-native'
 import CategoryIconContainer from './CategoryIconContainer'
import { useState } from 'react'

 const CategoryContainer = ({onCategory, category}) => {
  const [isCategory, setCategory] = useState(category ? category : null)
  function handleCategory(category){
    setCategory(category)
    onCategory(category);
  }
   return (
     <View style={styles.screen}>
       <Text>Category</Text>
       <View style={styles.screenIcon}>
        <CategoryIconContainer category="coffee" size="20" onPress={()=>handleCategory("coffee")} activeCategory={isCategory === "coffee"}/>
        <CategoryIconContainer category="home" size="20" onPress={() => handleCategory("home")} activeCategory={isCategory === "home"}/>
        <CategoryIconContainer category="car" size="20"onPress={()=>handleCategory("car")} activeCategory={isCategory === "car"}/>
       </View>
       <View style={styles.screenIcon}>
        <CategoryIconContainer category="gas-pump" size="20" onPress={() => handleCategory("gas-pump")} activeCategory={isCategory === "gas-pump"} />
        <CategoryIconContainer category="pizza-slice" size="20" onPress={()=>handleCategory("pizza-slice")}  activeCategory={isCategory === "pizza-slice"} />
        <CategoryIconContainer category="coins" size="18" onPress={() => handleCategory("coins")}  activeCategory={isCategory === "coins"}/>
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