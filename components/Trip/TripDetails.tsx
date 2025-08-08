import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import trips from "@/data/trips";

const TripDetails = () => {
  const { slug } = useLocalSearchParams();
  const trip = trips.find((trip) => trip.slug === slug);
  return (
    <View style={styles.container}>
      <Image source={{ uri: trip?.img }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.description}>City: {trip?.city}</Text>
        <Text style={styles.description}>Length: {trip?.length1}KM</Text>
        <Text style={styles.description}>Difficulty: {trip?.difficulty}</Text>
        <Text style={styles.description}>Rating: {trip?.rating}</Text>
      </View>

      <Text style={styles.description}>{trip?.details}</Text>
    </View>
  );
};

export default TripDetails;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  infoContainer: {
    marginBottom: 10,
  },
});
