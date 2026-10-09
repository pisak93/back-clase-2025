import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import estilos from "../../assets/Styles/Styles";
import api from "../../assets/api/axios";


import { router } from "expo-router";
import Boton from "../../assets/componentes/boton";

export default function Index() {
  const [mensaje, setMensaje]= useState("");


  async function enviarMensaje(){

    try{
      const response = await api.post("/mensajes",
        {
          mensaje:mensaje
        }
      );
      setTimeout(function(){
        console.log(response);
  router.push("./futuro");
},500);
    }
    catch(error){
      console.log(error.message);

    }


  }


  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Bienvenido a la máquina del tiempo</Text>
  <Text style={estilos.texto}>
    A través de esta aplicación vamos a poder enviar un mensaje hacia el
    futuro. Escribe tus ideas y envíalas a tu "yo" en el futuro
  </Text>
  <TextInput
    style={estilos.input}
    placeholder="Escribe tu mensaje..."
    placeholderTextColor="#f47b7b"
    value={mensaje}
    onChangeText={setMensaje}
    multiline
  />
     <Boton texto="Enviar" funcion={enviarMensaje}/>
     
    </View>
  );
}
