import { View, Text, StyleSheet } from "react-native";
import ContainerItem from "./ContainerItem";
import { getDateHandler } from "../util/getDateHandler";

const Expense = ({ selectedDetails }) => {
  let category = selectedDetails.category;
  let categoryName;


  if (category === "coffee") {
    categoryName = "Drinks";
  } else if (category === "home") {

    categoryName = "Sleep";
  } else if(category === "pizza-slice"){

    categoryName = "Food"
  }else if (category === "car"){

    categoryName = "Travel"
  }else if(category === "gas-pump"){

    categoryName = "Fuel";
  }else if(category ==="coins"){

    categoryName = "Hire"
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
