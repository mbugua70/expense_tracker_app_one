import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import FormContainer from "../components/Form";
import { Colors } from "react-native/Libraries/NewAppScreen";
import SubmitButton from "../components/SubmitButton";

const AddEdit = ({ route, navigation }) => {
  const id = route.params?.id;

  const isEditting = !!id;
  let submitText = isEditting ? "EDIT" : "SUBMIT"

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditting ? "Edit An Expense" : "Add New Expense",
      headerTintColor: "#fff",
    });
  }, [route, navigation, isEditting]);
  return (
    <View style={styles.screen}>
      <FormContainer submitText={submitText}/>
    </View>
  )
};

export default AddEdit;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})
