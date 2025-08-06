import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Line from "@/components/Line";
import StaysList from "@/components/Stay/StaysList";
import Searchbar from "@/components/Search/Searchbar";

import stays from "@/data/stays";

const StayIndex = () => {
  const [search, setSearch] = useState("");
  const displayStays = stays.filter((stay) =>
    stay.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Stays</Text>
      <Searchbar setSearch={setSearch} />
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

      <StaysList stays={displayStays} />
    </View>
  );
};

export default StayIndex;

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

  line: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    height: 10,
    marginTop: 20,
  },
  textContainer: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
});
