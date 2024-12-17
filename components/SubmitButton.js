import { View, Text, StyleSheet, Pressable } from 'react-native'
import { GlobalStyles } from '../constants/styles'


const SubmitButton = ({children}) => {
  return (
    <View style={styles.screen}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.screenButton, styles.pressed] : styles.screenButton
        }
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
  screen: {
   marginTop: 20,
   marginHorizontal: 8,
   overflow: "hidden",
   borderRadius: 12,
  },
  screenButton: {
    height: 40,
    backgroundColor: GlobalStyles.colors.primary700,
    padding: 8,
    justifyContent: 'center',
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75
  }
})