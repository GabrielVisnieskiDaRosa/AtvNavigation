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

type ResultScreenNavigationProp = NavigationProp<ParamListBase>;

type ResultScreenRouteProp = {
  params: {
    name: string;
    car: string;
    age: string;
    year: string;
    valorBase: string;
  };
};

interface ResultProps {
  route: ResultScreenRouteProp;
}

export default function Result({ route }: ResultProps) {
  const navigation = useNavigation<ResultScreenNavigationProp>();

  const { name } = route.params;
  const { car } = route.params;
  const { age } = route.params;
  const { year } = route.params;
  const { valorBase } = route.params;

  const [result, setResult] = useState(0);
  const [porcentagem, setPorcentagem] = useState(0);
  const [resultAge, setResultAge] = useState(0);
  const [total, setTotal] = useState(0);
  const [base, setBase] = useState(0);

  useEffect(() => {
    let contaBase;
    if (parseInt(valorBase) > 100000) {
      contaBase = 2000;
      setBase(contaBase);
    } else if (parseInt(valorBase) >= 50000 && parseInt(valorBase) <= 100000) {
      contaBase = 1500;
      setBase(contaBase);
    } else {
      contaBase = 1000;
      setBase(contaBase);
    }
  });

  useEffect(() => {
    let conta;

    if (parseInt(age) < 22) {
      setPorcentagem(base * 0.2);
      conta = base + porcentagem;
      setResult(conta);
    } else if (parseInt(age) >= 22 && parseInt(age) <= 28) {
      setPorcentagem(base * 0.18);
      conta = base + porcentagem;
      setResult(conta);
    } else {
      setPorcentagem(base * 0.15);
      conta = base - porcentagem;
      setResult(conta);
    }
  });

  useEffect(() => {
    let conta;
    let reduzir;
    if (parseInt(year) < 2000) {
      conta = result * 0.3;
      setResultAge(conta);
    } else if (parseInt(year) >= 2000 && parseInt(year) <= 2009) {
      conta = result * 0.15;
      setResultAge(conta);
    } else if (parseInt(year) >= 2010 && parseInt(year) <= 2015) {
      conta = 0;
      setResultAge(conta);
    } else {
      conta = result * 0.1;

      setResultAge(conta);
    }
  });

  useEffect(() => {
    let conta;
    if (parseInt(year) >= 2016) {
      conta = result - resultAge;
      setTotal(conta);
    } else {
      conta = result + resultAge;
      setTotal(conta);
    }
  });

  function handleNext() {
    navigation.navigate("home");
  }

  function handleBack() {
    navigation.navigate("car", { age });
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#5374B6", "#750202"]} style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>SIMULACAR</Text>
          <Text style={styles.textSubtitle}>
            Olá {name}, fizemos um orçamento para seu veiculo {car}.
          </Text>
        </View>

        <View style={styles.containerResult}>
          <TextInput style={styles.textInput}>
            <Text style={styles.textResult}>Base R$ {base}</Text>
          </TextInput>

          <TextInput style={styles.textInput}>
            <Text style={styles.textResult}>Por idade R${porcentagem}</Text>
          </TextInput>

          <TextInput style={styles.textInput}>
            <Text style={styles.textResult}>Por ano R${resultAge}</Text>
          </TextInput>
        </View>
        <TextInput style={styles.textInput}>
          <Text style={styles.textResult}>Total R${total}</Text>
        </TextInput>

        <View style={styles.containerHeader}>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.textButton}>Finalizar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRP} onPress={handleBack}>
            <Text style={styles.textButtonRP}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
