import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//import AccountScreen from "../screen/AccountScreen";
//import MessagesScreens from "../screen/MessagesScreens";
// import { header } from "express-validator";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Messages" component={MessagesScreens} />
  </Stack.Navigator>
);

export default AccountNavigator;
