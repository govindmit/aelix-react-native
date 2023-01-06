import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
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
//import Headers from "../component/Headers";
import MyProfileScreen from "./MyProfileScreen";
import PinScreen from "./PinScreen";
import { Header } from 'react-native-elements';
import CustomSidebarMenu from "../component/CustomSidebarMenu";
//import { ListItem, ListItemSeperator } from "../component/list";
import StudentsScreen from "./Student/StudentsScreen";
import { Container, Content, Icon, Body, Form } from 'native-base';
import AppNavigator from "../navigation/AppNavigator";

const Drawer = createDrawerNavigator();

export default function HomeScreen({navigation}) {
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
         drawerContent={props => <CustomSidebarMenu {...props} />}
        >
        {
         DrawerItems.map(drawer =>
        <Drawer.Screen
        options={{headerShown: false}}
           key={drawer.name}
           name={drawer.name}
           options={{
        //  headerTintColor: 'black',
         //headerLeft:true,
       headerRight: () => ( 
        <>
      <View style={{flexDirection : "row" ,height: 50}}>
       <Image source={require("../assets/redalert.png")} 
       
       style={{ marginRight: 10,}}
       />
         <Image source={require("../assets/yellowalert.png")}
       style={{ marginRight: 10,}}
       />
         <Image source={require("../assets/blackalert.png")}
       style={{ marginRight: 40,}}
       /> 
        <Image source={require("../assets/Avatar.png")}
       style={{ marginRight: 10,}}
       />
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
        {/* <Drawer.Navigator options={{headerShown: false}}>
          <Drawer.Screen name="Dashboard"  component={DashboardScreen} />
          <Drawer.Screen name="MyProfile" component={MyProfileScreen} />
        </Drawer.Navigator> */}
     </>
  );
}







         