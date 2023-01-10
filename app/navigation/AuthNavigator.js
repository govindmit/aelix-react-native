import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screen/LoginScreen";
import WelcomeScreen from "../screen/WelcomeScreen";
import HomeScreen from "../screen/HomeScreen";
import AppNavigator from "../navigation/AppNavigator";

const Stack = createNativeStackNavigator();

const AuthNavigator = (props) => (
  <Stack.Navigator>
  <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen}/>
 <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen}/> 
 <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen}/>
 <Stack.Screen name="Tab" options={{ headerShown: false }} component={AppNavigator}/>

</Stack.Navigator>
);

export default AuthNavigator;
