import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AboutScreen } from './screens/AboutScreen';
import { HomeScreen } from './screens/accueil/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { CustomDrawerContent } from './screens/drawer/CustomDrawerContent';
import { FilmDetails } from './screens/films/FilmDetails';
import { ListeFilms } from './screens/films/ListeFilms';


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='ListeFilms' screenOptions={{ headerShown: false }} drawerContent={(props) => <CustomDrawerContent {...props} />}>

      <Drawer.Screen name="FilmDetails" component={FilmDetails} />
      <Drawer.Screen name="ListeFilms" component={ListeFilms} />

      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />


    </Drawer.Navigator>
  );
}


export default function App() {

  const [fontsLoaded] = useFonts({
    'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
    'MooLahLah': require('./assets/fonts/MooLahLah-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    'Helvetica-Bold': require('./assets/fonts/Helvetica-Bold.ttf'),
    'Lemon-Regular': require('./assets/fonts/Lemon-Regular.ttf'),
    'Tattoo': require('./assets/fonts/MiltonianTattoo-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer screenOptions={{ headerShown: false }} >
      <MyDrawer />
    </NavigationContainer>
  );
}


