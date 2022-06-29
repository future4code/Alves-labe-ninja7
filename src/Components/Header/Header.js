import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import styled from 'styled-components'
import { Button } from '@chakra-ui/react'

const Teste = styled.div`
    display: flex;
    height: 80px;
    border: 1px solid black;
    justify-content: space-between;
    
    
`



export default class Header extends React.Component {
  render() {
    return (
      <ChakraProvider>
        <Teste>
        <button>Logo</button>
        <Button colorScheme='blue' onClick={()=>this.props.mudaTela("home")}>Home</Button>
        <Button colorScheme='blue' onClick={()=>this.props.mudaTela("cadastros")}>Seja um ninja</Button>
        </Teste>
      </ChakraProvider>
    )
  }
}
