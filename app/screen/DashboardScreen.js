import React, { useState, useEffect } from "react";
import { View,
    StyleSheet,
    FlatList, 
    ScrollView,
    Image ,
    SafeAreaView ,
    StatusBar,
    TouchableOpacity
    } from "react-native";
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
import { Avatar, Button, Card} from 'react-native-paper';
import axios from 'axios';
import {  CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
//import { Card } from '@rneui/themed';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function DashboardScreen({ className }) {
  const [data, setData] = useState();
  const [selected, setSelected] = useState("");
  const [country, setCountry] = useState('1');
  const [count, setCount] = useState(0);

  const onPress = () => setCount(prevCount => prevCount + 1);

  // useEffect(() => {
         
  //         axios.get('https://api-aelix.mangoitsol.com/api/getClass')
  //             //.then(response => console.log(response.data.data));
  //             .then(response => setData(response.data.data));
  //         }, []);
  //         console.log(">>>>>>>>>>>>>>>>>",data)



          useEffect(() => {
            getClass();
             getStudent();
          }, []);
                 
                 async function getClass() {
                  await axios.get('https://api-aelix.mangoitsol.com/api/getClass')
                      //.then((response) => {console.log(response.data.data)});
                      .then((response) => { setData(response.data.data)});
                 }
                  //console.log(">>>>>>>>>>>>>>>>>",data)
                  
                 // const AuthStr = 'Bearer ' + USER_TOKEN;
                  async function getStudent() {
                    await axios.get('https://api-aelix.mangoitsol.com/api/student',{
                      // headers: {
                      //   'Authorization' : `Bearer ${localStorage.setItem('access_token')}`
                      // }
                  })
                         .then((response) => {console.log(response.data)});
                        //.then((response) => { setData(response.data.data)});
                   }
                   //console.log(">>>>>>>>>>>>>>>>>",data)


          

   return (
    <>  
     <Screens style={styles.screen}>
     <SafeAreaView style={styles.containe}>
        <View>
          {/* {  
             data.map((item) => 
                    //console.log("????????????????????????", item.className)
                    <View>
                     <Text>
                     <Dropdown label="All " data={data} onSelect={setSelected}/>
                  </Text>  
                     </View>
                   )} */}
          </View>
        

      <Text>FILTER BY: 
      <Dropdown className="ALL"
       data={data} onSelect={setSelected}/>
      </Text>    

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

      <View>
        <Card style={styles.cardb}>
        <Card.Content style ={{ flexDirection : "row"}}>
          
          <TouchableOpacity
        // onPress={onPress}
            >
          <Text style={styles.contain}>Absent</Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={onPress}
          >
        <Text style={styles.out}>Out Of Class</Text>
        </TouchableOpacity>
       </Card.Content>
         
        <Card.Title title="Manika Jhon" subtitle="Class A" left={LeftContent} 
        style={styles.divider }/>
        
        <Card.Title title="Mike" subtitle="Class A" left={LeftContent} style={styles.divider }/>
        <Card.Title title="Sam" subtitle="Class A" left={LeftContent} style={styles.divider }/>
        </Card>

        {/* <Card>
          <CardImage 
            source={{uri: 'http://placehold.it/480x270'}} 
            title="Above all i am here"
          />
          <CardTitle 
            title="This is a title" 
            subtitle="This is subtitle"
          />
          <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
          <CardAction 
            separator={true} 
            inColumn={false}>
            <CardButton
              onPress={() => {}}
              title="Push"
              color="blue"
            />
            <CardButton
              onPress={() => {}}
              title="Later"
              color="blue"
            />
          </CardAction>
        </Card> */}
       
        </View>
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
    marginRight:24,
     height: 130,
     width: 160,
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
      borderRadius:0,
      marginRight:10,
    },
    contain : {
      flexDirection : "row",
      textAlign: 'left',
       margin: 3,
       fontSize: 19,
       fontWeight: 'bold',
       color : colors.blue,
      },
      out : {
       // flexDirection : "row",
       alignItems: "center",
       backgroundColor: colors.lightgray,
       padding: 10,
        textAlign: 'center',
         marginLeft: 23,
         fontSize: 16,
         fontWeight: 'bold',
         color : colors.darkgray,
        },
    
  // class :{
  //   fontWeight:'200',
  //    left:20,
  //   textAlign:'left',
  //   justifyContent: "left",
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  });