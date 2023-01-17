import React from 'react';
import { StyleSheet,View, Text, Image, FlatList, TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyle from '../config/styles';

function AppTextInput({icon ,width= '100%' , ...otherProps}) {
    return (
        <View style={ [styles.container, { width}]}>
        {icon &&  <MaterialCommunityIcons  name={icon} 
         size={20} color = {defaultStyle.colors.medium} style={styles.icon}/> }

        <View style={ styles.text}> 
        <TextInput
        placeholderTextColor = { defaultStyle.colors.medium }
         { ...otherProps} />
         
          {/* style={ defaultStyle.text} */}
         </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        paddingTop : 20,
        borderRadius :10,
        borderWidth: 1,
        borderColor: colors.gray,
        backgroundColor:"#FFFFFF",
        flexDirection : 'row',
        padding: 15,
        marginVertical : 10,
        marginHorizontal: 0,
       // marginRight : 10 
        },
        icon: {
        marginRight : 10 
        },
        text : {
            flex : 1
        },
})

export default AppTextInput;