import React from 'react';
import { View, Text, Button } from 'react-native';


export function AboutScreen({ navigation }) {
  return (
    <View className="bg-red-600">
      <Text>About Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
