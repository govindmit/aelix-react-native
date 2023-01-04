import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//import AccountNavigator from "./AccountNavigator";
//import FeedNavigator from "./FeedNavigator";
import routes from "./routes";
import navigation from "./rootNavigation";
import ChatScreen from "../screen/ChatScreen";
//import ContactScreen from '../screen/ContactScreen';
import HomeScreen from '../screen/HomeScreen';
import AboutScreen from '../screen/AboutScreen';
import PinScreen from '../screen/PinScreen';
import PasswordScreen from '../screen/PasswordScreen';
import MyProfileScreen from '../screen/MyProfileScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
return (
  <Tab.Navigator>
  <Tab.Screen name="Chat" 
  component={ChatScreen} 
  options={{
     headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="chat" color={color} size={size} />
        //drag
      ),
    }}/>
  <Tab.Screen
    name="Pin"
    component={PinScreen}
    options={{
     headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="dots-horizontal-circle" color={color} size={size} />
      ),
    }}
  />
  <Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{
     headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={40} />
      ),
    }}
  />
   <Tab.Screen name="Account" 
  component={MyProfileScreen} 
  options={{
     headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="account" color={color} size={size} />
        //drag
      ),
    }}/>
     <Tab.Screen name="Password" 
  component={PasswordScreen} 
  options={{
     headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="lock" color={color} size={size} />
        //drag
      ),
    }}/>
  </Tab.Navigator> 
  );
};

export default AppNavigator;
