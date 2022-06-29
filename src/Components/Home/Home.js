import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import styled from 'styled-components'


const ContainerHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  border: 1px solid black;
  height: 100vh;
  
`







export default class Home extends React.Component {


  render() {
    return (
      <ChakraProvider>
        <ContainerHome>
          <div>
            <p>sdkfskldfjsndfjndfgdfgdfg</p>
          </div>
          <div>
            <Button colorScheme='blue' onClick={() => this.props.mudaTela("servicos")}>Contrate um ninja</Button>
          </div>
        </ContainerHome>
      </ChakraProvider>
    )
  }
}
