import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatScreen from "./ChatScreen";
import ChangePassScreen from "./ChangePassScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import CounsellorScreen from "./CounsellorScreen";
import DashboardScreen from "./DashboardScreen";
import DrawerItems from "../constants/DrawerItems";
import Header from "../component/Header";
import MyProfileScreen from "./MyProfileScreen";
import PinScreen from "./PinScreen";
import ContactScreen from './ContactScreen';
//import { ListItem, ListItemSeperator } from "../component/list";
import AboutScreen from './AboutScreen';
import StudentsScreen from "./StudentsScreen";
import { Container, Content, Icon, Body, Form } from 'native-base'
import AppNavigator from "../navigation/AppNavigator";

const Drawer = createDrawerNavigator();

export default function HomeScreen({navigation}) {

  const { user, logOut } = useAuth();
  return (
    <>
      <Drawer.Navigator
       drawerType="front"
       initialRouteName="Dashboard"
       options={{ headerShown: false }}
      //  drawerContent={() => (
      //   <ListItem
      //   title="Log Out"
      //   onPress={() => logOut()}
      //   IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      // />
      //    )}
       drawerContentOptions={{
         activeTintColor: '#e91e63',
         itemStyle: { marginVertical: 10 },
       
          }}>
       {
         DrawerItems.map(drawer =>
         <Drawer.Screen
           key={drawer.name}
           name={drawer.name}
         
           options={{
            drawerIcon:({focused})=>
            drawer.iconType==='Material' ?
            <MaterialCommunityIcons
                 name={drawer.iconName}
                 size={24}
                 color={focused ? "#e91e63" : "black"}
             />
           : drawer.iconType==='Feather' ?
           <Feather
               name={drawer.iconName}
               size={24}
               color={focused ? "#e91e63" : "black"}
             />
           : <FontAwesome5
                        name={drawer.iconName}
                        size={24}
                        color={focused ? "#e91e63" : "black"}
             /> ,
              headerShown:true,
              //                header: ({ scene }) => {
              //                  const { options } = scene.descriptor;
              //                  const title =
              //                    options.headerTitle !== undefined
              //                      ? options.headerTitle
              //                      : options.title !== undefined
              //                      ? options.title
              //                      : scene.route.name;

                               //return (
             // <Header screen={title}/>
                               //);
                             //}

           }}
           component={
             drawer.name==='Dashboard' ? DashboardScreen
                :drawer.name==='MyProfile' ? MyProfileScreen
                 : drawer.name==='Students' ? StudentsScreen
                : drawer.name==='Counsellor' ? CounsellorScreen
               //  : drawer.name==='Pin' ? PinScreen
                 : drawer.name==='ChangePass' ? ChangePassScreen
                 : drawer.name==='Chat' ? ChatScreen
                   : PinScreen
           }
           />)
       }
        </Drawer.Navigator>  
     </>
  );
}

const styles = StyleSheet.create({
  drawerImage: {
    height: 50,
    width: 150,
    borderRadius: 75
  }
});



