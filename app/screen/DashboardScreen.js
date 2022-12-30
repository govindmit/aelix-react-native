import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ScrollView, Image , SafeAreaView } from "react-native";
import { Text, Button, Icon } from '@rneui/themed';
import ActivityIndicator from "../component/ActivityIndicator";
import Card from "../component/Card";
import colors from "../config/colors";
import Screens from "../component/Screens";
import routes from "../navigation/routes";
import CarouselCards from './CarouselCards'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Dropdown from '../component/Dropdown';
//import { Card } from '@rneui/themed';

//import {Dropdown } from 'react-native-dropdown';

export default function DashboardScreen() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("");


  const item = [
    { label: 'All', value: '1' },
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ];


  function Slide({ data }) {
    return (
      <View
        style={{
          height: windowHeight,
          width: windowWidth,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: data.image }}
          style={{ width: windowWidth * 0.9, height: windowHeight * 0.9 }}
        ></Image>
        <Text style={{ fontSize: 24 }}>{data.title}</Text>
        <Text style={{ fontSize: 18 }}>{data.subtitle}</Text>
      </View>
    );
  }
  
  function Carousel() {
    return (
      <FlatList
        data={slideList}
        style={{ flex: 1 }}
        renderItem={({ item }) => {
          return <Slide data={item} />;
        }}
      />
    );
  };
  

   return (
    <>  
      <View style={styles.heading}>
      <Text style={styles.class}>
      <MaterialCommunityIcons
                 name="view-dashboard"
                 size={24}
                 color={colors.black}
                 style={{marginLeft:20}}
             />
             Class Dashboard 
             <Dropdown label="FILTER BY:" 
             
      data={item} onSelect={setSelected} />
      </Text> 
      {/* <View style={styles.dropdown}> */}
    
      {/* </View> */}
      </View>
   
      <Screens style={styles.screen}>
      {/* <ActivityIndicator visible={getListingsApi.loading} /> */}
      <View style={[styles.container, 
      {
         flexDirection: "column"
          }]}>

      <View style={{ flex: 1, }}>

      <SafeAreaView style={styles.contain}>
      <CarouselCards />
      </SafeAreaView>
       </View>

      <View style={{ flex: 1, backgroundColor: "darkorange" }}>
      <FlatList
          data={data}
          //  keyExtractor={item => item.id}
          // renderItem={renderItem}
          keyExtractor={(listings) => listings.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: "green" }} />
        </View>
        </Screens>
        </>
   );
 }
 
 const styles = StyleSheet.create({
  contain: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
   container: {
     flex: 1,
     padding: 20,
   },
   screen: {
    padding: 15,
    backgroundColor: colors.white,
  },
  class :{
    fontWeight:'200',
     left:20,
    textAlign:'left',
    justifyContent: "left",
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  heading:{
  //  padding: 10
  },
  dropdown:{
    flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  
 });