import {VStack, Image, Text, Box, FormControl, Input, Button, Link, StatusBar, Checkbox, ScrollView} from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { TEMAS } from './estilos/temas';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { useState } from 'react';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro() {

  const [numSecao, setNumSecao] = useState(0);

  function avancarSecao() {
    if (numSecao < secoes.length-1)
      setNumSecao(numSecao+1)
  }

  function voltarSecao() {
    if (numSecao > 0)
      setNumSecao(numSecao-1)
  }

  return (
      <ScrollView flex={1} padding={5}>
          <StatusBar backgroundColor={TEMAS.colors.blue[800]} />

          <Image source={Logo} alt='Logo Voll' alignSelf={'center'} mt={10} />

          <Titulo textAlign={'center'}> 
            {secoes[numSecao].titulo}
          </Titulo> 
            
          <Box>
              {
                secoes[numSecao].entradatexto.map(entrada => {
                  return <EntradaTexto label={entrada.label} placeHolder={entrada.placeholder} secureTextEntry={entrada.secureTextEntry} key={entrada.id} />
                })
              }
          </Box>

          <Box>
              {secoes[numSecao].checkbox.length > 0 && 
                <Text color={TEMAS.colors.blue[800]} fontWeight={'bold'} fontSize={'md'} mt={2} mb={2}>Selecione o plano:</Text>
              }

              {
                secoes[numSecao].checkbox.map(checkbox => {
                  return <Checkbox value={checkbox.value} key={checkbox.id}>{checkbox.value}</Checkbox>
                })
              }
          </Box>

          {numSecao > 0 &&
            <Botao onPress={() => voltarSecao()} bgColor="gray.400">
              Voltar
            </Botao>
          }

          <Botao onPress={() => avancarSecao()} mt={4} mb={20}>
              Avançar
          </Botao>

          
      </ScrollView>
  );
}

