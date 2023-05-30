import React from "react";
import { View, StyleSheet } from "react-native";
import PlantCard from "./PlantCard";
import plants from "../data/plants.json";

const style = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "green",
    paddingBottom: 15,
  },
});

const Plants = (): any => {
  const plantsData = JSON.stringify(plants);
  const plantsArray = Array.from(plantsData);

  return plantsArray.map((plant: any) => {
    return (
      <View style={style.card}>
        <PlantCard
          key={plant.plant_id}
          image={plant.plant_image}
          plant_name={plant.plant_name}
          plant_type={plant.plant_type}
          last_watered={plant.lastWatered}
          watering_frequency={plant.watering_frequency}
        />
      </View>
    );
  });
};

export default Plants;
