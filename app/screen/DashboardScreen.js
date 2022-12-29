import * as React from 'react';
import { View, Text,StyleSheet } from "react-native";

export default function DashboardScreen() {
   return (
    <>  
 {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text style={{fontSize:16,fontWeight:'700'}}>Dashboard Screen</Text> 
</View> */}

<View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>

</>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 20,
   },
 });