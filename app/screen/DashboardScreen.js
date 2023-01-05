import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ScrollView, Image , SafeAreaView ,StatusBar} from "react-native";
import { Text, Icon } from '@rneui/themed';
import ActivityIndicator from "../component/ActivityIndicator";
//import Card from "../component/Card";
import colors from "../config/colors";
import Screens from "../component/Screens";
import routes from "../navigation/routes";
import CarouselCards from './CarouselCards';
import Cards from './Cards';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Dropdown from '../component/Dropdown';
import { Avatar, Button, Card } from 'react-native-paper';
//import data from '../../data';
//import { Card } from '@rneui/themed';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

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

   return (
    <>  
     <Screens style={styles.screen}>
     <SafeAreaView style={styles.containe}>
     {/* <ScrollView style={styles.scrollView}> */}
     
      <Dropdown label="FILTER BY: " 
       data={item} onSelect={setSelected} style={{ paddingTop:20}}/>
  
       <View style={styles.container}>
   
         <Card style={styles.card }>
          <Text style={styles.header}>Total Students</Text>
          <Text style={styles.number}>150</Text>
        </Card>

        <Card style={styles.card }>
          <Text style={styles.headers}>Present Students</Text>
          <Text style={styles.number}>140</Text>
        </Card>
        
        
     </View>

     <View style={styles.container}>
   
       <Card style={styles.card }>
          <Text style={styles.headers}>Absent Students</Text>
          <Text style={styles.number}>4</Text>
        </Card>

        <Card style={styles.card }>
          <Text style={styles.headers}>Out of Students</Text>
          <Text style={styles.number}>4</Text>
        </Card>
  
      </View>

      {/* <SafeAreaView style={styles.contain}> 
      <Cards />
      </SafeAreaView> */}
    
     <View>
        <Card style={styles.cardb}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.contain}>Absent</Text>
          </Card.Content>
        <Card.Title title="Manika Jhon" subtitle="Class A" left={LeftContent} 
        style={styles.divider }/>
        {/* <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          </Card.Content> */}
        <Card.Title title="Mike" subtitle="Class A" left={LeftContent}   style={styles.divider }/>
        <Card.Title title="Sam" subtitle="Class A" left={LeftContent}   style={styles.divider }/>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        
      </Card>
        {/* <Card style={styles.containers}>
        
        </Card> */}
        </View>
        {/* </ScrollView> */}
      </SafeAreaView> 
       </Screens>
        </>
   );
 }
 
const styles = StyleSheet.create({
  containe: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.grayshade,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    top: 20,
    flexDirection: "row",
    bottom:0
    //padding: 10,
   },
  card: {
    marginRight:20,
     height: 130,
    width: 163,
     borderRadius:1,
     top:0
    },
   header: {
    color: colors.black,
    fontSize: 18,
    textAlign:"center",
    justifyContent: "center",
    margin: 20,

   },
  headers: {
    color: colors.black,
    fontSize: 18,
    textAlign:"center",
    justifyContent: "center",
    margin: 12,

   },
  number: {
    color:  colors.blue,
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    textAlign:"center"
   },
   divider :{
    borderBottomWidth :1,
     borderBottomColor: colors.gray,
    //marginLeft: 5,
   },
containers: {
  //flex: 1,
  flexDirection: "coloum",
  width:345,
  height:260,
  borderRadius:0
  
},
   paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    //marginLeft: 10
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  // dropdown:{
  //   flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     flexDirection: 'column',
  //   }, 
    cardb :{
      borderRadius:0
    },
    contain : {
      textAlign: 'left',
       margin: 3,
       fontSize: 20,
       fontWeight: 'bold',
       color : colors.blue,
      },
  // class :{
  //   fontWeight:'200',
  //    left:20,
  //   textAlign:'left',
  //   justifyContent: "left",
  //   fontSize: 20,
  //   fontWeight: 'bold',
    
  // },
  // heading:{
  //   padding: 10
  // },

  
  });