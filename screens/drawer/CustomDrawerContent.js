import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{alignItems: 'center', padding: 20}}>
        {/* Ajouter votre image ici */}
        <Text>dddddddd</Text>
        {/* <Image source={require('path/to/your/image.png')} style={{width: 100, height: 100}} /> */}
      </View>

      <DrawerItemList {...props} />
      
      {/* Vous pouvez ajouter ou supprimer des éléments du tiroir ici */}
    </DrawerContentScrollView>
  );
};
