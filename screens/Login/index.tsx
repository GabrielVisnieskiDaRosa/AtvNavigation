import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useState } from "react";
import React from "react";

type HomeScreenNavigationProp = NavigationProp<ParamListBase>;

export default function Home() {
  const [name, setName] = useState("");

  const navigation = useNavigation<HomeScreenNavigationProp>();

  function handleNext() {
    navigation.navigate("age", { name } as { name: string });
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#5374B6", "#750202"]} style={styles.container}>
        <View style={styles.containerTittle}>
          <Text style={styles.tittle}>SIMULACAR</Text>

          <Text style={styles.textUser}>Usuário</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#000"}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.textPassword}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#000"}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.textButton}>Logar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRP}>
          <Text style={styles.textButtonRP}>Esqueci minha senha.</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
