import React, { useEffect, useState , useRef } from 'react';
import { StyleSheet,
   Image,
    Text, 
    Icon ,
    View,
    Button,
    Alert,
    SafeAreaView,
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard,
    Animated,
    Dimensions
    } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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
import { AntDesign, Entypo } from "@expo/vector-icons";


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

  const windowHeight = Dimensions.get("window").height;
  const [status, setStatus] = useState(null);
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;
  const successColor = "#6dcf81";
  const successHeader = "Success!";
  const successMessage = "You pressed the success button";
  const failColor = "#bf6060";
  const failHeader = "Failed!";
  const failMessage = "You pressed the fail button";

const popIn = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * 0.35 * -1,
      duration: 300,
      useNativeDriver: true,
    }).start(popOut());
  };

  const popOut = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * -1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 10000);
  };

  const instantPopOut = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * -1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

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
    
     <KeyboardAwareScrollView>
     {/* <SafeAreaView style={styles.containe}> */}
    {/* <ActivityIndicator visible={loginApi.loading} /> */}
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
       {/* <AppButton title="Login"
       onPress={() => timer()}>
       </AppButton>  */}
      </AppForm>
      
         <Button
        title="Loginss"
        onPress={() => navigation.navigate("Tab")}
      /> 

   {/* <Animated.View
        style={[
          styles.toastContainer,
          {
            transform: [{ translateY: popAnim }],
          },
        ]}
      >
        <View style={styles.toastRow}>
          <AntDesign
            name={status === "success" ? "checkcircleo" : "closecircleo"}
            size={24}
            color={status === "success" ? successColor : failColor}
          />
          <View style={styles.toastText}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {status === "success" ? successHeader : failHeader}
            </Text>
            <Text style={{ fontSize: 12 }}>
              {status === "success" ? successMessage : failMessage}
            </Text>
          </View>
          <TouchableOpacity onPress={popIn}>
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Animated.View>

      <Button
        title="Success Message"
        onPress={() => {
          setStatus("success");
          popIn();
        }}
        style={{ marginTop: 30 }}
      ></Button>

      <Button
        title="Fail Message"
        onPress={() => {
          setStatus("fail");
          popIn();
        }}
        style={{ marginTop: 30 }}
      ></Button> */}
     
    </Screens>
    {/* </SafeAreaView>  */}
    </KeyboardAwareScrollView>
   
    
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
   toastContainer: {
    height: 60,
    width: 350,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  toastRow: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  toastText: {
    width: "70%",
    padding: 2,
  },
 });
export default LoginScreen;
