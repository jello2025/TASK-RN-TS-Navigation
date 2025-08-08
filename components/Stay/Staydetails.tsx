import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import stays from "@/data/stays";
import { useLocalSearchParams } from "expo-router";
const StayDetails = () => {
  const { id } = useLocalSearchParams();
  const stay = stays.find((stay) => stay.id === +id);
  return (
    <View style={styles.container}>
      <Image source={{ uri: stay?.img }} style={styles.image} />
      <Text style={styles.text}>Location: {stay?.location}</Text>
      <Text style={styles.text}>Price: ${stay?.price} / night</Text>
      <Text style={styles.text}>Rating: {stay?.rating} / 5</Text>
    </View>
  );
};

export default StayDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    gap: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
});
