import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Searchbar = ({ setSearch }: { setSearch: (text: string) => void }) => {
  return (
    <View
      style={{
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={(text) => setSearch(text)}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: "100%",
  },
});
