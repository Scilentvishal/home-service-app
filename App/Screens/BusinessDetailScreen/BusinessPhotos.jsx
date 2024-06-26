import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import Heading from "../../Components/Heading";

export default function BusinessPhotos({ business }) {
  return (
    <View>
      <Heading text="Photos" />
      {console.log(business.images)}
      <FlatList
        data={business?.images}
        numColumns={2}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item?.url }}
            style={{
              width: "50%",
              height: 200,
              flex: 1,
              borderRadius: 15,
              margin: 5,
            }}
          />
        )}
      />
    </View>
  );
}
