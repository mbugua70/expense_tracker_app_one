import { View, Text, StyleSheet, Pressable } from 'react-native'
import { GlobalStyles } from '../constants/styles'
import IconContainer from './IconContainer'


const CategoryIconContainer = ({category, size, onPress, activeCategory}) => {
  const iconDimensions = {
    width: 36,
    height: 36,
    borderRadius: 18,
  }

  // icon functonality
  let iconName = "coffee";
  let categoryName = category;
  if (category === "coffee") {
    iconName = "coffee";
    categoryName = "Drinks";
  } else if (category === "home") {
    iconName = "home";
    categoryName = "Sleep";
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
    <Pressable onPress={onPress}  style={({pressed}) => pressed ? [styles.screenContainer, styles.pressed, {  backgroundColor: GlobalStyles.colors.primary800,}] : [styles.screenContainer, activeCategory ? {backgroundColor: GlobalStyles.colors.accent500} : {backgroundColor: GlobalStyles.colors.primary800,}]}>
       <View style>
        <IconContainer category={category} size={size} iconDimensions={iconDimensions} color={activeCategory ?GlobalStyles.colors.primary800 : "white"} backgroundcolor={activeCategory ? "white" :GlobalStyles.colors.primary800}/>
       </View>
       <View style={styles.textContainer}>
       <Text style={styles.text}>{categoryName}</Text>
       </View>
    </Pressable>
  </View>
  )
}

export default CategoryIconContainer

const styles =  StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
  },

   screenContainer: {
    width: 110,
    height: 40,
    paddingHorizontal: 6,
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
  },

  pressed: {
    opacity: 0.75,
  },

  selectedCagory:{

  }

})