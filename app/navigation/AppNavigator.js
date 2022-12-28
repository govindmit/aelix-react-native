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

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
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
};

export default AppNavigator;
