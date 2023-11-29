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
import BouncyCheckbox from "react-native-bouncy-checkbox";

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

  const [valueAge, setValueAge] = useState(0);
  const [porcentagem, setPorcentagem] = useState(0);
  const [porcentagemYear, setPorcentagemYear] = useState(0);

  const [valueYear, setValueYear] = useState(0);
  const [total, setTotal] = useState(0);
  const [base, setBase] = useState(0);
  const [checkCheckBoxState, setCheckBoxState] = useState(false);
  const [iconMoeda, setIconMoeda] = useState("");

  const precoDolar = 5.0;

  useEffect(() => {
    calculaReal();
  }, []);

  function calculaReal() {
    var valorBaseInicio = calcBase();
    var valorTotal = valorBaseInicio;

    var valorPorIdade = calcAge(valorTotal);
    valorTotal = valorTotal + valorPorIdade;

    var valorPorAno = calcYear(valorTotal);
    valorTotal = valorTotal + valorPorAno;

    setIconMoeda("R$");
    setValueAge(valorPorIdade);
    setValueYear(valorPorAno);
    setBase(valorBaseInicio);
    setTotal(valorTotal);
  }

  function calcBase() {
    var baseInicial = 1000;
    if (parseInt(valorBase) > 100000) {
      baseInicial = 2000;
    } else if (parseInt(valorBase) >= 50000 && parseInt(valorBase) <= 100000) {
      baseInicial = 1500;
    } else {
      baseInicial = 1000;
    }

    return baseInicial;
  }

  function calcAge(valorTotal: number) {
    var valorIdade = 0;
    var porcentagem = 0
    if (parseInt(age) < 22) {
      valorIdade = valorTotal * 0.2;
      valorIdade = valorTotal + valorIdade;
    } else if (parseInt(age) >= 22 && parseInt(age) <= 28) {
      valorIdade = valorTotal * 0.18;
      valorIdade = valorTotal + valorIdade;
    } else {
      porcentagem = valorTotal * -0.15;
      valorIdade = porcentagem;
    }
    setPorcentagem(porcentagem)
    return valorIdade;
  }

  function calcYear(valorTotal: number) {
    var valueYear = 0;
    var valorPorcentagem = 0;

    if (parseInt(year) < 2000) {
      valueYear = valorTotal * 0.3;
      valueYear = valorTotal + valueYear;

    } else if (parseInt(year) >= 2000 && parseInt(year) <= 2009) {
      valueYear = valorTotal * 0.15;
      valueYear = valorTotal + valueYear;

    } else if (parseInt(year) >= 2010 && parseInt(year) <= 2015) {
      valueYear = 0;
    } else {
      valorPorcentagem = valorTotal * -0.1;
      valueYear = valorPorcentagem
      setPorcentagemYear(valorPorcentagem);
    }
    return valueYear;
  }

  function handleNext() {
    navigation.navigate("home");
  }

  function handleBack() {
    navigation.navigate("car", { age });
  }

  function convercao() {
    var valorBaseDolar = base / precoDolar;
    var valorTotalDolar = total / precoDolar;
    var valorPorIdadeDolar = valueAge / precoDolar;
    var valorPorAnoDolar = valueYear / precoDolar;

    setBase(valorBaseDolar);
    setTotal(valorTotalDolar);
    setValueAge(valorPorIdadeDolar);
    setValueYear(valorPorAnoDolar);
    setIconMoeda("$");
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
          <BouncyCheckbox
            style={styles.checkBox}
            text={"Conversão para dólar"}
            textStyle={{
              color: "#FFF",
              fontSize: 20,
              textDecorationLine: "none",
            }}
            fillColor="red"
            unfillColor="#FFFFFF"
            innerIconStyle={{ borderWidth: 2 }}
            onPress={(isChecked: boolean) => {
              if (isChecked) {
                convercao();
              } else {
                calculaReal();
              }
            }}
          />

          <TextInput style={styles.textInput}>
            <Text style={styles.textResult}>
              Base {iconMoeda} {base}
            </Text>
          </TextInput>

          <TextInput style={styles.textInput}>
            <Text style={styles.textResult}>
              Por idade {iconMoeda} {porcentagem}
            </Text>
          </TextInput>

          <TextInput style={styles.textInput}>
            <Text style={styles.textResult}>
              Por ano {iconMoeda} {porcentagemYear}
            </Text>
          </TextInput>
        </View>
        <TextInput style={styles.textInput}>
          <Text style={styles.textResult}>
            Total {iconMoeda} {total}
          </Text>
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
