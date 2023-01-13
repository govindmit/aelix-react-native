import React, { useState, useEffect } from "react";
import { View,
StyleSheet,
FlatList, 
ScrollView,
Image ,
SafeAreaView ,
StatusBar,
Modal,
Pressable,
TouchableOpacity
} from "react-native";
import { Text, Icon } from '@rneui/themed';
import ActivityIndicator from "../component/ActivityIndicator";
import axios from 'axios';
import colors from "../config/colors";
import Screens from "../component/Screens";
import routes from "../navigation/routes";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Dropdown from '../component/Dropdown';
import { Avatar, Button, Card} from 'react-native-paper';
import {  CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import CarouselCards from './CarouselCards';
//import Cards from './Cards';
//import Card from "../component/Card";
//import { Card, ListItem, Button, Icon } from 'react-native-elements'
//import { Card } from '@rneui/themed';

export default function DashboardScreen(props,{ className }) {

const [data, setData] = useState();
const [list, setList] = useState([]);
const [selected, setSelected] = useState("");
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
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikpob24yNUBnbWFpbC5jb20iLCJfaWQiOiI2MzE1ZGY5OTU5ZDNiZWNmYTdiMWIzYjYiLCJpYXQiOjE2NzM1OTI5NDEsImV4cCI6MTY3MzY3OTM0MX0.yDJ5UF1edII5zRT3p6SwdVi9PAHw-fIN43v0M_rxyuc'
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
   
//const LeftContent = props =><Image source={{uri: item.image}} style={{width: 50, height : 50,backgroundColor:"pink", padding:10 , borderRadius :30 }}/>   

function HomeScreen() {
    return (
        <View style={{  justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
    );
  }
  
  function SettingsScreen() {
    return (
       <Card style={styles.cardb}>
       <ScrollView>
           <Card.Content style ={{ flexDirection : "row"}}>
         
               {/* <Text style={styles.contain}>Absent</Text> */}
               <Text style={styles.out}>Out Of Class</Text>
           </Card.Content>
           {/* {  
           list.map((item,id) => {
           return(
           <>  */}
           <View style={{ flexDirection: "row", padding:0, }}>
           <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}} style={ styles.image}/>   
           <Card.Title 
             title="herryy" 
               subtitle="i work on this "
               style={styles.divider}
               />
           </View>
           {/* </>
           )
           }
           )} */}
       </ScrollView>
    </Card>
    );
  }
  

const Tab = createMaterialTopTabNavigator();

return (
<>  
<Screens style={styles.screen}>
    <SafeAreaView style={styles.containe}>
        <ScrollView>
           <Text> FILTER BY: <Dropdown className="ALL"
           data={data} onSelect={setSelected}/>
            </Text>
            <View style={styles.container}>
                {  
                list.map((item,id) => {
                return(
                <> 
                <Card style={styles.card }>
                    <Text style={styles.headers}>Total Students</Text>
                    <Text style={styles.number} key={item.id}>{item.totalcount}14</Text>
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
                list.map((item,id)=> {
                return(
                <> 
                <Card style={styles.card } key={item.id}>
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

        <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Out Of Class" component={SettingsScreen} />
        </Tab.Navigator>
      
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
                        list.map((item,id) => {
                        return(
                        <> 
                        <View style={{ flexDirection: "row", padding:0, }}>
                        <Image source={{uri: item.image}} style={ styles.image}/>   
                        <Card.Title 
                            key={item.id}
                            title={item.name} 
                            subtitle={item.assignClass.className} 
                            style={styles.divider}
                            />
                        </View>
                        </>
                        )
                        }
                        )}
                    </ScrollView>
                 </Card>
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
width:240,
height:20,
//marginLeft: 5,
},
image :{
width: 55, 
height : 55,
backgroundColor:"pink" ,
borderRadius :50 ,
margin: 20,
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
height: 320,
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
//
 {/* 
            <Card>
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
                        onPress={() =>
                    {}}
                    title="Push"
                    color="blue"
                    />
                    <CardButton
                        onPress={() =>
                    {}}
                    title="Later"
                    color="blue"
                    />
                </CardAction>
            </Card>
            */}
           