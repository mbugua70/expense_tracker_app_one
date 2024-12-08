import { View, Text, StyleSheet } from "react-native";

const ContainerItem = ({ name, item }) => {
  return (
    <View style={styles.screen}>
      <Text>{name}</Text>
      <Text style={styles.secondTtem}>{item}</Text>
    </View>
  );
};

export default ContainerItem;

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondTtem: {
    fontWeight: "600",
  },
});
