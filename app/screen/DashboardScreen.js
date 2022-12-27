import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function DashboardScreen() {
  return (
   <View style={styles.container}>
   <Text style={{fontSize:16,fontWeight:'700'}}>Dashboard Screen</Text>
      {/* <Text>DASHBOARD Page .</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



