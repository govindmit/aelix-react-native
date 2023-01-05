import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Headers({screen}){
 const navigation = useNavigation();
  return(
<View style={headerStyles.container}>
{/* <Text>hello</Text> */}
<TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
<Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
<Entypo name="menu" size={24} color="black" />
</TouchableOpacity> 
<View>
<Text>{screen}</Text>
{/* <Text>hjhh</Text> */}
</View>
</View>
  )
}

const headerStyles=StyleSheet.create({
   container:{
       position:'absolute',
       top:30,
       left:0,
       width:'100%',
       backgroundColor:'#fa7da7',
       elevation:5,
       height:50,
       display:'flex',
       flexDirection:'row',
       paddingHorizontal:20,
       alignItems:'center',
       justifyContent:'space-between'
   }
});