import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import estilos from "../../assets/Styles/Styles";



function Futuro(){
const[mensaje,setMensaje]=useState("");

const {mensaje:mensajeParam} = useLocalSearchParams();

useEffect(function(){
    if(mensajeParam){
        setMensaje(mensajeParam);
    }
},[mensajeParam]);


return(
    <View style={estilos.contenedor}>
        <Text style={estilos.titulo}>Tu yo del pasado te dejó este mensaje</Text>
        <View style={estilos.mensajeFuturo}>
 <Text style={estilos.textoMensaje}>Mensaje</Text>
              <Text style={estilos.textoMensaje}>{mensaje}</Text>
        </View>
             

    </View>
)
}

export default Futuro;