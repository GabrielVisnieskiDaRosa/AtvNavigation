import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/Login"
import Age from "../screens/Age"
import React from "react"
import Car from "../screens/Car";
import Result from "../screens/Result";


export function AppRoutes(){

    type RootStackParamList = {
        Login: undefined;
        Age: { name: string }; // Aqui, você define que 'Age' recebe um parâmetro 'name' do tipo string
        Car:{age: string};
        // ... outras rotas

      };
      
    const {Navigator, Screen} = createNativeStackNavigator()
    
    return(
        <Navigator screenOptions={{headerShown : false}}>
            <Screen name="home" component={Login}/>
            <Screen name="age" component={Age}/>
            <Screen name="car" component={Car}/>
            <Screen name="result" component={Result}/>
        </Navigator>
    )
}