import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import styled from 'styled-components'
import { Button } from '@chakra-ui/react'

const Teste = styled.div`
    display: flex;
    justify-content: space-between;
    
`



export default class Header extends React.Component {
  render() {
    return (
      <ChakraProvider>
        <Teste>
        <button>Logo</button>
        <button onClick={()=>this.props.mudaTela("home")}>Home</button>
        <Button colorScheme='blue' onClick={()=>this.props.mudaTela("cadastros")}>Seja um ninja</Button>
        </Teste>
      </ChakraProvider>
    )
  }
}
