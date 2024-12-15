import { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import FormContainer from "../components/Form";
import { Colors } from "react-native/Libraries/NewAppScreen";

const AddEdit = ({ route, navigation }) => {
  const id = route.params?.id;

  const isEditting = !!id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditting ? "Edit An Expense" : "Add New Expense",
      headerTintColor: "#fff",
    });
  }, [route, navigation, isEditting]);
  return <View>{/* <FormContainer /> */}</View>;
};

export default AddEdit;
