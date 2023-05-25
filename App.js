import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image } from 'react-native';
import FedeView from './src/components/FedeView';
import BrenView from './src/components/BrenView';
import HomeScreen from './src/components/HomeScreen';
import ContactosView from './src/components/secundarios/Contactos/ContactosView';
import ListaDifusionView from './src/components/secundarios/ListaDifusionView';
import InventarioView from './src/components/secundarios/InventarioView';
import PresupuestosView from './src/components/secundarios/PresupuestosView';
import EstadisticasView from './src/components/secundarios/EstadisticasView';
import GruposView from './src/components/secundarios/GruposView';
import Home from './src/resources/home.png'

const Stack = createStackNavigator();

const mostarIconoHome = {
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image source={Home} style={{ width: 25, height: 25, marginRight: 25 }} />
    </TouchableOpacity>
  ),
};

const ocultarIconoHome = {
  headerRight: null,
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={mostarIconoHome}>
      <Stack.Screen name="Inicio" component={HomeScreen} options={ocultarIconoHome} />
        <Stack.Screen name="Fede" component={FedeView} />
        <Stack.Screen name="Bren" component={BrenView} />
        <Stack.Screen name="Contactos" component={ContactosView} />
        <Stack.Screen name="GruposContactos" component={GruposView} />
        <Stack.Screen name="Inventario" component={InventarioView} />
        <Stack.Screen name="Presupuestos" component={PresupuestosView} />
        <Stack.Screen name="Estadisticas" component={EstadisticasView} />
        <Stack.Screen name="ListaDifusion" component={ListaDifusionView} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

