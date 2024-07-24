import { Button, IButtonProps } from "native-base"
import { TEMAS } from "../estilos/temas"

interface BotaoProps extends IButtonProps{
    children: React.ReactNode,
    autoSize?: boolean,
    color?: string
}

export function Botao({children, autoSize=false, color, ...rest}: BotaoProps){
    return (
        <Button
            w={autoSize ? 'auto' : '100%'}
            bg={color || TEMAS.colors.blue[800]}
            mt={10}
            borderRadius={"lg"}
            _text={{ color: '#fff' }}
            {...rest}
          >
              {children}
          </Button>
    )
}