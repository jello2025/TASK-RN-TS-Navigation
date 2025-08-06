import React from "react";
import { DimensionValue, StyleSheet, View } from "react-native";

const Line = ({ width, color }: { width: DimensionValue; color: string }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: color,
        borderRadius: 10,
        width: width,
        marginTop: 10,
      }}
    />
  );
};

export default Line;

const styles = StyleSheet.create({});
