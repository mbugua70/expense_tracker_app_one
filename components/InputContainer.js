import { View, Text, TextInput, StyleSheet } from 'react-native'
import { GlobalStyles } from '../constants/styles'


const InputContainer = ({label, textConfig, invalid}) => {

  // validating  the input form
  if(invalid){
    input.push(styles.inputValid);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textConfig}/>
    </View>
  )
}

export default InputContainer

const styles = StyleSheet.create({

screen: {
  marginHorizontal: 8,
  marginVertical: 12,
},
label:{
  fontSize: 14,
  marginBottom: 4,
  marginTop: 0,
},

input: {
  marginVertical: 0,
  borderRadius: 8,
  backgroundColor: GlobalStyles.colors.primary100,
  padding: 8,
  fontSize: 16,
  color: GlobalStyles.colors.primary700

},

inputValid: {
  backgroundColor: GlobalStyles.colors.error50,
}

})