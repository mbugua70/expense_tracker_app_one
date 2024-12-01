import { View, Text, StyleSheet, FlatList } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { GlobalStyles } from "../constants/styles";

function handleRenderItem(itemData) {
  let iconName = "coffee";
  if (itemData.item.category === "drink") {
    iconName = "coffee";
  } else if (itemData.item.category === "social_need") {
    iconName = "home";
  } else {
    iconName = "coins";
  }
  return (
    <>
      <View style={styles.detailsContainer}>
        {/* icon */}
        <View style={styles.iconContainer}>
          <FontAwesome5 name={iconName} size={24} color="white" />
        </View>
        {/* details */}
        <View style={styles.containerText}>
          <Text style={styles.textHeader}>{itemData.item.title}</Text>
          <Text style={styles.textDetails}>{itemData.item.description}</Text>
        </View>
        {/* cash details */}
        <Text style={styles.textPrice}>KSh {itemData.item.amount}</Text>
      </View>
    </>
  );
}

const ExpensesContainer = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item, index) => item.id}
      renderItem={handleRenderItem}
    />
  );
};

export default ExpensesContainer;

const styles = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 16,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#e7e7ea",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  textHeader: {
    fontWeight: "700",
    fontSize: 16,
  },

  textDetails: {
    fontSize: 12,
    color: "gray",
    fontWeight: "700",
  },
  textPrice: {
    fontSize: 14,
    fontWeight: "600",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    padding: 10,
    height: 50,
    backgroundColor: GlobalStyles.colors.primary800,
    borderRadius: 16,
  },
  containerText: {
    paddingHorizontal: 8,
    alignContent: "flex-start",
    width: "54%",
  },
});
