import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//import AccountNavigator from "./AccountNavigator";
//import FeedNavigator from "./FeedNavigator";
import routes from "./routes";
import navigation from "./rootNavigation";
import ContactScreen from '../screen/ContactScreen';
import HomeScreen from '../screen/HomeScreen';
import AboutScreen from '../screen/AboutScreen';
import PinScreen from '../screen/PinScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
return (
  <Tab.Navigator>
  <Tab.Screen name="About" 
  component={HomeScreen} 
  options={{
     headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="format-align-left" color={color} size={size} />
        //drag
      ),
    }}/>
  <Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{
     headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
    }}
  />
  <Tab.Screen
    name="Back"
    component={ContactScreen}
    options={{
     headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="arrow-u-left-bottom" color={color} size={size} />
      ),
    }}
  />
  </Tab.Navigator> 
  );
};

export default AppNavigator;
