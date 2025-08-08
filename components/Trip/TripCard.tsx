import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native";
interface TripCardProps {
  trip: {
    id: number;
    name: string;
    city: string;
    slug: string;
    length1: string;
    difficulty: string;
    details: string;
    img: string;
    rating: string;
  };
}

const TripCard = ({ trip }: TripCardProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/trip-details",
            params: { slug: trip.slug },
          })
        }
      >
        <Image source={{ uri: trip.img }} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});
