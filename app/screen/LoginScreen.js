import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, Icon ,View, Button, Alert,SafeAreaView,StatusBar} from "react-native";
import Screens from "../component/Screens";
import * as Yup from "yup";
import axios from 'axios'
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../component/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import colors from '../config/colors';
import CheckBox from 'expo-checkbox';
import TextBox from 'react-native-password-eye'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationActions } from "react-native-navigation";
import AppButton from '../component/AppButton';
import AuthNavigator from "../navigation/AuthNavigator";
import ActivityIndicator from "../component/ActivityIndicator";
import AppTextInput from "../component/AppTextInput";


const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("UserName"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({icon, navigation}) {
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

 const handleSubmit = async ({ username, password }) => {
    const result = await authApi.login(username, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.data);
    console.log(user);
};


timer=()=> {
  setTimeout(() => {
    navigation.navigate('Welcome');
  }, 1000);
  setTimeout(() => {
    navigation.navigate('Tab');
  }, 10000);
}
// setTimeOut( () => {
//   NavigationActions.navigate('WelcomeScreen');
// }, 5000 );

  return (
    <>
     <SafeAreaView style={styles.containe}>
    <ActivityIndicator visible={loginApi.loading} />
    <Screens style={styles.container}>
      <Image style={styles.logo} source={require("../assets/login.png")} />

      <AppForm // for input validation
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        style={styles.form}
        validationSchema={validationSchema}
      >
      <ErrorMessage error="Invalid UserName or Password" visible={loginFailed} />
 
      {/* <AppTextInput/> */}
        <Text style={styles.contain}>Manager or Counsellor Login</Text> 
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="username"
          
          value={username}
          onChange={(e) => { setUsername(e.target.value) }}
          placeholder="UserName"
          textContentType="username"
        />
      
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
          // icon="eye"
         />
      {/* <TextBox 
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
           secureTextEntry={true}
           textContentType="password"
           placeholder="Password"
           style={styles.pass}
           onChangeText={(text) => setPassword({ password:text })} 
           value={password}
          />
    */}

    <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
         />
          <Text style={styles.text}>Remember Me</Text>
        </View>
       
        {/* <SubmitButton
          title="Login"
          onPress={() => timer()}
        /> */}
       <AppButton title="Login"
       onPress={() => timer()}>
       </AppButton> 
      </AppForm>
      
         {/* <Button
        title="Loginss"
        onPress={() => navigation.navigate("Tab")}
      />  */}
     
    </Screens>
    </SafeAreaView> 
    </>
  );
}

const styles = StyleSheet.create({
  containe: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    padding: 20,
    backgroundColor:'#FFFFFF'
  },
  checkbox: {
    alignSelf: "center",
  },
  checkboxContainer :{
    marginTop:10, 
    marginBottom:20,
    flexDirection: "row",
  },
  pass : {
    paddingTop : 20,
    borderRadius :10,
    borderWidth: 1,
    borderColor: colors.gray,
    flexDirection : 'row',
    padding: 15,
    marginVertical : 10,
    },
    form : {
      paddingTop : 20,
      borderRadius :10,
      borderWidth: 1,
      borderColor: colors.gray,
      flexDirection : 'row',
      padding: 15,
      marginVertical : 10,
    },
  logo: {
    width: 370,
    height: 300,
    alignSelf: "center",
    marginBottom: 20,
  },
 
  text : {
   fontSize: 16,
   color : colors.darkgray,
   margin: 8,
    //left: 20,
    },
  contain : {
   textAlign: 'left',
    // padding: 10,
    margin: 18,
    fontSize: 22,
    lineHeight: 33,
    fontWeight: 'bold',
    color : colors.blue,
   },
 });
export default LoginScreen;
