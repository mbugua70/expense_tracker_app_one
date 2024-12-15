import { View, Text, Pressable, StyleSheet } from "react-native";
import { getDateHandler } from "../util/getDateHandler";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constants/styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const ExpenseList = ({ itemData }) => {
  const navigation = useNavigation();



  function handleNavigation() {
    console.log("working");
    navigation.navigate("ManageExpense", { expensesID: itemData.id });
  }

  return (
    <>
      <View style={styles.detailsContainer}>
        <Pressable
          onPress={handleNavigation}
          style={({ pressed }) =>
            pressed
              ? [styles.pressedContainer, styles.pressed]
              : styles.pressedContainer
          }
        >
          {/* icon */}
          <View style={styles.iconContainer}>
            <FontAwesome5 name={itemData.category} size={24} color="white" />
          </View>
          {/* details */}
          <View style={styles.containerText}>
            <Text style={styles.textHeader}>{itemData.title}</Text>
            <Text style={styles.textDetails}>
              {getDateHandler(itemData.date)}
            </Text>
          </View>
          {/* cash details */}
          <Text style={styles.textPrice}>KSh {itemData.amount.toFixed(2)}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#e7e7ea",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  pressedContainer: {
    padding: 12,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  pressed: {
    opacity: 0.75,
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
