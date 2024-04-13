import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";

export default function Slider() {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    getSlider();
  }, []);
  const getSlider = () => {
    GlobalApi.getSlider().then((res) => {
      // console.log(`res: ${JSON.stringify(res)}`);
      setSlider(res?.sliders);
    });
  };
  return (
    <View>
      <Heading text="Offers For You" />
      <View>
        <FlatList
          data={slider}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={{ marginRight: 20 }}>
              <Image
                source={{ uri: item.image?.url }}
                style={styles.sliderImage}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: "cover",
  },
});
