import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'








export default class Home extends React.Component {
  
      
  render() {
    return (
      <ChakraProvider>
        <div>
            <p>sdkfskldfjsndfjn</p>
        </div>
        <div>
            <Button colorScheme='blue' onClick={()=>this.props.mudaTela("servicos")}>Contrate um ninja</Button>
        </div>
      </ChakraProvider>
    )
  }
}
