import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//import ListingScreen from "../screen/ListingScreen";
//import ListeningDetailScreen from "../screen/ListeningDetailScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator presentation="modal" screenOptions={{ headerShown: false }}>
    {/* <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="ListingDetails" component={ListeningDetailScreen} /> */}
  </Stack.Navigator>
);

export default FeedNavigator;
