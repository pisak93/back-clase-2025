import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,

  },

  titulo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    fontFamily: "monospace",
    marginBottom: 20,
  },

  texto: {
    fontSize: 13,
    color: "#333",
    textAlign: "center",
    fontFamily: "monospace",
    lineHeight: 18,
    marginBottom: 25,
    width: "85%",
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 3,
    width: "85%",
    height: 120,
    textAlignVertical: "top",
    padding: 10,
    fontFamily: "monospace",
    color: "#222",
    marginBottom: 30,
  },

  placeholder: {
    color: "#f47b7b",
  },

  boton: {
    backgroundColor: "#f47b7b",
    paddingVertical: 10,
    paddingHorizontal: 40,
    shadowColor: "#300",
    shadowOffset: { width: -5, height: -5 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
    border:"2px solid #300"
  },

  textoBoton: {
    color: "#000",
    fontFamily: "monospace",
    fontWeight: "600",
    letterSpacing: 2,
  },
  mensajeFuturo:{
     backgroundColor: "#f47b7b",
     padding: 10,
   
    width:"90%",
    minHeight:200
  },
  textoMensaje:{
     color:"#fff",
      fontFamily: "monospace",
     textAlign:"center",
     fontSize:20
  },
  textoMensajeFecha:{
     color:"#fff",
      fontFamily: "monospace",
     textAlign:"center",
     fontSize:15,
     fontStyle:"italic",
     marginBottom:10
  },
    textoRegistro:{
     color:"#f47b7b",
      fontFamily: "monospace",
     textAlign:"center",
  },
   mensajeRegistro:{
     backgroundColor: "#f47b7b",
     padding: 10,
    width:"90%",
    overflowX:"scroll",
  maxHeight:200,

  },
  contenedorFlat:{
  
  }
});

export default estilos;
