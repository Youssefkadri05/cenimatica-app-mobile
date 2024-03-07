import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

const HorizontalFilmList = ({ films, sectionTitre }) => {
  return (
    <View>
    <Text className="text-white font-bold text-xl my-2">{sectionTitre}</Text>
    <ScrollView horizontal={true} style={{ width: '100%' }}>
      {films.map((film, index) => (
        <View key={index} className=" mr-4   w-40">
          <Image className="  h-56 w-full " source={film.image}></Image>
          <Text className="text-center my-auto text-white " style={{ fontFamily: "Tattoo", fontSize:14 }}>
            {film.title}
          </Text>
        </View>
      ))}
    </ScrollView>
    </View>
  );
};

export default HorizontalFilmList;
