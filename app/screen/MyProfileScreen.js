import React, { useState, useEffect } from "react";
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
import { Stack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Entypo ,FontAwesome} from '@expo/vector-icons';
import AppTextInput from "../component/AppTextInput";
import axios from 'axios';

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
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikpob24yNUBnbWFpbC5jb20iLCJfaWQiOiI2MzE1ZGY5OTU5ZDNiZWNmYTdiMWIzYjYiLCJpYXQiOjE2NzM4NDIwNDAsImV4cCI6MTY3MzkyODQ0MH0.QYPiz8x3oOCBJQpTMTA2Ft4qhP-jI3CxLV6SwNFrZAI'
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
                  <FontAwesome name="edit" size={30} color={colors.darkgray} style={{marginLeft:200,top:30}}/>     
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
      <Text  style={{fontSize:18}}>Street Address</Text> 
      {/* <AppForm // for input validation
       style={styles.form}
         >
       <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          //icon="account"
          style={{backgroundColor:colors.white,marginRight:10}}
          name="username"
          value={username}
          onChange={(e) => { setUsername(e.target.value) }}
          placeholder="UserName"
          textContentType="username"
        />
      
         <AppTextInput placeholder="Password"/> 
      </AppForm> */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="email"
      />
       
      </View>
    </>
       );
     }
 
const styles = StyleSheet.create({
 container: {
      paddingTop: 20,
      paddingBottom: 20,
      flexDirection : "row"
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
    height: 40,
    //margin: 12,
    borderWidth: 1,
    borderRadius:10,
    padding: 10,
    top:20,
    right:10,
    backgroundColor: "white"
  },
})