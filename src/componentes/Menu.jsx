import React from 'react'
import { VStack } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Logo from './imgs/twitter-logo.png'
const Acoes = () => {
  return (
    <VStack>
        <img src={Logo} width='60' height='60'/>
        <Button>Explorar</Button>
        <Button>Notificações</Button>
        <Button>Mensagens</Button>
        <Button>Itens Salvos</Button>
        <Button>Listas</Button>
        <Button>Perfil</Button>
        <Button>Postar</Button>
    </VStack>
  )
}

export default Acoes