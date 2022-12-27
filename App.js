import React, { useCallback, useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import DashboardNavigator from "./app/navigation/DashboardNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/component/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";
//import logger from "./app/utility/logger";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import ChatScreen from "./app/screen/ChatScreen";
// import ChangePassScreen from "./app/screen/ChangePass";
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';
// import CounsellorScreen from "./app/screen/CounsellorScreen";
// import DashboardScreen from "./app/screen/DashboardScreen";
// import DrawerItems from "./app/constants/DrawerItems";
// import Header from "./app/component/Header";
// import MyProfileScreen from "./app/screen/MyProfileScreen";
// import PinScreen from "./app/screen/PinScreen";
// import StudentsScreen from "./app/screen/StudentsScreen";


//const Drawer = createDrawerNavigator();

//logger.start();
export default function App() {
  const [user, setUser] = useState("");
  const [isReady, setIsReady] = useState(false);
  const restoreUser = async () => {
  const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await restoreUser();
      } catch (error) {
        console.log("Error loading app", error);
      } finally {
        setIsReady(true);
        console.log("first")
      }
    }

    prepare();
  }, []);

  const onNavigationContainerReady = useCallback(async () => {
    if (isReady) await SplashScreen.hideAsync();
  }, [isReady]);

  if (!isReady) return null;

  return (
  <>
   <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice /> 
       <NavigationContainer
        ref={navigationRef}
        theme={navigationTheme}
        onReady={onNavigationContainerReady}
      >
        {user ? <DashboardNavigator /> : <AuthNavigator />}
         {/* <AppNavigator />  */}
      </NavigationContainer> 
      <StatusBar style="auto" />
   </AuthContext.Provider>

    {/* <NavigationContainer>
    <Drawer.Navigator
       drawerType="front"
       initialRouteName="Profile"
       drawerContentOptions={{
         activeTintColor: '#e91e63',
         itemStyle: { marginVertical: 10 },
          }}>
       {
         DrawerItems.map(drawer=><Drawer.Screen
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

              //                  return (
              // <Header screen={title}/>
              //                  );
              //                }

           }}
           component={
            drawer.name==='Dashboard' ? DashboardScreen
               : drawer.name==='Profile' ? MyProfileScreen
                 : drawer.name==='Students' ? StudentsScreen
                : drawer.name==='Counsellor' ? CounsellorScreen
               : drawer.name==='Pin' ? PinScreen
                 : drawer.name==='ChangePass' ? ChangePassScreen
                 : drawer.name==='Chat' ? ChatScreen
                   : PinScreen
           }
         />)
       }
        </Drawer.Navigator>  
  </NavigationContainer> */}
    </>
  );
}







