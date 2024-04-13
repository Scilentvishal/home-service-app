import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import {useNavigation } from "@react-navigation/native";

export default function BusinessListItem({ business }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.push("business-detail", {
      business: business
    })}>
      <Image source={{ uri: business?.images[0]?.url }} style={styles.image} />
      <View style={styles.subContainer}>
        <Text
          style={{
            fontFamily: "Outfit-Regular",
            color: Colors.GRAY,
            fontSize: 15,
          }}
        >
          {business.contactPerson}
        </Text>
        <Text style={{ fontFamily: "Outfit-Bold", fontSize: 18 }}>
          {business.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} />
        <Text  style={{
            fontFamily: "Outfit-Regular",
            color: Colors.GRAY,
            display: 'flex',
            alignItems: 'flex-start',
            marginLeft: -5,
            fontSize: 16,
          }}>  {business.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
    gap: 10,
  },
  subContainer: {
    gap: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
