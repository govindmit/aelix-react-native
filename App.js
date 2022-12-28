import React, { useCallback, useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/component/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";
//import logger from "./app/utility/logger";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
        {user ? <AppNavigator /> : <AuthNavigator />}
         {/* <AppNavigator />  */}
      </NavigationContainer> 
      <StatusBar style="auto" />
   </AuthContext.Provider>
  </>
  );
}







