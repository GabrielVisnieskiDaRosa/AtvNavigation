import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function Age(){


    const navigation = useNavigation()

    const route = useRoute()
    const {name} = route.params

    function handleBack(){
        navigation.navigate("home")
    }

    return(
        <View style={styles.container}>

            <LinearGradient colors={["#5374B6", "#750202"]} style={styles.container}>
                <View style={styles.containerTittle}>
                    <Text style={styles.tittle}>SIMULACAR</Text>
                    <View style={styles.containerInfo}>
                        <Text>Olá {name.name}, vamos realizar uma simulação para um seguro.</Text>
                    </View>
                </View>




            </LinearGradient>

            <TouchableOpacity onPress={handleBack}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}