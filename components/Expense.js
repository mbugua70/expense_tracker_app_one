import { View, Text, StyleSheet } from "react-native";
import ContainerItem from "./ContainerItem";
import { getDateHandler } from "../util/getDateHandler";

const Expense = ({ selectedDetails }) => {
  let categoryName = selectedDetails.category;
  if (categoryName === "drink") {
    categoryName = "Drinks";
  } else if (categoryName === "social_need") {
    categoryName = "Social Need";
  } else {
    categoryName = "Learning";
  }
  return (
    <>
      <View style={styles.screen}>
        <ContainerItem name="Description" item={selectedDetails.description} />
        <ContainerItem
          name="Date"
          item={getDateHandler(selectedDetails.date)}
        />
        <ContainerItem name="Category" item={categoryName} />
      </View>
    </>
  );
};

export default Expense;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 10,
  },
});
