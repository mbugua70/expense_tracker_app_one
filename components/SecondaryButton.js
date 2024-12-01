import { View, Text, Pressable, StyleSheet } from 'react-native'


const SecondaryButton = ({children}) => {
  return (
    <View style={styles.buttonContainer}>
       <Pressable>
          <Text style={styles.buttonText}>{children}</Text>
       </Pressable>
    </View>
  )
}

export default SecondaryButton

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#e7e7ea",
    padding: 6,
    borderRadius: 12,
  },
  buttonText: {
    color: "gray",
    fontWeight: "600"
  }
})