import React from "react";
import styled from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const ContainerCarrinho = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 100%;
  height: 60vh;
  border-radius: 12px;
  flex-direction: column;
  justify-content: space-between;
  margin: 5%;
  box-shadow: #456075 0px 2px 8px 0px;
  overflow-y: scroll;
`;

const Titulo = styled.div`
  font-size: 25px;
  color: #456075;
  border-bottom: 2px solid #3884c2;
  padding: 10px;
  font-weight: bold;
`;


const Elemento = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 5px 0 5px;
  padding: 10px;
  background-color: #47a7f5;
  color: #ffffff;
  /* width: 80%; */
  border-radius: 10px 10px 0 0;
  font-size: 18px;
  font-weight: bold;
`;

const BotaoRemover = styled.div`
  display: flex;
  background-color: #3884c2;
  color: white;
  /* padding: 10px; */
  margin: 0 5px 0 5px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 0 0 10px 10px;
`;

const Finalizar = styled.div`
  display: flex;
  background-color: #cccccc;
  padding: 10px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 0 0 12px 12px;
  font-size: 20px;
  font-weight: bold;
  color: #456075;
`;

export default class Carrinho extends React.Component {

 finalizaCompra =() => {

  alert("Compra finalizada! Seu ninja está a caminho!")
 }

  render() {
    const listaDoCarrinho = this.props.carrinho.map((produto, indice) => {
      return (
        <div key={indice}>
          <Elemento>
            <p>{produto.title}</p>

            <p>R${produto.price}</p>
          </Elemento>
          <BotaoRemover>
            <button onClick={() => this.props.removerDoCarrinho(produto)}>
              Remover
            </button>
          </BotaoRemover>
        </div>
      );
    });
    console.log(listaDoCarrinho);
    return (
      <ChakraProvider>
        <ContainerCarrinho>
          <Titulo>
            <p>Carrinho</p>
          </Titulo>
          {listaDoCarrinho}
          <Finalizar>
            <p>Total: R$ {this.props.valorTotal}</p>
            <Button onClick={this.finalizaCompra} colorScheme="blue">Finalizar Compra</Button>
          </Finalizar>
        </ContainerCarrinho>
      </ChakraProvider>
    );
  }
}
