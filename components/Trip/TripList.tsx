import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import TripCard from "./TripCard";

interface Trip {
  id: number;
  name: string;
  city: string;
  slug: string;
  length1: string;
  difficulty: string;
  details: string;
  img: string;
  rating: string;
}

const TripList = ({ trips }: { trips: Trip[] }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={trips}
        renderItem={({ item }) => <TripCard trip={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.tripsContainer}
      />
    </View>
  );
};

export default TripList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tripsContainer: {
    padding: 20,
    backgroundColor: "white",
  },
});
