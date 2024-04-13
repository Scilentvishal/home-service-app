import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import { FontAwesome } from "@expo/vector-icons";
export default function Header() {
  const { user, isLoading } = useUser();

  return (
    user && (
      <View style={styles.container}>
        <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImg} />
            <View>
              <Text style={{ color: Colors.WHITE, fontSize: 20,  fontFamily: 'Outfit-Regular' }}>
                Welcome,
              </Text>
              <Text style={{ color: Colors.WHITE, fontSize: 20, fontFamily: 'Outfit-Medium' }}>
                {user?.fullName}
              </Text>
            </View>
          </View>
          <FontAwesome name="bookmark-o" size={27} color="white" />
        </View>
        {/* Search Bar Section */}
        <View style={styles.searchBarContainer}>
          <TextInput placeholder="Search.." style={styles.textInput} />
          <FontAwesome
            name="search"
            style={styles.searchBtn}
            size={24}
            color={Colors.PRIMARY}
          />
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize: 15,
  },
  searchBarContainer: {
    marginTop: 15,
    flexDirection: "row",
    gap: 5,
  },
  searchBtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8,
  },
  userImg: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
});
