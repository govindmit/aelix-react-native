import React, { useState ,useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,Image,TouchableOpacity, Modal,Pressable,SafeAreaView } from 'react-native';
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

const Drawer = createDrawerNavigator();

export default function HomeScreen({navigation}) {
  const [shouldShow, setShouldShow] = useState(true);

  return (
      <>
       <Drawer.Navigator
       drawerType="front"
       initialRouteName="Dashboard"
       drawerContentOptions={{
         activeTintColor: '#e91e63',
         itemStyle: { marginVertical: 10 },
         }}
         options={{headerShown: false}}
         drawerContent={props => <CustomSidebarMenu {...props} />} >
        {
         DrawerItems.map(drawer =>
        <Drawer.Screen
         options={{headerShown: false}}
           key={drawer.name}
           name={drawer.name}
           options={{
       
       headerRight: () => ( 
        <>
         {shouldShow ? (
          <View>
          <Card style={styles.card}>
          <View style={styles.alert}>
          <Text style={styles.text}>Emergency Alert</Text>
          <Image source={require("../assets/redalert.png")}/>
          <View  style={styles.divider}/>
         <Image source={require("../assets/yellowalert.png")} />
         <View  style={styles.divider}/>
         <Image source={require("../assets/blackalert.png")}
           />  
        </View>
        </Card>
        </View>
       ) : null}
      <View style={{flexDirection : "row" ,height: 50}}>
      {/* <Text style={{fontSize:16, fontWeight: "bold", Right:20,padding:0}}>Emergency Alert</Text> */}
      <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
        <Image source={require("../assets/redalert.png")} style={{width:45,height:45}}  
         />
         </TouchableOpacity>
       </View>  
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
  containers: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
 divider :{
borderBottomWidth :1,
 borderBottomColor: colors.gray,
width:150,
height:10,
marginBottom:10
//marginLeft: 5,
},
text : {
  fontSize:16, 
  fontWeight: "bold",
  padding:10
},
alert :{
  backgroundColor: colors.white,
   padding:20,
   height:270
},
card:{
  marginRight:10,
  top:110,
}
});






         