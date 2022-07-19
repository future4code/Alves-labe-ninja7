import React from 'react'
import styled from 'styled-components'
import { ChakraProvider, Select } from '@chakra-ui/react'


const ContainerSelect = styled.div`
display: flex;
flex-direction: column;
width: 30%;
justify-content: center;
align-content: center;


`

export default class Ordenacao extends React.Component {
    render() {
        return (
            <ChakraProvider>
                <ContainerSelect>
                    <Select value={this.props.ordem} onChange={this.props.atualizaOrdem}>
                        <option value={1}>Crescente</option>
                        <option value={-1}>Decrescente</option>
                    </Select>
                    <Select
                        value={this.props.escolha}
                        onChange={this.props.atualizaEscolha}
                    >
                        <option  value="title">Título</option>
                        <option  value="price">Preço</option>
                        <option  value="dueDate">Prazo</option>
                    </Select>
                </ContainerSelect>
            </ChakraProvider>

        )
    }
}
