import React from 'react';
import { Text, View, Image } from 'react-native';



// Cette fonction définit comment chaque élément du carrousel est rendu
export const CarouselItems = ({ item, index }) => {
  return (
    <View className="p-1  mr-2 my-auto pl-0 ml-0">
      <Image source={item.image} className="w-full h-44 rounded-lg" />
      <Text numberOfLines={1}
        ellipsizeMode='tail'
        className=" text-lg text-center text-white " style={{ fontFamily: "Tattoo", fontSize:18 }}>{item.title}</Text>
    </View>
  );
};