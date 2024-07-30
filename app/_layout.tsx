import { Image, StyleSheet, Platform } from 'react-native';
import {NativeBaseProvider, StatusBar} from 'native-base'
import {TEMAS} from './src/estilos/temas'
import Rotas from './src/Rotas'
// import Login from './src/Login';
import {NavigationContainer} from "@react-navigation/native";

export default function HomeScreen() {
  return (

    <NativeBaseProvider>
        <StatusBar backgroundColor={TEMAS.colors.blue[800]} />

        <Rotas></Rotas>      
    </NativeBaseProvider>

  );
}
