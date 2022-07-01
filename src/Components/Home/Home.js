import React from 'react'
import styled from 'styled-components'
import home from "./imagens/home.gif"




const ContainerHome = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 70vh;

`
const Container1 = styled.div`
color: #4B6880;
width: 40%;
`
const Container2 = styled.div`

color:white;


`
  
const GifBody = styled.img`
width: 400px
`
const Titulo = styled.h1`
color: #C41310;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: x-large;
`

const P = styled.p`
font-size: large;
`

export default class Home extends React.Component {


  render() {
    return (
      
        <ContainerHome>
     
         <Container1>
                        <Titulo><strong>Precisou, clicou, contratou!</strong></Titulo> <br/>
                        <P>                            
A <strong>Ninja7</strong> é líder no mercado de <strong>oferta e procura de serviços</strong> terceirizados. <br/>Nossos métodos se destacam desde o <strong>cadastro
de um Ninja</strong> até a <strong>finalização</strong> e <strong>acordo</strong> entre as partes. <br/> Nossa base de dados é pioneira em <strong>facilitar a experiência do usuário </strong>
 que já está cansado de lidar com sistemas de recompensas confusos e inacessíveis. <br/>Com a Ninja7, a <strong>segurança</strong> do seu serviço
e das suas demandas é garantida!
                        </P>
                    </Container1>
          
          <Container2>
         
            <GifBody src={home} />
          </Container2>
         
        </ContainerHome>
      
    )
  }
}
