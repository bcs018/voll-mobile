import {VStack, Image, Text} from 'native-base'
import Logo from './assets/Logo.png'
import { TEMAS } from './estilos/temas';

export default function Login() {
  return (
      <VStack flex={1} alignItems={"center"} padding={10}>
          <Image source={Logo} alt='Logo Voll' />
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"gray.500"}>
            Faça login em sua conta
          </Text>
      </VStack>
  );
}

