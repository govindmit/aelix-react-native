import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import colors from "../../config/colors";

function ListItemSeperator() {
  return <View style={styles.seprator}></View>;
}
const styles = StyleSheet.create({
  seprator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

export default ListItemSeperator;
