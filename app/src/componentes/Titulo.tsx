import {Text, ITextProps} from 'native-base';
import { ReactNode } from 'react';

// Essa interface serve para q o type script aceite o children como props 
// pois esse children é o texto que ira aparecer,
// o ...rest serve para adicionar qualquer propriedade que passar de personalização 
// como color, fontSize etc..

interface TituloProps extends ITextProps {
    children: ReactNode
}

export function Titulo({children, ...rest}: TituloProps){
    return (
        <Text 
            fontSize={"2xl"} 
            fontWeight={"bold"} 
            color={"gray.500"}
            mt={5}
            mb={10}
            {...rest}
          >
            {children}
          </Text>

    )
}