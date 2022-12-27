import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screen/LoginScreen";
//import RegisterScreen from "../screen/RegisterScreen";
import WelcomeScreen from "../screen/WelcomeScreen";
import DashboardScreen from "../screen/DashboardScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    {/* <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    /> */}
    <Stack.Screen
      name="Login"
      options={{ headerShown: false }}
      component={LoginScreen}
    />

    <Stack.Screen
      name="Dashboard"
      options={{ headerShown: false }}
      component={DashboardScreen}
    />
      {/* <Stack.Screen
      name="Dashboard"
      options={{ headerShown: false }}
      component={DashboardScreen}
    /> */}
  </Stack.Navigator>
);

export default AuthNavigator;
