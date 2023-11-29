import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

type CarScreenNavigationProp = NavigationProp<ParamListBase>;

type CarScreenRouteProp = {
  params: {
    name: string;
    age: string;
  };
};

interface CarProps {
  route: CarScreenRouteProp;
}

export default function Car({ route }: CarProps) {
  const [car, setCar] = useState("");
  const [year, setYear] = useState("");

  const navigation = useNavigation<CarScreenNavigationProp>();

  const { age } = route.params;
  const { name } = route.params;

  function handleNext() {
    navigation.navigate("result", { name, car, age, year });
  }

  function handleBack() {
    navigation.navigate("age", { name });
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#5374B6", "#750202"]} style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>SIMULACAR</Text>

          <Text style={styles.textSubtitle}>
            Olá {name}, Agora vamos solicitar os dados do seu veiculo
          </Text>

          <Text style={styles.textCar}>Qual seu carro?</Text>
          <TextInput style={styles.textInput} onChangeText={setCar} />

          <Text style={styles.textYear}>Qual o ano do seu carro</Text>
          <TextInput style={styles.textInput} onChangeText={setYear} />
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
