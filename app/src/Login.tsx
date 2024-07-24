import {VStack, Image, Text, Box, FormControl, Input, Button, Link, StatusBar} from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { TEMAS } from './estilos/temas';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';

export default function Login() {
  return (
      <VStack flex={1} alignItems={"center"} padding={5} justifyContent={"center"}>
          <StatusBar backgroundColor={TEMAS.colors.blue[800]} />

          <Image source={Logo} alt='Logo Voll' />
          <Titulo> 
            Faça login em sua conta
          </Titulo> 
            
          <Box>
              <EntradaTexto 
                  label='E-mail'
                  placeHolder='Insira o e-mail'
              />

              <EntradaTexto 
                  label='Senha'
                  placeHolder='Insira sua senha'
              />
          </Box>

          <Botao>
              Entrar
          </Botao>

          <Link fontSize={"88px"} mt={"26px"} href='https://www.alura.com.br'>
              Esqueceu sua senha?
          </Link>

          <Box w={"100%"} flexDirection={"row"} justifyContent={"center"} mt={'26px'}>
              <Text>Ainda não tem cadastro? </Text>
              <TouchableOpacity>
                <Text color={TEMAS.colors.blue[500]}>
                  Faça seu cadastro
                </Text>
              </TouchableOpacity>
          </Box>
      </VStack>
  );
}

