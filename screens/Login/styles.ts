import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container :{
        flex: 1,
    },

    containerTittle:{
        marginTop: 100,
        height: 450,
        flexDirection:"column",

    },

    tittle:{
        fontSize: 40,
        color:"#FFF",
        fontWeight:"bold",
        marginLeft: 100
    },

    textUser:{
        marginTop:150,
        marginLeft:35,
        color:"#FFF",
        fontSize:25
    },
    input:{
        backgroundColor:"#FFF",
        width:350,
        height: 60,
        borderRadius:10,
        marginLeft:35,
        marginTop: 10,
        fontSize:25
    },

    textPassword:{
        marginTop:5,
        color:"#FFF",
        fontSize:25,
        marginLeft:35,
    },

    button:{
        backgroundColor:"#01633D",
        width:350,
        height: 60,
        borderRadius:10,
        marginLeft:35

    },

    textButton:{
        color:"#FFF",
        textAlign:"center",
        fontSize:30,
        marginTop:7,
        fontWeight:"bold"
    },
    textButtonRP:{
        color:"#5987CC",
        fontSize:15
    },
    buttonRP:{
        marginTop:70,
        marginLeft:135
    }
    

})