import React from 'react';
import { SafeAreaView, Text, Button, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

import registerImage from "../assets/register.png"
import emailIcon from "../assets/email.png"
import nomIcon from "../assets/nom.png"
import prenomIcon from "../assets/prenom.png"
import passwordIcon from "../assets/password.png"
import { style_app } from './style';


export function RegisterScreen({ navigation }) {
    return (

        <SafeAreaView className="items-center justify-start     flex flex-col h-screen mx-3">
            {/* <View className="flex-1 bg-orange-500  p-4 w-full rounded-3xl">

            </View>
            <View className="flex-[2] bg-red-200 m-4 p-4"></View> */}
            <Image className="h-72 w-full mt-10  " source={registerImage}></Image>
            <View className=" absolute top-40 items-center bg-orange-600 rounded-3xl rounded-tl-none rounded-br-none px-8 justify-center ">
                <Text className="text-xl mt-3 text-white   " style={{ fontFamily: "Lemon-Regular", fontSize: 25, elevation: 10 }} > Créer</Text>
                <Text className="text-xl  text-white " style={{ fontFamily: "Lemon-Regular", fontSize: 25 }} > un</Text>
                <Text className="text-xl  text-white " style={{ fontFamily: "Lemon-Regular", fontSize: 25 }} > compte</Text>

            </View>
            <View className=" bg-orange-100  border-2 border-orange-600   w-full rounded-lg p-8  mx-4">
                <View className="bg-white rounded-3xl h-12 px-2 gap-x-2 items-center flex-row shadow-3xl" style={style_app.shadow_champs}>
                    <Image source={nomIcon} className="h-8 w-8"></Image>
                    <TextInput placeholder='Nom' className=" flex-1 font-bold"></TextInput>
                </View>
                <View className="bg-white rounded-3xl h-12 px-2 gap-x-2 items-center flex-row mt-4" style={style_app.shadow_champs}>
                    <Image source={prenomIcon} className="h-8 w-8"></Image>
                    <TextInput  placeholder='Prénom' className="flex-1 font-bold"></TextInput>
                </View>
                
                <View className="bg-white rounded-3xl h-12 px-2 gap-x-2 items-center flex-row mt-4" style={style_app.shadow_champs}>
                    <Image source={emailIcon} className="h-8 w-8"></Image>
                    <TextInput  placeholder='Email' className="flex-1 font-bold"></TextInput>
                </View>
                <View className="bg-white rounded-3xl h-12 px-2 gap-x-2 items-center flex-row mt-4" style={style_app.shadow_champs}>
                    <Image source={passwordIcon} className="h-8 w-8"></Image>
                    <TextInput secureTextEntry={true} placeholder='Mot de passe' className="flex-1 font-bold"></TextInput>
                </View>
                <View className="bg-white rounded-3xl h-12 px-2 gap-x-2 items-center flex-row mt-4" style={style_app.shadow_champs}>
                    <Image source={passwordIcon} className="h-8 w-8"></Image>
                    <TextInput  placeholder='Confirmer le mot de passe' className="flex-1 font-bold"></TextInput>
                </View>
                <TouchableOpacity className="bg-orange-500 items-center justify-center mx-auto rounded-3xl p-2 px-8 my-4 mt-8" style={style_app.shadow_champs}><Text className="font-bold text-lg text-white">Créer le compte</Text></TouchableOpacity>
                <View className="flex-row mt-4">
                    <Text>Vous n’avez pas de compte ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')} ><Text className="text-orange-500"> Créer un compte</Text></TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>

    );
}
