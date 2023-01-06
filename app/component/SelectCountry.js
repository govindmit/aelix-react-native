import React, { useState ,useEffect} from 'react';
  import { StyleSheet ,View, Text} from 'react-native';
  import { SelectCountry } from 'react-native-element-dropdown';
  import axios from 'axios';

  const local_data = [
    {
      value: '1',
      lable: 'Country 1',
      // image: {
      //   uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      // },
    },
    {
      value: '2',
      lable: 'Country 2',
      // image: {
      //   uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      // },
    },
    {
      value: '3',
      lable: 'Country 3',
      // image: {
      //   uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      // },
    },
    {
      value: '4',
      lable: 'Country 4',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '5',
      lable: 'Country 5',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
  ];


  export interface Props {}

  const SelectCountryScreen: React.FC<Props> = _props => {
    const [data, setData] = useState([]);
    const [country, setCountry] = useState('1');

     useEffect(() => {
         
      axios.get('https://api-aelix.mangoitsol.com/api/getClass')
          //.then(response => console.log(response.data.data));
          .then(response => setData(response.data.data));
      }, []);

    return (
      <>  
      <View>
      {  
         data.map((item, index) => (
                //console.log("????????????????????????", item.className)
                <Text key={index} value={item._id}>{item.className}</Text> 
               ))}
      </View>
 
  <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        // imageStyle={styles.imageStyle}
        iconStyle={styles.iconStyle}
        maxHeight={200}
        value={country}
        data={local_data}
        valueField="value"
        labelField="lable"
        imageField="image"
        placeholder="Select country"
        searchPlaceholder="Search..."
        onChange={e => {
          setCountry(e.value);
        }}
      />
      </>
    );
  };

  export default SelectCountryScreen;

  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      width: 130,
      backgroundColor: '#EEEEEE',
      //borderRadius: 22,
      paddingHorizontal: 8,
    },
    imageStyle: {
      width: 24,
      height: 24,
      borderRadius: 12,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      marginLeft: 8,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
  });