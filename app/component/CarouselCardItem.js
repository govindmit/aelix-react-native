import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import colors from '../config/colors';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      {/* <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      /> */}
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.number}>{item.number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex :1,
    backgroundColor: colors.lightgray,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    // width: ITEM_WIDTH,
    // paddingBottom: 40,
    //shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
   
    //elevation: 7,
  },
  // image: {
  //   width: ITEM_WIDTH,
  //   height: 300,
  // },
  header: {
    color: colors.black,
    fontSize: 28,
  },
  number: {
    color:  colors.blue,
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
   }
})

export default CarouselCardItem;