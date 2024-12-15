import { View, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../constants/styles'
import IconContainer from './IconContainer'


const CategoryIconContainer = ({category, size}) => {
  const iconDimensions = {
    width: 40,
    height: 40,
    borderRadius: 20,
  }

  // icon functonality
  let iconName = "coffee";
  let categoryName = category;
  if (category === "coffee") {
    iconName = "coffee";
    categoryName = "Drinks";
  } else if (category === "home") {
    iconName = "home";
    categoryName = "Sleeping";
  } else if(category === "pizza-slice"){
    iconName = "pizza-slice";
    categoryName = "Food"
  }else if (category === "car"){
    iconName = "car";
    categoryName = "Travel"
  }else if(category === "gas-pump"){
    iconName = "gas-pump";
    categoryName = "Fuel";
  }else if(category ==="coins"){
    iconName = "coins",
    categoryName = "Hire"
  }

  return (
    <View style={styles.screen}>
    <View style={styles.screenContainer}>
       <View style>
        <IconContainer category={category} size={size} iconDimensions={iconDimensions}/>
       </View>
       <View style={styles.textContainer}>
       <Text style={styles.text}>{categoryName}</Text>
       </View>
    </View>
  </View>
  )
}

export default CategoryIconContainer

const styles =  StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 100,
    height: 25,
  },
  iconContainer: {
    backgroundColor: GlobalStyles.colors.primary800,
  },
   screenContainer: {
    borderRadius: 20,
    width: 110,
    height: 40,
    paddingHorizontal: 6,
    backgroundColor: GlobalStyles.colors.primary800,
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    borderColor: GlobalStyles.colors.primary800,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
    },

  text: {
    color: "#fff",
    paddingHorizontal: 4,
  }


})