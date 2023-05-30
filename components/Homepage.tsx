import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import PlantCard from "./PlantCard";

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    width: win.width,
    height: 200,
  },
  text: {
    justifyContent: "center",
    alignSelf: "center",
    padding: 20,
    fontSize: 20,
    fontStyle: "extra-bold",
  },
  container: {},
});

function Homepage() {
  return (
    <View style={{ flex: 1 }}>
      <Image source={require("../assets/plantita.png")} style={styles.image} />
      <Text style={styles.text}>Your Plants</Text>
      <PlantCard style={styles.container} />
      <PlantCard plant_name={"Cactus"} />
    </View>
  );
}

export default Homepage;
