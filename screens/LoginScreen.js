import React from 'react';
import { SafeAreaView, Text, Button, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

import logo from "../assets/logoFilms.png"
import emailIcon from "../assets/email.png"
import passwordIcon from "../assets/password.png"
import { style_app } from './style';

export function LoginScreen({ navigation }) {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}}>
      <ScrollView className="bg-orange-100">
        <SafeAreaView className=" flex  flex-col  items-center justify-center p-4 py-8 mt-14">
          <View className=" flex-1  items-center justify-end ">
            <Image source={logo} className="h-64 "></Image>
            <Text className="  text-4xl mt-6  text-orange-600 pt-5 " style={{fontFamily:"MooLahLah", fontSize:50}}>CINEMATICA</Text>
          </View>
          <View className="  m-4 mt-6 w-full rounded-2xl p-8">
            <View className="bg-white rounded-3xl h-12 px-2 gap-x-2 items-center flex-row shadow-3xl" style={style_app.shadow_champs}>
              <Image source={emailIcon} className="h-8 w-8"></Image>
              <TextInput placeholder='Email' className=" flex-1 font-bold"></TextInput>
            </View>
            <View className="bg-white rounded-3xl h-12 px-2 gap-x-2 items-center flex-row  my-8" style={style_app.shadow_champs}>
              <Image source={passwordIcon} className="h-8 w-8"></Image>
              <TextInput secureTextEntry={true}  placeholder='Mot de passe' className="flex-1 font-bold"></TextInput>
            </View>
            <TouchableOpacity className="bg-orange-500 items-center justify-center mx-auto rounded-3xl p-2 px-8 " style={style_app.shadow_champs}><Text className="font-bold text-lg text-white">Se connecter</Text></TouchableOpacity>
            <View className="flex-row  mt-20">
              <Text>Vous n’avez pas de compte ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')} ><Text className="text-orange-500"> Créer un compte</Text></TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
