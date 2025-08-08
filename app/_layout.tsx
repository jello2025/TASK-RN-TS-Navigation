import { Stack, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1abc9c",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Trips",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="plane" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stays-list"
        options={{
          title: "Stays",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="bed" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stay-details"
        options={{
          title: "Stay details",
          href: null,
        }}
      />
      <Tabs.Screen
        name="trip-details"
        options={{
          title: "Trip details",
          href: null,
        }}
      />
    </Tabs>
  );
}
