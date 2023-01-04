import React from 'react';
import { View } from "react-native";
//import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../component/CarouselCardItem';
import data from '../../data';
import colors from '../config/colors';
import { Avatar, Button, Card } from 'react-native-paper';
// import PropTypes from 'prop-types'; 

const Cards = () => {
  const [index, setIndex] = React.useState(0)
  //const isCarousel = React.useRef(null)

  return (
    <View>
      <Card
       // ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        onSnapToItem={(index) => setIndex(index)}
       />
     
    </View>
  )
}


export default Cards;