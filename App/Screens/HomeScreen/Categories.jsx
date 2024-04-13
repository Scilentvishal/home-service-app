import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";
import {useNavigation} from "@react-navigation/native"

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [categoryNum, setCategoryNum] = useState(2);
  const navigation = useNavigation()

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const res = await GlobalApi.getCategories();
      setCategories(res.categories); // Assuming that the API response has a 'categories' key containing the array of categories
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const handleViewAll = () => {
    setCategoryNum(50)
  }

  return (
    <View style={{ marginTop: 10 }}>
      <Heading text="Categories" isViewAll={true} onClick={handleViewAll} />
      <FlatList
        data={categories}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
        renderItem={({ item, index }) =>
          index <= categoryNum && (
            <TouchableOpacity style={styles.container}
            onPress={()=>navigation.push('business-list',{
              category: item.name
            })}
            >
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri: item.icon?.url }}
                  style={{ width: 30, height: 30}}
                />
              </View>
              <Text style={{ fontFamily: "Outfit-Medium", marginTop: 5 }}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginRight: 10
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Light_Gray,
    padding: 15,
    borderRadius: 99,
  },
});
