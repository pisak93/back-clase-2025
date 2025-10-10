import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import estilos from "../../assets/Styles/Styles";

import axios from "axios";
import { router } from "expo-router";
import Boton from "../../assets/componentes/boton";

export default function Index() {
  const [mensaje, setMensaje]= useState("");


  function enviarMensaje(){
console.log(mensaje);

const Mensaje ={
  mensaje:mensaje
}


axios.post("http://192.168.40.15:5000/subir",Mensaje)
.then(function(res){
alert("Mensaje Enviado con Éxito");
setTimeout(function(){
  router.replace("./futuro");
},1000);
})
.catch(function(err){
console.log(err);
alert("Error al enviar el mensaje");
})

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
