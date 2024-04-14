import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function PageHeading({title, onClick}) {
    const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={onClick}
        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
      >
        <Ionicons name="arrow-back" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "Outfit-Medium" }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}