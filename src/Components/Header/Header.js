import React from 'react'
import styled from 'styled-components'
import letreiro from "./imagens/letreiro.png"
import ninja from "./imagens/ninjag.gif"
import { Button } from '@chakra-ui/react'
import bola from "./imagens/bola.gif"


const Logo = styled.img`
width: 100%;
height: 100px;
padding: 0;
border: none
`
const ContainerBotao = styled.div`

margin: 40px 100px 0  0;
display: flex;
justify-content: space-evenly;
padding: 20px;
`


const Butao = styled.button`
background-color: white;
border: none;
:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);}
`

const Teste = styled.div`
    width: 100%;
    height:100px;
    display: flex;
    justify-content: space-between;

`
const Letreiro = styled.img`
margin-right: 3px;
`
const ContainerLogo = styled.div`
display: flex
`
const Bola = styled.div`
color: white;
`

export default class Header extends React.Component {
  render() {
    return (
      
        <Teste>
        <ContainerLogo>
        <Butao onClick={()=>this.props.mudaTela("home")}><Logo src={ninja} /></Butao>
        <Letreiro src={letreiro} />
        </ContainerLogo>
        <ContainerBotao>
        <Button colorScheme='blue'  onClick={()=>this.props.mudaTela("cadastros")}>Seja um ninja</Button> 
        <Bola>...</Bola>
        <Button colorScheme='blue' onClick={() => this.props.mudaTela("servicos")}>Contrate um ninja</Button>
        </ContainerBotao>
     
        </Teste>
      
    )
  }
}
