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
import StudentsScreen from "./StudentsScreen";
import { Container, Content, Icon, Body, Form } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppNavigator from "../navigation/AppNavigator";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="About" 
      component={AboutScreen} 
      options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
     <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function HomeScreen() {
  return (
    <>
    <Drawer.Navigator
       drawerType="front"
       initialRouteName="Profile"

      //  drawerContent={() => (
        // <Text>heffk</Text>
          //  <View>
            //  <Image
            //  style={{width: "50%"}}
            //  resizeMode="contain"
            //  source={ require('../assets/alex-logo.png')} />
          //  </View>
        //  )}
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
               /* <Image
          style={styles.drawerImage}
          source={ require('../assets/alex-logo.png')}  /> */
           :
           drawer.iconType==='Feather' ?
        <Feather
               name={drawer.iconName}
               size={24}
               color={focused ? "#e91e63" : "black"}
             />
           :
          <FontAwesome5
                        name={drawer.iconName}
                        size={24}
                        color={focused ? "#e91e63" : "black"}
                      />
                    ,
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

       {/* <AppNavigator/> */}
        {/* <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator> */}

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



