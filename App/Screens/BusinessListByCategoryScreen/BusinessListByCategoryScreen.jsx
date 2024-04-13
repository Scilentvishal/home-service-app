import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import GlobalApi from "../../Utils/GlobalApi";
import BusinessListItem from "./BusinessListItem";

import { ScrollView } from "react-native-virtualized-view";
import Colors from "../../Utils/Colors";

export default function BusinessListByCategoryScreen() {
  const param = useRoute();
  const [businessList, setBusinessList] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    param && getBusinessByCategory();
  }, [param]);

  //   businesslist by Category

  const getBusinessByCategory = async () => {
    GlobalApi.getBusinessListByCategory(param.params.category).then((res) => {
      setBusinessList(res.businessLists);
    });
  };

  return (
    <View style={{ padding: 15 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
      >
        <Ionicons name="arrow-back" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "Outfit-Medium" }}>
          {param.params.category}
        </Text>
      </TouchableOpacity>
      <ScrollView>
        {businessList.length > 0 ? (
          <FlatList
            data={businessList}
            style={{ marginTop: 15 }}
            renderItem={({ item, index }) => (
              <BusinessListItem business={item} />
            )}
          />
        ) : (
          <Text
            style={{
              fontFamily: "Outfit-Medium",
              color: Colors.GRAY,
              fontSize: 20,
              textAlign: "center",
              marginTop: "20%",
            }}
          >
            No Business Found!
          </Text>
        )}
      </ScrollView>
    </View>
  );
}
