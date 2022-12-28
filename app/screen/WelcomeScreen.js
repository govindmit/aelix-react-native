import React from 'react';
import { ImageBackground , StyleSheet,View, Text, Image} from 'react-native';
import AppButton from '../component/AppButton';

function WelcomeScreen({ navigation}) {
    return (
      
        <View style ={styles.background}>
        <View style ={styles.logoContainer}>
          <Image style={styles.logo} 
         source={ require('../assets/Right.png')} /> 
          <Text style={styles.tagLine}>Welcome jhonyBravo</Text> 
         </View>
        </View>

    );
}
const styles = StyleSheet.create({
    background : {
        flex :1,
        justifyContent: 'center',
       alignItems: 'center',
       backgroundColor:"#005CB3"
     },
    tagLine : {
    fontSize : 35,
    fontWeight: "bold",
    padding: 20,
    color:'white'
    },
     logo : {
    width : 150,
    height : 150,
    }, 
    logoContainer:{
    position : 'center',
    alignItems: 'center',
   // top : 200
    
}
})
export default WelcomeScreen;