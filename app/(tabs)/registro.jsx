import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Text, View } from "react-native";
import estilos from "../../assets/Styles/Styles";
import api from "../../assets/api/axios";


function Registro(){
const[mensaje,setMensaje]=useState([]);

async function traerUltimoMensaje(){
    try{
        const response = await api.get("/mensajes",
            {
                params:{
                    order: "created_at.desc"
                }
            }
        );
           return response.data;
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
    setMensaje(respuesta);
  }

  cargarMensaje();
},[])
);



return(
    <View style={estilos.contenedor}>
        <Text style={estilos.titulo}>Aquí puedes ver todos los mensajes</Text>
         <Text style={estilos.textoRegistro}>Mensaje</Text>


  <FlatList 
  contentContainerStyle={estilos.contenedorFlat}
  style={estilos.mensajeRegistro}
           data={mensaje}
           renderItem={function ({item}){
            return <View> <Text style={estilos.textoMensaje}>{item.mensaje}</Text><Text style={estilos.textoMensajeFecha}>{item.created_at}</Text></View>
           }}
           keyExtractor={function (item){return item.id_producto}}
           
      
           />
 
             

    </View>
)
}

export default Registro;