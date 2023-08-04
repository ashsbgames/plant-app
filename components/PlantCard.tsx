import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import moment from "moment";
import plantIcon from "../assets/plant-icon.png";

const PlantCard = ({
  plant_name,
  plant_type,
  watering_frequency,
  last_watered,
  room_area,
}: any) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      padding: 15,
      backgroundColor: "rgb(250, 225, 221)",
      margin: 16,
      borderRadius: 10,
    },
    image: {
      width: 90,
      height: 90,
    },
  });

  const watering_date = moment([2023, 5, 24]).add(7, "d");

  let area;

  if (room_area === "sunny") {
    area = "☀️";
  } else if (room_area === "shady") {
    area = "🌤️";
  }

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={plantIcon} />
      </View>
      <View>
        <Text>Hi 👋 it's me {plant_name}</Text>
        <Text>🗨️ {plant_type} plants should live indoors</Text>
        <Text>
          I should be placed in a {area} {room_area} area
        </Text>
        <Text>
          💧 Please water me every {watering_frequency === 604800 ? 7 : 10} days
        </Text>
        <Text>
          I was last watered on {moment(last_watered).format("DD-MM-YYYY")}
        </Text>
        <Text>
          I need to be watered on {String(watering_date.format("DD-MM-YYYY"))}
        </Text>
      </View>
    </View>
  );
};

export default PlantCard;
