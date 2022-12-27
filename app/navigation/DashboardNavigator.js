import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//import AccountNavigator from "./AccountNavigator";
//import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screen/ListingEditScreen";
import DashboardScreen from "../screen/DashboardScreen";
// import NewListingButton from "./NewListingButton";
import routes from "./routes";
import navigation from "./rootNavigation";
//import useNotifications from "../hooks/useNotifications";
//import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const DashboardNavigator = () => {
  useNotifications();

  return (

    // <View>
    // <Text>Welcome to DASHBOARD Page ..</Text>
    // </View>

    //  <Tab.Navigator>
    //   <Tab.Screen
    //     name="Feed"
    //     component={FeedNavigator}
    //     options={{
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="home" color={color} size={size} />
    //       ),
    //     }}
    //   />
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.DASHBOARD)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
       {/* <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />  */}
    </Tab.Navigator> 
  );
};

export default DashboardNavigator;
