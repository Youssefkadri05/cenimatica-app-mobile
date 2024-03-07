import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');


const categories = [
    'Action', 'Comédie', 'Drame', 'Fantaisie', 'Horreur', 'Romance', 'Science-Fiction', 'Thriller', 'Documentaire', 'Animation'
  ];
  
const CategoryList = () => {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <View style={styles.categoryItem} className="items-center justify-center ml-0  mr-6" >
          <Text className="text-white   " style={{fontSize:15, fontFamily:"Tattoo"}}>{item}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      snapToInterval={width / 5} // Ajustez en fonction de la taille de vos éléments
    />
  );
};

const styles = StyleSheet.create({
  categoryItem: {
  },

});

export default CategoryList;
