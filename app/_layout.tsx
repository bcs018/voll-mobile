import { Image, StyleSheet, Platform } from 'react-native';
import {NativeBaseProvider, StatusBar} from 'native-base'
import {TEMAS} from './src/estilos/temas'
import Login from './src/Login';

export default function HomeScreen() {
  return (
    <NativeBaseProvider>
        <StatusBar backgroundColor={TEMAS.colors.blue[800]} />

        <Login></Login>      
    </NativeBaseProvider>
  );
}
