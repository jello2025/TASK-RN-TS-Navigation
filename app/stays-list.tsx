import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StaysList from "@/components/Stay/StaysList";
import stays from "@/data/stays";
const StayList = () => {
  return <StaysList stays={stays} />;
};

export default StayList;

const styles = StyleSheet.create({});
