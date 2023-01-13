import React, { useState, useEffect } from "react";
import { Text, View,StyleSheet,StatusBar ,ScrollView,TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Avatar, Button, Card} from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from "../config/colors";



function HomeScreen() {
   return (
    <View style={{padding :0}}>
                <Card style={styles.cardb}>
                    <ScrollView>
                        <Card.Content style ={{ flexDirection : "row"}}>
                      
                            <Text style={styles.contain}>Absent</Text>
                            {/* <Text style={styles.out}>Out Of Class</Text> */}
                        </Card.Content>
                        {/* {  
                        list.map((item,id) => {
                        return(
                        <>  */}
                        <View style={{ flexDirection: "row", padding:0, }}>
                        <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}} style={ styles.image}/>   
                        <Card.Title 
                          title="herryy" 
                            subtitle="i work on this "
                            style={styles.divider}
                            />
                        </View>
                        {/* </>
                        )
                        }
                        )} */}
                    </ScrollView>
                 </Card>
      

     </View>
   );
 }
 
 function SettingsScreen() {
   return (
      <Card style={styles.cardb}>
      <ScrollView>
          <Card.Content style ={{ flexDirection : "row"}}>
        
              {/* <Text style={styles.contain}>Absent</Text> */}
              <Text style={styles.out}>Out Of Class</Text>
          </Card.Content>
          {/* {  
          list.map((item,id) => {
          return(
          <>  */}
          <View style={{ flexDirection: "row", padding:0, }}>
          <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}} style={ styles.image}/>   
          <Card.Title 
            title="herryy" 
              subtitle="i work on this "
              style={styles.divider}
              />
          </View>
          {/* </>
          )
          }
          )} */}
      </ScrollView>
   </Card>
   );
 }
 const Tab = createMaterialTopTabNavigator();

export default function MyProfileScreen() {
   return (
<>
{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
{/* <Text style={{fontSize:16,fontWeight:'700'}}>Chat Screen</Text> */}
  <Tab.Navigator>
        <Tab.Screen style={styles.contain} name="Absent" component={HomeScreen} />
        <Tab.Screen  style={styles.out} name="Out Of Class" component={SettingsScreen} />
      </Tab.Navigator>

    </>
  );
}
const styles = StyleSheet.create({
   containe: {
   flex: 1,
   paddingTop: StatusBar.currentHeight,
   },
   screen: {
   flex: 1,
   padding: 10,
   backgroundColor: colors.grayshade,
   justifyContent: 'center',
   },
   container: {
   flex: 1,
   paddingTop: 20,
   flexDirection: "row",
   bottom:0,
   //height: 100
   padding: 10,
   },
   card: {
   marginRight:24,
   height: 100,
   width: 160,
   borderRadius:1,
   top:0
   },
   header: {
   color: colors.black,
   fontSize: 18,
   textAlign:"center",
   justifyContent: "center",
   margin: 20,
   },
   headers: {
   color: colors.black,
   fontSize: 16,
   fontWeight: "bold",
   textAlign:"center",
   justifyContent: "center",
   margin: 12,
   },
   number: {
   color:  colors.blue,
   fontSize: 30,
   fontWeight: 'bold',
   marginBottom: 10,
   textAlign:"center"
   },
   divider :{
   borderBottomWidth :1,
    borderBottomColor: colors.gray,
   width:240,
   height:20,
   //marginLeft: 5,
   },
   image :{
   width: 55, 
   height : 55,
   backgroundColor:"pink" ,
   borderRadius :50 ,
   margin: 20,
   },
   containers: {
   //flex: 1,
   flexDirection: "coloum",
   width:345,
   height:260,
   borderRadius:0
   },
   paragraph: {
   fontSize: 18,
   fontWeight: 'bold',
   textAlign: 'center',
   margin: 20,
   //marginLeft: 10
   },
   scrollView: {
   backgroundColor: 'pink',
   marginHorizontal: 20,
   },
   // dropdown:{
   //   flex: 1,
   //     backgroundColor: '#fff',
   //     alignItems: 'center',
   //     justifyContent: 'center',
   //     flexDirection: 'column',
   //   }, 
   cardb :{
   // position: 'absolute',
   width: 344,
   marginTop: 10,
   //margin: 16,
   height: 320,
   borderRadius:0,
   marginRight:10,
   },
   contain : {
   flexDirection : "row",
   textAlign: 'left',
   margin: 3,
   fontSize: 19,
   fontWeight: 'bold',
   color : colors.blue,
   },
   out : {
   // flexDirection : "row",
   alignItems: "center",
   backgroundColor: colors.lightgray,
   padding: 10,
   textAlign: 'center',
   marginLeft: 23,
   fontSize: 16,
   fontWeight: 'bold',
   color : colors.darkgray,
   },
   // class :{
   //   fontWeight:'200',
   //    left:20,
   //   textAlign:'left',
   //   justifyContent: "left",
   //   fontSize: 20,
   //   fontWeight: 'bold',
   // },
   });
   



