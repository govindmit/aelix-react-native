
import { useContext } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from "./Icon";
import colors from "../config/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import useAuth from '../auth/useAuth';
import AuthNavigator from "../navigation/AuthNavigator";

const CustomSidebarMenu = (props,{ navigation }) => {
  // const { user, logOut } = useAuth();
  const { user, setUser } = useContext(AuthContext);

  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };


  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
       source={require("../assets/alex-logo.png")}
       // source={{uri: BASE_PATH + proileImage}}
      style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
       </DrawerContentScrollView>
      <Text
        style={styles.text}
        onPress={() => navigation.navigate("Login")}
       // onPress={() => {console.log('clicked'),logOut()}}
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
    //  {   console.log("hje")}
        > Logout </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'cover',
    width: 200,
    height: 40,
     borderRadius: 100 / 2,
    alignSelf: 'center',
    bottom: 0
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontWeight: "bold",
    padding:10,
    //activeTintColor: '#e91e63', 
    backgroundColor: "lightblue"
  },
  // iconStyle: {
  //   width: 15,
  //   height: 15,
  //   marginHorizontal: 5,
  // },
  // customItem: {
  //   padding: 16,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
});

export default CustomSidebarMenu;