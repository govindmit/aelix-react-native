import React,{useState} from 'react';
import { 
       StyleSheet,
        View, 
        Text,
        FlatList, 
       TouchableWithoutFeedback ,
        Modal,
        Button,
        } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyle from "../config/styles";
import Screens from './Screens';
import PickerItem from './PickerItem';

function AppPicker ({ 
        icon,
        items ,
        numberOfColumns = 1,
        placeholder ,
        selectedItem , 
        onSelectItem,
        PickerItemComponent = PickerItem  ,
        width="100%"
  }) {
const [modelVisible, setModelVisible] = useState(false);

    return (
        <>
        <TouchableWithoutFeedback onPress={()=> setModelVisible(true)}>
        <View style={ [styles.container, { width}]}>
        {icon &&  
        <MaterialCommunityIcons 
         name={icon} 
         size={20} 
         color = {defaultStyle.colors.medium}
         style={styles.icon}/> 
         }

      { selectedItem ? (
        <Text style={styles.text} > { selectedItem.label }</Text>
        ) :  <Text style={styles.placeholder}> { placeholder }</Text> 
        }

      <MaterialCommunityIcons 
         name="chevron-down"
         size={20} 
         color = {defaultStyle.colors.medium}
       /> 
        
        </View>
        </TouchableWithoutFeedback>

      <Modal visible={modelVisible} animationType="slide">
            <Screens>
            {/* <View style={{marginLeft : 50,padding : 30}}> */}
            <Button 
            
              title="Close" onPress={()=> setModelVisible(false)} />

          {/* </View> */}
            <FlatList data ={items} keyExtractor ={(item)=> item.value.toString()}
            numColumns = { numberOfColumns}
            renderItem = {({item})=> (

                <PickerItemComponent 
                item ={item}
                label = {item.label}
                onPress= {() => {
                setModelVisible(false);
                 onSelectItem(item);
                }}
                />
                )}
            />
          
        </Screens>

        </Modal>
        </>
    );
}
const styles = StyleSheet.create({
container: {
    backgroundColor: defaultStyle.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyle.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
  // button:{
  //   backgroundColor: 'orange',
  //   padding: 10,

  // }

})

export default AppPicker;