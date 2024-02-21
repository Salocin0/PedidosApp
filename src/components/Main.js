import React from "react";
import Inicio from "./Inicio";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductoCard from "./ProductoCard";
import Detalle from "./Detalle";

export default Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Puestos de Comida" component={Inicio} />
      <Stack.Screen name="Productos" component={ProductoCard} />
      <Stack.Screen name="Detalle" component={Detalle} />
    </Stack.Navigator>
  );
};
