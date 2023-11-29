import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import React from "react";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

type AgeScreenNavigationProp = NavigationProp<ParamListBase>;

type AgeScreenRouteProp = {
  params: {
    name: string; // Aqui você especifica que o parâmetro 'name' é do tipo string
  };
};

interface AgeProps {
  route: AgeScreenRouteProp;
}

export default function Age({ route }: AgeProps) {
  const navigation = useNavigation<AgeScreenNavigationProp>();

  const [age, setAge] = useState("");

  const { name } = route.params;

  function handleNext() {
    navigation.navigate("car", { age, name });
  }

  function handleBack() {
    navigation.navigate("home");
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#5374B6", "#750202"]} style={styles.container}>
        <View style={styles.containerTittle}>
          <Text style={styles.tittle}>SIMULACAR</Text>

          <View style={styles.containerInfo}>
            <Text style={styles.textSubtittle}>
              Olá {name}, vamos realizar uma simulação para um seguro.
            </Text>

            <Text style={styles.textAge}>Qual a sua idade?</Text>

            <TextInput
              style={styles.textInput}
              onChangeText={setAge}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.containerHeader}>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.textButton}>Próximo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRP} onPress={handleBack}>
            <Text style={styles.textButtonRP}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
