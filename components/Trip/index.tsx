import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import DifficultyFilter from "@/components/Search/DifficultyFilter";
import Searchbar from "@/components/Search/Searchbar";
import Line from "@/components/Line";

import TripList from "./TripList";

import trips, { TripTypes } from "@/data/trips";

export default function Index() {
  const [search, setSearch] = useState("");
  const displayTrips: TripTypes[] = trips.filter((trip) =>
    trip.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Trips</Text>
      <Searchbar setSearch={setSearch} />

      <DifficultyFilter />

      <View
        style={{
          flexDirection: "row",
          gap: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Line width={"50%"} color="#1abc9c" />
        <Line width={"50%"} color="#1abc9c" />
      </View>
      <TripList trips={displayTrips} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});
