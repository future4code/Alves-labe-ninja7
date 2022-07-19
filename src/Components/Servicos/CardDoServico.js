import React from 'react'
import styled from 'styled-components'
import { Button } from '@chakra-ui/react'
import { ChakraProvider, Badge, Text, Spacer, Box } from '@chakra-ui/react'



const Teste = styled.div`
  width: 32%;
  height: 450px;
  perspective: 1000px;
  padding: 10px;
  color: #4299E1 ;
  
`
const CardTodo = styled.div`

border-radius: 10px;
background-color: #cccccc;
width: 100%;
height: 100%;
position: relative;
transition: transform 1s;
transform-style: preserve-3d;
text-align: center;
:hover {
transform: rotateY(180deg)

}
`

const Frente = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
justify-items: center;
align-items: center;
padding: 50px;
text-align: center;


/* color: #456075; */
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
`
const Verso = styled.div`

display: grid;
grid-template-columns: 1fr;
grid-template-rows: 0.5fr 0.2fr 0.2fr 1.2fr 0.8fr 0.2fr;
/* grid-template-rows: repeat(6, 1fr); */
justify-items: center;
align-items: center;
padding: 20px;
text-align: center;
padding-top: 10px;

transform: rotateY(180deg);
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
`
const ContainerPagamento = styled.div`
display: flex;
flex-direction: column;
padding: 8px;
min-height: 100px;
width: 200px;
    border: 1px solid #4299E1;
    border-radius: 10px;
    box-shadow:5px 5px 10px #4299E1;
`



export default class CardDoServico extends React.Component {
    render() {
        const listaDePagamentos = this.props.elemento.paymentMethods.map((metodo) => {
            return    (
            <Badge borderRadius='full' px='2' colorScheme='blue'>
                <Text fontSize='sm' >{metodo}</Text>
            </Badge>)
           
        })

        return (
            <ChakraProvider>
                <Teste >
                    <CardTodo>
                        <Frente>
                            <Text fontSize='lg' fontWeight='bold' color='gray.600' >{this.props.elemento.title.toUpperCase()}</Text>


                            <Badge borderRadius='full' px='2' colorScheme='blue'>
                                <Text fontSize='xl' color='gray.600'>Preço: R$ {this.props.elemento.price} </Text>
                            </Badge>
                            <Text fontSize='lg' fontWeight='bold' color='gray.600'>DATA: {this.props.elemento.dueDate.split("T")[0]}</Text>
                        </Frente>
                        <Verso>


                            <Text fontSize='lg' color='blue.500' >{this.props.elemento.title.toUpperCase()}</Text>

                            <Text fontSize='md' color='blue.500' >Preço: R$ {this.props.elemento.price}</Text>
                            <Text fontSize='md' color='blue.500' >Data: {this.props.elemento.dueDate.split("T")[0]}</Text>
                            <ContainerPagamento>
                            <Box>
                            <Text fontSize='md' color='blue.500' >Formas de pagamento:</Text>
                            </Box>
                            <Spacer/>
                            <Box>
                                {listaDePagamentos}
                                </Box>
                            </ContainerPagamento>
                            <Text fontSize='md' color='blue.500' >Descrição do Serviço: {this.props.elemento.description}</Text>

                            <Button size='sm' onClick={() => { this.props.adicionaAoCarrinho(this.props.elemento) }}>Adicionar ao Carrinho</Button>

                        </Verso>
                    </CardTodo>
                </Teste>
            </ChakraProvider>
        )
    }
}
