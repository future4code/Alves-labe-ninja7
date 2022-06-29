import React from 'react'
import styled from 'styled-components'

const ContainerPaginaCadastro = styled.div`
  display: flex;
  justify-content: center;
`
const ContainerCadastro = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  border: 1px solid black;

`





export default class Cadastros extends React.Component {
  render() {
    return (
      <ContainerPaginaCadastro>
        <ContainerCadastro>
        <input placeholder='Nome'></input>
        <input placeholder='Descrição'></input>
        <input placeholder='Produto'></input>
        <input placeholder='Prazo'></input>
        <select>
          <option value="pix">Pix</option>
          <option value="cartao-credito">Cartão de Crédito</option>
        </select>
        </ContainerCadastro>
      </ContainerPaginaCadastro>
    )
  }
}
