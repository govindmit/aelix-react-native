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
//import { Card, ListItem, Button, Icon } from 'react-native-elements'
import axios from 'axios';
import {  CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
//import { Card } from '@rneui/themed';



export default function DashboardScreen({ className }) {
  const [data, setData] = useState();
  const [list, setList] = useState([]);
  const [user, setUser] = useState([]);
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
            getUser();
          }, []);
                 
                 async function getClass() {
                  await axios.get('https://api-aelix.mangoitsol.com/api/getClass')
                      //.then((response) => {console.log(response.data.data)});
                      .then((response) => { setData(response.data.data)});
                 }
                  //console.log(">>>>>>>>>>>>>>>>>",data)
                  
                  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikpob24yNUBnbWFpbC5jb20iLCJfaWQiOiI2MzE1ZGY5OTU5ZDNiZWNmYTdiMWIzYjYiLCJpYXQiOjE2NzM0MTYxMTAsImV4cCI6MTY3MzUwMjUxMH0.Rzy_jDeMU03URE2wACpBuAROe0HXgCm3XFwRzD2S_iQ'
                  async function getStudent() {
                    await axios.get('https://api-aelix.mangoitsol.com/api/student',{
                       headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : `Basic ${token}` 
                        // 'Authorization' : `Bearer ${localStorage.setItem('access_token')}`
                       }
                   })
                     //.then((response) => {console.log(response.data.data)});
                    .then((response) => { setList(response.data.data)});
                   }

                   async function getUser() {
                    await axios.get('https://api-aelix.mangoitsol.com/api/user/6315df9959d3becfa7b1b3b6',{
                       headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : `Basic ${token}` 
                     }
                   })
                    // .then((response) => {console.log(response.data.data)});
                    //.then((response) => { setUser(response.data.data)});
                   }

 {/* {  
             list.map((item, index) => {
                  console.log("????????????????????????", list)
                  return(
                <View key={item.index}> 
                <Text>{item.name}{item.lastName}</Text>  
                 </View>  
                  )
                     
                   }   
                   )} */}

      const LeftContent = props =><Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}} style={{width: 50, height : 50,backgroundColor:"pink", padding:10 , borderRadius :30 }}/>   
  
    return (
    <>  
        <Screens style={styles.screen}>
        <SafeAreaView style={styles.containe}>
        <ScrollView>
            <View>
              {/* {  
             list.map((item, index) => {
                  console.log("????????????????????????", list)
                  return(
                <View key={item.index}> 
                <Text>{item.name}{item.lastName}</Text>  
                 </View>  
                  )
                     
                   }   
                   )} */}
          </View>
        

      <Text>FILTER BY: 
      <Dropdown className="ALL"
       data={data} onSelect={setSelected}/>
      </Text>    
   {/* <View> */}
      
       <View style={styles.container}>
       {  
             list.map((item, index) => {
                 //console.log("????????????????????????", list)
                  return(
             <> 
             
         <Card style={styles.card }>
          <Text style={styles.headers}>Total Students</Text>
          <Text style={styles.number}>{item.totalcount}14</Text>
        </Card>
      
        <Card style={styles.card }>
          <Text style={styles.headers}>Present Students</Text>
          <Text style={styles.number}>0</Text>
        </Card>
       
        
        </>
          )
            }
            )}
       </View>
         

     <View style={styles.container}>
     {  
             list.map((item, index)=> {
                 //console.log("????????????????????????", list)
                  return(
             <> 
             
       <Card style={styles.card }>
          <Text style={styles.headers}>Absent Students</Text>
          <Text style={styles.number}>12</Text>
        </Card>

        <Card style={styles.card }>
          <Text style={styles.headers}>Out of Students</Text>
          <Text style={styles.number}>0</Text>
        </Card>
        </>
          )
            }
            )}
      </View>
     

      <View style={{padding :10}}>
      <Card style={styles.cardb}>
      <ScrollView>
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
       {  
        list.map((item, index) => {
         return(
        <> 
    
       {/* {
        const LeftContent = props =><Image source={{uri: item.image}} style={{width: 50, height : 30,backgroundColor:"pink"  }}/>   
       }  */}
        <Card.Title 
         key={item.index}
         roundAvatar
          // title={u.name}
         // leftAvatar={{ source: { uri:  item.image } }}
      //  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
        left={LeftContent} 
        title={item.name} 
        subtitle={item.assignClass.className} 
        style={styles.divider}
        />
          
         {/* left={item.image}  */}
        
       
       </>
       )
       }
       )}
       </ScrollView>
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
        </ScrollView>
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
    paddingTop: 20,
    flexDirection: "row",
    bottom:0,
    //height: 100
    padding: 10,
   },
  card: {

   marginRight:24,
     height: 100,
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
    fontSize: 16,
    fontWeight: "bold",
    textAlign:"center",
    justifyContent: "center",
    margin: 12,

   },
  number: {
    color:  colors.blue,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
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
      // position: 'absolute',
     width: 344,
      marginTop: 10,
     //margin: 16,
      height: 365,
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