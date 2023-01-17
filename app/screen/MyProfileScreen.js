import React, { useState, useEffect ,useRef} from "react";
import { Text, View,StyleSheet,StatusBar ,ScrollView,TouchableOpacity,Image,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {  Button, Card} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from "../config/colors";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../component/forms";
import * as Yup from "yup";
import Screens from "../component/Screens";
import { Stack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Entypo ,FontAwesome} from '@expo/vector-icons';
import AppTextInput from "../component/AppTextInput";
import axios from 'axios';

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("UserName"),
  password: Yup.string().required().min(4).label("Password"),
  });


export default function MyProfileScreen() {
  const [data, setData] = useState();
  const [list, setList] = useState([]);
  const [user, setUser] = useState([]);
  const [text, onChangeText] = useState('');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getUser();
    }, []);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikpob24yNUBnbWFpbC5jb20iLCJfaWQiOiI2MzE1ZGY5OTU5ZDNiZWNmYTdiMWIzYjYiLCJpYXQiOjE2NzM5MzczODEsImV4cCI6MTY3NDAyMzc4MX0.VDblXO6rEpjs7TQ7jKqYZmBLGEfQbwqjwVuHjzzsQwg'
    async function getUser() {
      await axios.get('https://api-aelix.mangoitsol.com/api/user/6315df9959d3becfa7b1b3b6',{
      headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Basic ${token}` 
      }
      })
       //.then((response) => {console.log(response.data.data)});
       .then((response) => { setUser(response.data.data)});
      }


   return (
     <>
     <View style={{  backgroundColor: colors.grayshade}}>
    <View style={styles.container}>
      <Image source={require("../assets/user.png")} style={{position:'relative'}}/>
      <View  style={styles.camera}>
      <Entypo name="camera" size={24} color="white"/>
      </View>
         {  
            user.map((item,id) => {
                     return(
                      <>
                  <View key={item.id} style={styles.text}>
                  <FontAwesome name="edit" size={30} color={colors.darkgray} style={{marginLeft:170,top:30}}/>     
                   <Text  style={{fontSize:18,fontWeight:"bold",paddingBottom:5}}>{item.name}</Text> 
                   <Text  style={{fontSize:18,color:colors.darkgray}}>{item.username}</Text> 
                   </View>   
                      </>
                       )
                       }
                       )}

       </View>
       
      <View style={{marginLeft:20}}>
      <Text style={styles.contain}>My Address</Text> 
      <Text  style={{fontSize:18 ,paddingBottom:20}}>Street Address</Text> 
      <AppForm 
       style={styles.form}
       validationSchema={validationSchema}
         >
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
      
         <AppTextInput 
         autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="username"
          value={username}
          onChange={(e) => { setUsername(e.target.value) }}
          placeholder="UserName"
          textContentType="username"
         /> 
      </AppForm>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="email"
      />
      
       
    </View>
    </View>
    </>
       );
     }
 
const styles = StyleSheet.create({
 container: {
      paddingTop: 20,
      paddingBottom: 20,
      flexDirection : "row",
     
    },
  camera:{
    position:'absolute',
    marginTop:80,
    marginLeft:80,
    backgroundColor: "red", 
    width: 40, 
    height:40,
    borderRadius:"100%",
   display:"flex",
   justifyContent:"center",
   alignItems:"center",
   overFlow:"hidden"
  },
  text:{
    width:"100%", 
    marginLeft:40,
  },
  contain : {
    paddingBottom:8,
    fontSize: 18,
    fontWeight: 'bold',
    color : colors.blue,
   },
   input: {
    height: 45,
    //margin: 12,
    borderWidth: 1,
    borderRadius:0,
    padding: 10,
    top:20,
    right:10,
    //color:"£FFFFFF",
    backgroundColor:"#FFFFFF"
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
})