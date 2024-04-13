import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({text, isViewAll=false,onClick}) {
  return (
    <View style={styles.container}>
        <Text style={styles.Heading}>{text}</Text>
       {isViewAll &&  <Text onPress={onClick}>View All</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    Heading: {
        fontSize: 20,
        fontFamily: "Outfit-Medium",
        marginBottom: 10
    },
});