import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const ContainerPaginaServicos = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 1fr;
  
`

const ContainerServicos = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  
`
const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`
const CardDoServico = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
`

export default class Servicos extends React.Component {
  state = {
    listaDeServicos: []
  }

  componentDidMount() {
    this.pegarServicos()
  }

  pegarServicos = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"
    axios.get(url,
      {
        headers: {
          Authorization: "bf6e3327-1416-4669-b4c0-83faf70c7677"
        }
      }
    ).then((resposta) => {
      this.setState({ listaDeServicos: resposta.data.jobs })

    }).catch((erro) => {
      alert(erro.response.data.error)
    })
  }

  render() {
    const novaListaDeServicos = this.state.listaDeServicos.map((servico) => {
      return <CardDoServico key={servico.id}>
        <p>{servico.title}</p>
        <p>{servico.price}</p>
        <p>{servico.paymentMethods}</p>
        <p>{servico.dueDate}</p>

      </CardDoServico>
    })

    return (
      <ContainerPaginaServicos>
        <ContainerServicos>
          <h1>Serviços</h1>
          <div>
            <input placeholder='Busca'></input>
            <input placeholder='Valor Mínimo'></input>
            <input placeholder='Valor máximo'></input>
          </div>
          <div>
            {novaListaDeServicos}
          </div>
        </ContainerServicos>
        <ContainerCarrinho>
          <h1>Carrinho</h1>
        </ContainerCarrinho>

      </ContainerPaginaServicos>

    )
  }
}
