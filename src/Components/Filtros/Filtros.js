import React from 'react'
import styled from 'styled-components'
import { ChakraProvider, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'

const ContainerFiltros = styled.div`
display: grid;
grid-template-columns: 1fr ;
grid-template-rows: 0.2fr 1fr;
justify-content: center;
text-align: center;
padding: 10px;
`
const FiltrosValorBusca = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
grid-template-rows: 1fr ;
column-gap: 5px;
`
const Filtro = styled.div`
display: grid;
grid-template-columns: 1fr ;
grid-template-rows: 1fr 1fr;
border: 1px solid #C8D2BD;
border-radius:10px;
padding: 10px;
`


export default class Filtros extends React.Component {
    render() {
        return (
            <ChakraProvider>
                <ContainerFiltros>
                    <Text fontSize='lg'  fontFamily="cursive" color='gray.600'>Filtrar por:</Text>
                    <FiltrosValorBusca>
                        <Filtro>
                            <Text fontSize='md'  fontFamily="cursive" color='blue.300'>Valor mínimo:</Text>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color='gray.300'
                                    fontSize='1.2em'
                                    children='$'
                                />
                                <Input htmlSize={1} placeholder="" value={this.props.precoMin} onChange={this.props.atualizaPrecoMin} />
                            </InputGroup>
                        </Filtro>
                        <Filtro>
                            <Text fontSize='md'  fontFamily="cursive" color='blue.300'>Valor máximo:</Text>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color='gray.300'
                                    fontSize='1.2em'
                                    children='$'
                                />
                                <Input placeholder="" value={this.props.precoMax} onChange={this.props.atualizaPrecoMax} />
                            </InputGroup>
                        </Filtro>
                        <Filtro>
                                <Text fontSize='md'  fontFamily="cursive" color='blue.300'>Busca por nome:</Text>
                            <InputGroup>
                                <Input value={this.props.busca} placeholder="Pesquisa" onChange={this.props.atualizarBusca} />
                            </InputGroup>
                        </Filtro>
                    </FiltrosValorBusca>
                </ContainerFiltros>
            </ChakraProvider>
        )
    }
}


