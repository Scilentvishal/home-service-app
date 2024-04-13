import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { ScrollView } from "react-native-virtualized-view";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";
import BusinessPhotos from "./BusinessPhotos";

export default function BusinessScreen() {
  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business);
  const [isReadMore, setisReadMore] = useState(false);

  const navigation = useNavigation();
  return (
    <View>
      <View style={{ height: "90%" }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButtonContainer}
        >
          <Ionicons name="arrow-back" size={30} color="white" />
          {/* <Text style={{ fontSize: 25, fontFamily: "Outfit-Medium" }}>
          {param.params.category}
        </Text> */}
        </TouchableOpacity>
        <ScrollView>
          <Image
            source={{ uri: business?.images[0]?.url }}
            style={{ width: "100%", height: 300 }}
          />
          <View style={styles.infoContainer}>
            <Text style={{ fontFamily: "Outfit-Bold", fontSize: 25 }}>
              {business?.name}
            </Text>
            <View style={styles.subContainer}>
              <Text
                style={{
                  fontFamily: "Outfit-Medium",
                  color: Colors.PRIMARY,
                  fontSize: 20,
                  textTransform: "capitalize",
                }}
              >
                {business?.contactPerson}
                🌟
              </Text>
              <Text
                style={{
                  color: Colors.PRIMARY,
                  backgroundColor: Colors.PRIMARY_LIGHT,
                  padding: 5,
                  borderRadius: 5,
                  fontSize: 14,
                }}
              >
                {business?.category.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Ionicons
                name="location-sharp"
                size={25}
                color={Colors.PRIMARY}
              />
              <Text
                style={{
                  fontFamily: "Outfit-Regular",
                  color: Colors.GRAY,
                  display: "flex",
                  alignItems: "flex-start",
                  marginLeft: -5,
                  fontSize: 17,
                }}
              >
                {" "}
                {business?.address}
              </Text>
            </View>
            {/* HorizontalLine */}
            <View
              style={{
                borderWidth: 0.4,
                borderColor: Colors.GRAY,
                marginVertical: 20,
              }}
            ></View>

            {/* About Me Section */}

            <View>
              <Heading text="About" />
              <Text
                style={{
                  fontFamily: "Outfit-Regular",
                  color: Colors.GRAY,
                  fontSize: 16,
                  lineHeight: 28,
                }}
                numberOfLines={isReadMore ? 20 : 5}
              >
                {business?.about}
              </Text>
              <TouchableOpacity onPress={() => setisReadMore(!isReadMore)}>
                <Text
                  style={{
                    color: Colors.PRIMARY,
                    fontSize: 16,
                    fontFamily: "Outfit-Regular",
                  }}
                >
                  {isReadMore ? "Read Less" : "Read More"}
                </Text>
              </TouchableOpacity>
              {/* HorizontalLine */}
              <View
                style={{
                  borderWidth: 0.4,
                  borderColor: Colors.GRAY,
                  marginVertical: 20,
                }}
              ></View>
              <BusinessPhotos business={business} />
              {/* HorizontalLine */}
              <View
                style={{
                  borderWidth: 0.4,
                  borderColor: Colors.GRAY,
                  marginVertical: 20,
                }}
              ></View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row", margin: 8, gap: 8 }}>
        <TouchableOpacity style={styles.messageBtn}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Outfit-Medium",
              color: Colors.PRIMARY,
              fontSize: 18,
            }}
          >
            Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookingBtn}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Outfit-Medium",
              color: Colors.WHITE,
              fontSize: 18,
            }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 20,
  },
  infoContainer: {
    padding: 15,
    gap: 5,
  },
  subContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  messageBtn: {
    padding: 7,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
  bookingBtn: {
    padding: 7,
    backgroundColor: Colors.PRIMARY,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderRadius: 99,
    flex: 1,
  },
});
