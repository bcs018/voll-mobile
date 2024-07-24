import { FormControl, Input } from "native-base"

interface InputProps{
    label? :string,
    placeHolder?: string,
    secureTextEntry?: boolean;
    leftIcon?: React.ReactNode;
}

export function EntradaTexto({label, placeHolder, secureTextEntry=false, ...rest}: InputProps){
    return (
        <FormControl mt={3}>
            <FormControl.Label>{label}</FormControl.Label>
            <Input 
              placeholder={placeHolder}
              size={'lg'}
              w="100%"
              borderRadius={'lg'}
              backgroundColor={'gray.100'}
              shadow={3}
              secureTextEntry={secureTextEntry}
              {...rest}
            />
        </FormControl>
    )
}