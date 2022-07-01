import React from 'react'
import styled from 'styled-components'
import labenu from "./imagens/labenu2.png"
import logo from "./imagens/logit.png"
import sete from "./imagens/sete.gif"
import alves from "./imagens/alves.png"



const FooterSt = styled.div`
 border-style: solid lightgray;
  border-bottom-width: 0;
  border-top-width: 10px;
  border-right-width: 0;
  border-left-width: 0;
display: flex;
justify-content: space-around;
background-color: #96D0FF;
height: 100%;
margin-bottom: 0;
`
const SigaNos = styled.div`
color: #4B6880;
align-items: center;
display: flex;
flex-direction: column;
`
const Equipe7 = styled.div`
color: #4B6880;
align-items: center;
display: flex;
flex-direction: column
`
const Contato = styled.div`
color: #4B6880;
display: flex;
justify-content: space-between
`

const Labenu = styled.img`
width: 40px;
display: flex;
justify-content: center;
`

const Lab = styled.a`
margin-left: 20px
`

const Sete = styled.img`
margin-top: 5px;
width: 150px;
`
const Git = styled.img`
width: 40px;
padding: 5px;
`
const Endereco  = styled.h6`
text-align: right
`
const ContainerGit = styled.div `
margin-top: 5px;
display: flex;
`


export default class Footer extends React.Component {
  render() {
    return (
        
      <FooterSt>
      
      <SigaNos>
          <h4>
              Encontre-nos no Github
          </h4>
          <ContainerGit>
          <a href={'https://github.com/ilenaacioli'}>
          <Git src={logo} />
          </a>
          <a href={'https://github.com/laisrm'}>
          <Git src={logo} />
          </a>
          <a href={'https://github.com/leonardojcsl'}>
          <Git src={logo} />
          </a>
          <a href={'https://github.com/gabrielwenchenck'}>
          <Git src={logo} />
          </a>
          </ContainerGit>
      </SigaNos>
      <Equipe7>
          <h4>
              Projetado e desenvolvido pela equipe 7
          </h4>
          <a href={'https://github.com/future4code/Alves-labe-ninja7'}>
          <Sete src={alves} />
          </a>
      </Equipe7>
      <Contato>
          <Endereco>
              Rua Pais Leme, 215 <br />
              Pinheiros SP <br/>
              CEP: 05424-150 
              
          </Endereco> 
          <Lab href={'https://www.labenu.com.br'}>
          <Labenu src={labenu} />
          </Lab>
      </Contato>
      
  </FooterSt>
    )
  }
}
