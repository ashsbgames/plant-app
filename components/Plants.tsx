import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import PlantCard from "./PlantCard";
import plants from "../data/plants.json";
import plant_image from "../assets/plantita.png";

const style = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "rgb(232, 232, 228)",
  },
  text: {
    justifyContent: "center",
    alignSelf: "center",
    padding: 20,
    fontSize: 20,
    fontWeight: "600",
  },
});

const Plants = (): any => {
  //const plantsData = JSON.stringify(plants);
  //const plantsArray = Array.from(plantsData);

  return (
    <ScrollView style={style.card}>
      <Text style={style.text}>🪴Your Plants🪴</Text>
      <PlantCard
        key={1}
        image={plant_image}
        plant_name={"Cookie"}
        plant_type={"Cactus"}
        room_area={"shady"}
        last_watered={new Date()}
        watering_frequency={5}
      />
      <PlantCard
        key={2}
        image={plant_image}
        plant_name={"Cheese"}
        plant_type={"Monsterra"}
        room_area={"shady"}
        last_watered={new Date()}
        watering_frequency={5}
      />
      <PlantCard
        key={3}
        image={plant_image}
        plant_name={"Moon"}
        plant_type={"Money Tree"}
        room_area={"sunny"}
        last_watered={new Date()}
        watering_frequency={5}
      />
      <PlantCard
        key={4}
        image={plant_image}
        plant_name={"Cake"}
        plant_type={"Cactus"}
        room_area={"shady"}
        last_watered={new Date()}
        watering_frequency={5}
      />
      <PlantCard
        key={5}
        image={plant_image}
        plant_name={"Allie"}
        plant_type={"Aloe Vera"}
        room_area={"sunny"}
        last_watered={new Date()}
        watering_frequency={5}
      />
      <PlantCard
        key={6}
        image={plant_image}
        plant_name={"Kale"}
        plant_type={"Cactus"}
        room_area={"shady"}
        last_watered={new Date()}
        watering_frequency={5}
      />
    </ScrollView>
  );
};

export default Plants;
