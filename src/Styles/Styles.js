import { StyleSheet } from "react-native";
import { Colors } from "./../Styles/Colors"
const styles = StyleSheet.create({
    tarjeta: {
      backgroundColor: Colors.Blanco, 
      borderRadius: 10,
      padding: 20,
      marginBottom: 10,
      borderColor: Colors.Gris,
      borderWidth: 1,
    },
    imagenProducto: {
      height: 200,
      marginBottom: 10,
      resizeMode: "cover",
      borderRadius: 10,
    },
    nombreProducto: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
    },
    descripcionProducto: {
      fontSize: 16,
      marginBottom: 10,
    },
    precioProducto: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 10,
    },
    botonCompra: {
      backgroundColor: Colors.Verde,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: "center",
    },
    textoBoton: {
      color:  Colors.Blanco,
      fontSize: 16,
      fontWeight: "bold",
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      backgroundColor: Colors.GrisClaro,
    },
    titulo: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    listaPuestos: {
      width: "100%",
    },
    nombrePuesto: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    descripcionPuesto: {
      fontSize: 16,
    },
  });  

export default styles;
