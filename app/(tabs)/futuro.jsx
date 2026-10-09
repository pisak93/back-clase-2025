import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Text, View } from "react-native";
import estilos from "../../assets/Styles/Styles";
import api from "../../assets/api/axios";


function Futuro(){
const[mensaje,setMensaje]=useState("");

async function traerUltimoMensaje(){
    try{
        const response = await api.get("/mensajes",
            {
                params:{
                    order: "created_at.desc",
                    limit: 1
                }
            }
        );
           return response.data[0];
    }
    catch(error){
 console.log("Error al traer el mensaje:", error.message);
    return null;
    }
}
useFocusEffect(
useCallback(function(){
  async function cargarMensaje() {
    const respuesta = await traerUltimoMensaje();
    console.log(respuesta);
    setMensaje(respuesta.mensaje);
  }

  cargarMensaje();
},[])
);



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