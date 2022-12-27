import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screen/LoginScreen";
import DashboardScreen from "../screen/DashboardScreen";

const Stack = createStackNavigator();

const LoginNavigator = () => (
  <Stack.Navigator presentation="modal" screenOptions={{ headerShown: false }}>
    {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
  </Stack.Navigator>
);

export default LoginNavigator;
