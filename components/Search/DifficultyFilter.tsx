import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DifficultyFilter = () => {
  return (
    <View
      style={{
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Moderate </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hard </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DifficultyFilter;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 10,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1abc9c",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
