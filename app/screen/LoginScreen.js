import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, Icon ,View, Alert} from "react-native";
import Screens from "../component/Screens";
import WelcomeScreen from "../screen/WelcomeScreen";
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
import colors from '../config/colors';
import CheckBox from 'expo-checkbox';
import TextBox from 'react-native-password-eye'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationActions } from "react-native-navigation";
import AppButton from '../component/AppButton';
import LoginNavigator from "../navigation/LoginNavigator";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("UserName"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({icon, navigation}) {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);
  const [checked, setChecked] = useState(false);
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

openAlert=()=>{
  alert('Alert with one button');
}

// setTimeOut( () => {
//   NavigationActions.navigate('WelcomeScreen');
// }, 5000 );

  return (
    <Screens style={styles.container}>
      <Image style={styles.logo} source={require("../assets/alex-logo.png")} />

      <AppForm // for input validation
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        style={styles.form}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid UserName or Password" visible={loginFailed} />
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
        {/* <TextBox onChangeText={(text) => console.log('onChangeText: ', text)} /> */}
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
       <View style={{ padding:10}} >
       <Text style={styles.text}>
        <CheckBox
          title='Click Here'
          value={isSelected}
          onValueChange={setSelection}
          //style={styles.checkbox}
         />
        Remember Me
        </Text>
        </View>
       
        {/* <SubmitButton
          title="Login"
          onPress={() => 
            //console.log("hello")
          navigation.navigate("WelcomeScreen")}
        /> */}
       <AppButton title="Login"
        onPress={()=> navigation.navigate('DashboardScreen')}></AppButton> 
      </AppForm>
    </Screens>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor:'#FFFFFF'
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
    width: 300,
    height: 100,
    alignSelf: "center",
     marginTop: 50,
    marginBottom: 20,
  },
  icon :{
    textAlign: 'right',
  },
  text : {
   fontSize: 16,
    // paddingRight : 50,
    color : colors.dark,
    // paddingTop : 20,
    left: 20,
    // padding: 10
   },
  forgot : {
   textAlign: 'right',
    padding: 20,
    fontSize: 16,
    color : colors.blue
},
 
});
export default LoginScreen;
