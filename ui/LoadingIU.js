import React from 'react'
import { ActivityIndicator , StyleSheet, View} from 'react-native'
import { GlobalStyles } from '../constants/styles'
function LoadingIU() {
  return (
    <View style={styles.screen}>
       <ActivityIndicator size="large" color={GlobalStyles.colors.primary800}/>
    </View>
  )
}

export default LoadingIU


const styles = StyleSheet.create({
    screen:{
    flex:1,
    top: "50%",
    left: "50%",
    position: "absolute",
    zIndex: 998,
    alignItem: "center",
    justifyContent: "center",
    }
})
