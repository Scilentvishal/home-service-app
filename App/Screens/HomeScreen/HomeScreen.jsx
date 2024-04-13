import { View } from "react-native";
import { ScrollView } from 'react-native-virtualized-view'
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";
import BusinessList from "./BusinessList";

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <ScrollView style={{ padding: 15, marginBottom: 146, paddingBottom: 20 }}>
        <View>
          {/* Slider */}
          <Slider />
          {/* Categories */}
          <Categories />
          {/* BusinessList */}
          <BusinessList />
        </View>
      </ScrollView>
    </View>
  );
}
