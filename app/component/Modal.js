import React, { useState ,useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,Image,TouchableOpacity, Modal,Pressable } from 'react-native';
import { NavigationContainer , DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatScreen from "./ChatScreen";
import ChangePassScreen from "./ChangePassScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import CounsellorScreen from "./CounsellorScreen";
import DashboardScreen from "./DashboardScreen";
import DrawerItems from "../constants/DrawerItems";
import MyProfileScreen from "./MyProfileScreen";
import PinScreen from "./PinScreen";
import { Header } from 'react-native-elements';
import CustomSidebarMenu from "../component/CustomSidebarMenu";
import StudentsScreen from "./Student/StudentsScreen";
import { Container, Content, Icon, Body, Form } from 'native-base';
import AppNavigator from "../navigation/AppNavigator";
import axios from 'axios';
import { Avatar, Card} from 'react-native-paper';
import colors from "../config/colors";
import routes from "../navigation/routes";
import { Button ,Divider } from 'react-native-elements';
//import AuthNavigator from "../navigation/AuthNavigator";

//import { ListItem, ListItemSeperator } from "../component/list";
//import Headers from "../component/Headers";

const Drawer = createDrawerNavigator();

export default function HomeScreen({navigation}) {
 
   const [modalVisible, setModalVisible] = useState(false);
 // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   getUser();
  //   }, []);
  //   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikpob24yNUBnbWFpbC5jb20iLCJfaWQiOiI2MzE1ZGY5OTU5ZDNiZWNmYTdiMWIzYjYiLCJpYXQiOjE2NzM1MDQ2ODgsImV4cCI6MTY3MzU5MTA4OH0.Re0zU2HFZDIvKkJsmqu3SQwxLWYKyKFUSjUvBZ_Ztfk'
  //   async function getUser() {
  //     await axios.get('https://api-aelix.mangoitsol.com/api/user/6315df9959d3becfa7b1b3b6',{
  //     headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization' : `Basic ${token}` 
  //     }
  //     })
  //      //.then((response) => {console.log(response.data.data)});
  //      .then((response) => { setUser(response.data.data)});
  //     }

  return (
      <>
   
  {/* for profile modal  */}
  {/* <View style={styles.centeredVie}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
       <View style={styles.centeredView}>
          <View style={styles.modalView}>
          {  
            user.map((item,id) => {
                        return(
                        <>
                      <View style={{textAlign:"center" , width: 130}}>
                      <Image source={{uri: item.image}} style={ styles.image}/>   
                         <Card.Title 
                            key={item.id}
                            title={item.name} 
                            subtitle={item.username} 
                            // style={styles.modalText}
                            />
                      </View>   
                     
                          </>
                          )
                          }
                          )}
                          
              <Button title="Manage Profile" type="outline"
                onPress={() => navigation.navigate("Account")}/>   
            <View style={styles.divider}></View>      
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
            {/* <Button title="Logout" type="outline"
             style={styles.modalText}
             onPress={() => navigation.navigate("Login")}/>         
            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
            <Text style={styles.textStyle}>Close </Text>
             </Pressable>
          </View>
        </View>
      </Modal>
     
    </View>  */}

{/* for profile modal  */}

       <Drawer.Navigator
       drawerType="front"
       initialRouteName="Dashboard"
       drawerContentOptions={{
         activeTintColor: '#e91e63',
         itemStyle: { marginVertical: 10 },
         }}
         options={{headerShown: false}}
         drawerContent={props => <CustomSidebarMenu {...props} />}
        >
        {
         DrawerItems.map(drawer =>
        <Drawer.Screen
         options={{headerShown: false}}
           key={drawer.name}
           name={drawer.name}
           options={{
       
       headerRight: () => ( 
        <>
      <View style={{flexDirection : "row" ,height: 50}}>
     
      
        <Text style={{fontSize:16, fontWeight: "bold", Right:20,padding:0}}>Emergency Alert</Text>
       <Image source={require("../assets/redalert.png")} style={{ marginRight:0,}}/>
         {/* <Image source={require("../assets/yellowalert.png")}
       style={{ marginRight: 10,}}
       />
         <Image source={require("../assets/blackalert.png")}
       style={{ marginRight: 40,}}
       />  */}
       {/* <Pressable
        // style={[ styles.buttonOpe]}
        onPress={() => setModalVisible(true)}
      >
      <Image source={require("../assets/Avatar.png")}
        style={{ marginRight: 10,}}
       />
     </Pressable> */}
    
      </View>  
      <TouchableOpacity>
       {/* <MaterialCommunityIcons name="menu" size={30} color="black" />  */}
        </TouchableOpacity>
        </>
       ),
             headerShown:true,
            drawerIcon:({focused})=>
            drawer.iconType==='Material' ?
             <MaterialCommunityIcons
                  name={drawer.iconName}
                 size={24}
                color={focused ? "#005CB3" : "black"}
             />
            : drawer.iconType==='Feather' ?
           <Feather
               name={drawer.iconName}
                size={24}
                color={focused ? "#005CB3" : "black"}
              />
            : <FontAwesome5
                         name={drawer.iconName}
                         size={24}
                         color={focused ? "#005CB3" : "black"}
             /> ,
             }}
            component={
              drawer.name==='Dashboard' ? DashboardScreen
                :drawer.name==='MyProfile' ? MyProfileScreen
                  : drawer.name==='Students' ? StudentsScreen
                 : drawer.name==='Counsellor' ? CounsellorScreen
                 : drawer.name==='Pin' ? PinScreen
                  : drawer.name==='ChangePass' ? ChangePassScreen
                  : drawer.name==='Chat' ? ChatScreen
                  : PinScreen
           }
            /> 
           )
       }
        </Drawer.Navigator>    
       
     </>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  // centeredView: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 22
  // },
  // image :{
  //   width: 85, 
  //   height : 85,

  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor:"pink" ,
  //   borderRadius :50 ,
  //   margin: 20,
  //   },
  // modalView: {
  //   margin: 20,
  //   backgroundColor: "white",
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: "center",
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5
  // },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2
  // },
  // buttonOpen: {
  //   backgroundColor: "#F194FF",
  // },
  // buttonClose: {
  //   backgroundColor: "#2196F3",
  // },
  // textStyle: {
  //   color: "white",
  //   fontWeight: "bold",
  //   textAlign: "center"
  // },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: "center"
  // },
  // divider :{
  //   borderBottomWidth :1,
  //    borderBottomColor: colors.gray,
  //   width:240,
  //   height:20,
  //   marginBottom:20
  //   //marginLeft: 5,
  //   },
});






         