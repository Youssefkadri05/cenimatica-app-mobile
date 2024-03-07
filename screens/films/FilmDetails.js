import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, ScrollView } from 'react-native';


import filmImage from "../../assets/filmsImage.png"
import etoileIconAvecBackground from "../../assets/star_50px.png"
import etoileIconSansBackground from "../../assets/star_sans_fill_50px.png"
import userImage from "../../assets/user_50px.png"
import shoppingIcon from "../../assets/shopping_cart_50px.png"





export function FilmDetails({ navigation }) {
  return (
    <View className="bg-black">
      <ScrollView className="bg-black p-4 flex  px-0 pt-0 mt-6 mb-8">
        <View className=" w-full flex-1 ">
          <Image className="h-64  w-full rounded-lg rounded-b-none" source={filmImage}></Image>
          <View className=" m-3 ">
            <View className=" flex-row ">
              <Image source={filmImage} className="h-40 flex-1 " />
              <View className="flex-[2] ml-4">
                <Text className="text-white" style={{ fontFamily: 'Lato-Bold', fontSize: 20 }}>La Liste de Schindler</Text>
                <Text className=" text-white border-white mt-2 border border-1 mr-auto px-4">-12</Text>
                <View className="flex-row mt-2">
                  <Image className="h-5 w-5" source={etoileIconAvecBackground} />
                  <Image className="h-5 w-5" source={etoileIconAvecBackground} />
                  <Image className="h-5 w-5" source={etoileIconAvecBackground} />
                  <Image className="h-5 w-5" source={etoileIconAvecBackground} />
                  <Image className="h-5 w-5" source={etoileIconSansBackground} />
                  <Text className=" ml-2 font-bold text-yellow-200">(129/300)</Text>
                </View>
                <Text className="text-white" style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>2017 - Action</Text>
                <Text className="text-white" style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>2h 09 min</Text>
                <Text className="text-white" style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>Prix : 50€</Text>

              </View>

            </View>
            <Text className="text-white mt-3" style={{ fontFamily: "Lato-Bold", fontSize: 16 }}>Réalisé par : Martin De Flamingo</Text>
            <Text className="text-orange-500 mt-4" style={{ fontFamily: "Lato-Bold", fontSize: 20 }}>Description</Text>
            <Text className="text-white mt-2" style={{ fontFamily: "Lato-Regular", fontSize: 16 }}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</Text>

            <TouchableOpacity className="bg-orange-500 mx-auto px-10 py-2 rounded-3xl mt-6"><Text style={{ fontFamily: "Lato-Bold", fontSize: 16 }} className="text-center text-white">Acheter 50€</Text></TouchableOpacity>
            <Text className="text-orange-500 mt-4" style={{ fontFamily: "Lato-Bold", fontSize: 20 }}>Commentaires</Text>

            <View className=" mt-4 border-b-[1px] border-white   pb-1">
              <View className="flex-row items-center">
                <Image source={userImage} className="border border-1 rounded-full bg-white w-10 h-10 mr-4 " />
                <View>
                  <Text className="text-orange-300   " style={{ fontFamily: "Lato-Bold", fontSize: 14 }}>KADRI Youssef</Text>
                  <Text className="text-white  " style={{ fontFamily: "Lato-Regular", fontSize: 12 }}>27/01/2024 à 16h20</Text>
                  <View className="flex-row mt-1">
                    <Image className="h-4 w-4" source={etoileIconAvecBackground} />
                    <Image className="h-4 w-4" source={etoileIconAvecBackground} />
                    <Image className="h-4 w-4" source={etoileIconAvecBackground} />
                    <Image className="h-4 w-4" source={etoileIconSansBackground} />
                    <Image className="h-4 w-4" source={etoileIconSansBackground} />
                  </View>

                </View>


              </View>
              <Text className="text-white ml-2 mt-2 " style={{ fontFamily: "Lato-Regular", fontSize: 12 }}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</Text>
            </View>

            <View className=" mt-4 border-b-[1px] border-white   pb-1">
              <View className="flex-row items-center">
                <Image source={userImage} className="border border-1 rounded-full bg-white w-10 h-10 mr-4 " />
                <View>
                  <Text className="text-orange-300  " style={{ fontFamily: "Lato-Bold", fontSize: 14 }}>KADRI Youssef</Text>
                  <Text className="text-white  " style={{ fontFamily: "Lato-Regular", fontSize: 12 }}>27/01/2024 à 16h20</Text>
                  <View className="flex-row mt-1">
                    <Image className="h-4 w-4" source={etoileIconAvecBackground} />
                    <Image className="h-4 w-4" source={etoileIconAvecBackground} />
                    <Image className="h-4 w-4" source={etoileIconAvecBackground} />
                    <Image className="h-4 w-4" source={etoileIconSansBackground} />
                    <Image className="h-4 w-4" source={etoileIconSansBackground} />
                  </View>

                </View>


              </View>
              <Text className="text-white ml-2 mt-2 " style={{ fontFamily: "Lato-Regular", fontSize: 12 }}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</Text>
            </View>



          </View>

        </View>


      </ScrollView>
      <View className=" flex-row    bottom-5 "  >
        <View className="bg-orange-500 h-5 flex-1 rounded-t-3xl    " />
        <Image className="absolute bottom-1 left-[45%]"  source={shoppingIcon} style={{zIndex:2}} />
        <Text className="absolute bottom-10 left-[55%] font-bold bg-white h-5 w-5 rounded-full text-center "  style={{zIndex:2}} >2</Text>
        <View className="bg-orange-500 h-10 w-20 rounded-t-full absolute  bottom-5 left-[42.5%]" />

      </View>
    </View>
  );
}


