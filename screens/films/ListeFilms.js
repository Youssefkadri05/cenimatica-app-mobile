import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, Modal, FlatList, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';


import filmImage from "../../assets/filmsImage.png"
import etoileIconAvecBackground from "../../assets/star_50px.png"
import etoileIconSansBackground from "../../assets/star_sans_fill_50px.png"
import rechercheIcon from "../../assets/search_50px.png"
import sliderIcon from "../../assets/slider_30px.png"


import userImage from "../../assets/user_50px.png"
import shoppingIcon from "../../assets/shopping_cart_50px.png"


const sortOptions = [
    { key: 'name-asc', label: 'Nom (croissant)' },
    { key: 'name-desc', label: 'Nom (décroissant)' },
    { key: 'year-asc', label: 'Année (croissant)' },
    { key: 'year-desc', label: 'Année (décroissant)' },
];


const films = [
    { image: filmImage, id: 1, title: "Le Parrain", year: 1972, director: "Francis Ford Coppola" },
    { image: filmImage, id: 2, title: "Pulp Fiction", year: 1994, director: "Quentin Tarantino" },
    { image: filmImage, id: 3, title: "La Liste de Schindler", year: 1993, director: "Steven Spielberg" },
    { image: filmImage, id: 4, title: "Le Seigneur des Anneaux : Le Retour du Roi", year: 2003, director: "Peter Jackson" },
    { image: filmImage, id: 5, title: "Forrest Gump", year: 1994, director: "Robert Zemeckis" },
    { image: filmImage, id: 6, title: "Inception", year: 2010, director: "Christopher Nolan" },
    { image: filmImage, id: 7, title: "Fight Club", year: 1999, director: "David Fincher" },
    { image: filmImage, id: 8, title: "Le Silence des Agneaux", year: 1991, director: "Jonathan Demme" },
    { image: filmImage, id: 9, title: "Interstellar", year: 2014, director: "Christopher Nolan" },
    { image: filmImage, id: 10, title: "Gladiator", year: 2000, director: "Ridley Scott" },
    { image: filmImage, id: 11, title: "Matrix", year: 1999, directors: "Les Wachowski" },
    { image: filmImage, id: 12, title: "Les Évadés", year: 1994, director: "Frank Darabont" },
    { image: filmImage, id: 13, title: "Titanic", year: 1997, director: "James Cameron" },
    { image: filmImage, id: 14, title: "La Vie est Belle", year: 1997, director: "Roberto Benigni" },
    { image: filmImage, id: 15, title: "Star Wars: Épisode V - L'Empire contre-attaque", year: 1980, director: "Irvin Kershner" },
    { image: filmImage, id: 16, title: "Avengers: Endgame", year: 2019, directors: "Anthony et Joe Russo" },
    { image: filmImage, id: 17, title: "Le Roi Lion", year: 1994, directors: "Roger Allers et Rob Minkoff" },
    { image: filmImage, id: 18, title: "Parasite", year: 2019, director: "Bong Joon-ho" },
    { image: filmImage, id: 19, title: "Joker", year: 2019, director: "Todd Phillips" },
    { image: filmImage, id: 20, title: "Black Panther", year: 2018, director: "Ryan Coogler" }
];

// Tri des films
const sortFilms = (films, type) => {
    switch (type) {
        case 'name-asc':
            return [...films].sort((a, b) => a.title.localeCompare(b.title));
        case 'name-desc':
            return [...films].sort((a, b) => b.title.localeCompare(a.title));
        case 'year-asc':
            return [...films].sort((a, b) => a.year - b.year);
        case 'year-desc':
            return [...films].sort((a, b) => b.year - a.year);
        default:
            return films;
    }
};



const FilmItem = ({ film }) => (
    <View className=" p-1 flex-1 mb-4 ">
        <Image
            source={film.image}
            className="w-full h-40"
            resizeMode="cover"
        />
        <Text className="text-white" numberOfLines={1}>{film.title}</Text>
        <Text className="text-white" numberOfLines={1}>{film.year}</Text>

        <View className="flex-row mt-1">
            <Image className="h-3 w-3" source={etoileIconAvecBackground} />
            <Image className="h-3 w-3" source={etoileIconAvecBackground} />
            <Image className="h-3 w-3" source={etoileIconAvecBackground} />
            <Image className="h-3 w-3" source={etoileIconSansBackground} />
            <Image className="h-3 w-3" source={etoileIconSansBackground} />
        </View>
    </View>
);

export function ListeFilms({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0].key);




    const handleSelectSortOption = (optionKey) => {
        setSelectedSortOption(optionKey);
        setModalVisible(false);
    };

    const getSortedData = () => {
        let sortedData = [...films];
        switch (selectedSortOption) {
            case 'name-asc':
                sortedData.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'name-desc':
                sortedData.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'year-asc':
                sortedData.sort((a, b) => a.year - b.year);
                break;
            case 'year-desc':
                sortedData.sort((a, b) => b.year - a.year);
                break;
            default:
                // no default sorting
                break;
        }
        return sortedData.filter(film =>
            film.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const sortedAndFilteredData = getSortedData();

    return (
        <View className="bg-gray-500 ">
            <View className=" bg-black mt-6 p-4 ">
                <View className="flex-row justify-between items-center">
                    <Text className="text-white" style={{ fontFamily: "Lato-Bold", fontSize: 18 }}>Action</Text>
                    <View className="flex-row  flex-1  mx-6   ">
                        <TextInput
                            className="border-2 border-white w-full rounded-2xl pl-4  "
                            onChangeText={setSearchQuery}
                            value={searchQuery}
                            placeholder="Rechercher..."
                            autoCorrect={false}
                            placeholderTextColor="gray"
                        >
                        </TextInput>
                    </View>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image source={sliderIcon} className="h-7 w-7 " />
                    </TouchableOpacity>


                </View>
                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(!modalVisible)}
                    >
                        <View >
                            <View >
                                <FlatList
                                    data={sortOptions}
                                    renderItem={({ item }) => (
                                        <View>
                                            <RadioButton
                                                value={item.key}
                                                status={selectedSortOption === item.key ? 'checked' : 'unchecked'}
                                                onPress={() => handleSelectSortOption(item.key)}
                                            />
                                            <Text onPress={() => handleSelectSortOption(item.key)} >
                                                {item.label}
                                            </Text>
                                        </View>
                                    )}
                                    keyExtractor={(item) => item.key}
                                />
                            </View>
                        </View>
                    </Modal>
                    <FlatList
                        className="mb-20 mt-3"
                        data={sortedAndFilteredData}
                        renderItem={({ item }) => <FilmItem film={item} />}
                        keyExtractor={item => item.id}
                        numColumns={3}
                    />
                </View>



            </View>

        </View>
    );
}


