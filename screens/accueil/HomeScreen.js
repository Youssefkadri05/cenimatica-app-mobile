import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';


import filmImage from "../../assets/filmsImage.png"
import logo from "../../assets/logoFilms.png"
import menuIcon from "../../assets/menu_50px.png"
import rechercheIcon from "../../assets/search_50px.png"
import shoppingIcon from "../../assets/shopping_cart_50px.png"




import HorizontalFilmList from './HorizontalFilmList';
import { CarouselItems } from './CarouselItems';
import CategoryList from '../CategoryList';


const { width } = Dimensions.get('window');



const films = [
  { image: filmImage, title: "Le Parrain", year: 1972, director: "Francis Ford Coppola" },
  { image: filmImage, title: "Pulp Fiction", year: 1994, director: "Quentin Tarantino" },
  { image: filmImage, title: "La Liste de Schindler", year: 1993, director: "Steven Spielberg" },
  { image: filmImage, title: "Le Seigneur des Anneaux : Le Retour du Roi", year: 2003, director: "Peter Jackson" },
  { image: filmImage, title: "Forrest Gump", year: 1994, director: "Robert Zemeckis" },
  { image: filmImage, title: "Inception", year: 2010, director: "Christopher Nolan" },
  { image: filmImage, title: "Fight Club", year: 1999, director: "David Fincher" },
  { image: filmImage, title: "Le Silence des Agneaux", year: 1991, director: "Jonathan Demme" },
  { image: filmImage, title: "Interstellar", year: 2014, director: "Christopher Nolan" },
  { image: filmImage, title: "Gladiator", year: 2000, director: "Ridley Scott" },
  { image: filmImage, title: "Matrix", year: 1999, directors: "Les Wachowski" },
  { image: filmImage, title: "Les Évadés", year: 1994, director: "Frank Darabont" },
  { image: filmImage, title: "Titanic", year: 1997, director: "James Cameron" },
  { image: filmImage, title: "La Vie est Belle", year: 1997, director: "Roberto Benigni" },
  { image: filmImage, title: "Star Wars: Épisode V - L'Empire contre-attaque", year: 1980, director: "Irvin Kershner" },
  { image: filmImage, title: "Avengers: Endgame", year: 2019, directors: "Anthony et Joe Russo" },
  { image: filmImage, title: "Le Roi Lion", year: 1994, directors: "Roger Allers et Rob Minkoff" },
  { image: filmImage, title: "Parasite", year: 2019, director: "Bong Joon-ho" },
  { image: filmImage, title: "Joker", year: 2019, director: "Todd Phillips" },
  { image: filmImage, title: "Black Panther", year: 2018, director: "Ryan Coogler" }
];



export function HomeScreen() {

  const navigation = useNavigation();
  return (
    <ScrollView className="bg-black  flex-1  ">

      <View className="items-center w-full justify-centerw-full mt-6 flex-row justify-between px-2">
        <TouchableOpacity onPress={() => navigation.openDrawer()}><Image source={menuIcon} className="h-7 w-7 bg-black"></Image></TouchableOpacity>
        <View className="flex-row items-center justify-center ml-[10%]">
          <Text className=" text-2xl text-orange-600" style={{ fontFamily: "Tattoo" }}>Cine</Text>
          <Image source={logo} className="h-20 w-20 mx-1"></Image>
          <Text className=" text-2xl text-orange-600" style={{ fontFamily: "Tattoo" }}>Tica</Text>


        </View>
        <View className="flex-row  justify-center items-center ">
          <View>
            <Image source={shoppingIcon} className="h-10 w-10 mr-2"></Image>
            <Text className="absolute font-bold bg-orange-500 h-5 w-5 rounded-full text-center text-white "  style={{zIndex:2}} >2</Text>


          </View>
          <Image source={rechercheIcon} className="h-7 w-7 "></Image>

        </View>
      </View>
      <View className="p-4">
        <View className="w-full  items-center justify-center my-4">
          <CategoryList />
        </View>


        <View className="">
          <Text className="text-white font-bold text-xl my-2">Populaires</Text>
          <Carousel
            sliderWidth={width}
            itemWidth={width - 100} // Ajustez pour la largeur de l'élément central
            data={films}
            renderItem={CarouselItems}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={Math.floor(films.length / 2)} // Démarre au milieu de la liste
          />
        </View>

        <HorizontalFilmList films={films} sectionTitre={"Recommandations"} />
        <HorizontalFilmList films={films} sectionTitre={"Récemment Ajoutés"} />
        <HorizontalFilmList films={films} sectionTitre={"Films à venir"} />

      </View>
    </ScrollView>
  );
}

