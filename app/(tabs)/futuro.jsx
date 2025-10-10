import { useEffect, useState } from "react";
import { View,Text } from "react-native";
import estilos from "../../assets/Styles/Styles";
import axios from "axios";


function Futuro(){
const[mensaje,setMensaje]=useState("vacio");

useEffect(function(){
    leerMensajes();
},[]);

function leerMensajes(){

   axios.get("http://192.168.40.15:5000/recibir")
    .then(function(res){
        if(res.data.status){
            console.log(res.data.datos);
            setMensaje(res.data.datos.mensaje);
        }

    })
    .catch(function(err){

        console.log(err);
        alert("Error al traer los mensajes");
    })
}

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