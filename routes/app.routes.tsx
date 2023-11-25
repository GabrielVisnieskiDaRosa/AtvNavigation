import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/Login"
import Age from "../screens/Age"

export function AppRoutes(){
    
    const {Navigator, Screen} = createNativeStackNavigator()
    
    return(
        <Navigator screenOptions={{headerShown : false}}>
            <Screen name="home" component={Login}/>
            <Screen name="age" component={Age}/>
        </Navigator>
    )
}