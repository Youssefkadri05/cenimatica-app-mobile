import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DrawerContent = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Menu Personnalisé</Text>
      <Button title="Accueil" onPress={() => navigation.navigate('Home')} />
      <Button title="À propos" onPress={() => navigation.navigate('About')} />
      {/* Ajoutez plus de boutons pour naviguer si nécessaire */}
    </View>
  );
};

export default DrawerContent;
