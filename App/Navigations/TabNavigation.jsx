import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import BookingScreen from "../Screens/BookingScreen/BookingScreen";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../Utils/Colors";
import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Booking"
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12 }}>
              Booking
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
        component={BookingScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
