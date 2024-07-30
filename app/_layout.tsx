import { Image, StyleSheet, Platform } from 'react-native';
import {NativeBaseProvider, StatusBar} from 'native-base'
import {TEMAS} from './src/estilos/temas'
import Cadastro from './src/Cadastro';
// import Login from './src/Login';

export default function HomeScreen() {
  return (
    <NativeBaseProvider>
        <StatusBar backgroundColor={TEMAS.colors.blue[800]} />

        <Cadastro></Cadastro>      
    </NativeBaseProvider>
  );
}
