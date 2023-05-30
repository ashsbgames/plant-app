import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import moment from "moment";

const PlantCard = ({
  plant_name,
  plant_type,
  watering_frequency,
  last_watered,
  plant_image,
}: any) => {
  const styles = StyleSheet.create({
    text: {
      justifyContent: "center",
      alignSelf: "center",
      textAlign: "center",
      alignItems: "center",
      backgroundColor: "rgb(233, 237, 201)",
      borderBottomLeftRadius: 5,
      width: "100%",
    },
  });

  const watering_date = moment([2023, 5, 24]).add(7, "d");

  return (
    <View style={styles.text}>
      <Image source={plant_image} />
      <Text>This plant is a {plant_name}</Text>
      <Text>It should live indoors</Text>
      <Text>Water every {watering_frequency === 604800 ? 7 : 10} days</Text>
      <Text>
        I was last watered on {moment(last_watered).format("DD-MM-YYYY")}
      </Text>
      <Text>
        I need to be watered on {String(watering_date.format("DD-MM-YYYY"))}
      </Text>
    </View>
  );
};

export default PlantCard;
