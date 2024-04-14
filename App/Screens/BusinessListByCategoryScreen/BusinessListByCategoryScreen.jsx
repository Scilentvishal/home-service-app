import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import GlobalApi from "../../Utils/GlobalApi";
import BusinessListItem from "./BusinessListItem";

import { ScrollView } from "react-native-virtualized-view";
import Colors from "../../Utils/Colors";
import PageHeading from "../../Components/PageHeading";

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
      <PageHeading
        title={param.params.category}
        onClick={() => navigation.goBack()}
      />
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
