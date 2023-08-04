import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import PlantCard from "./PlantCard";

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  view: {
    backgroundColor: "rgb(226, 236, 233)",
    flex: 1,
  },
  sidewaysScroll: {
    backgroundColor: "rgb(248, 237, 235)",
  },
  image: {
    width: win.width,
    height: 200,
  },
  text: {
    justifyContent: "center",
    alignSelf: "center",
    padding: 20,
    fontSize: 20,
    fontWeight: 600,
  },
});

function Homepage() {
  return (
    <ScrollView style={styles.view}>
      <Image source={require("../assets/plantita.png")} style={styles.image} />
      <Text style={styles.text}>🍹Plants That Need A Drink🍹</Text>
      <PlantCard
        plant_name={"Cheese"}
        plant_type={"Monsterra"}
        room_area={"sunny"}
      />
      <PlantCard
        plant_name={"Cookie"}
        plant_type={"Cactus"}
        room_area={"shady"}
      />
      <Text style={styles.text}>☔Recently Watered Plants☔</Text>
      <ScrollView horizontal={true}>
        <PlantCard
          plant_name={"Allie"}
          plant_type={"Aloe Vera"}
          room_area={"sunny"}
        />
        <PlantCard
          plant_name={"Moon"}
          plant_type={"Money Tree"}
          room_area={"sunny"}
        />
        <PlantCard
          plant_name={"Kale"}
          plant_type={"Cactus"}
          room_area={"shady"}
        />
      </ScrollView>
    </ScrollView>
  );
}

export default Homepage;
