import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import Filtros from '../Filtros/Filtros'
import Ordenacao from '../Ordenação/Ordenacao'

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
    listaDeServicos: [],
    busca: "",
    precoMin: "",
    precoMax: "",
    ordem: 1,
    carrinho: [],
    escolha: "title"
  }



  componentDidMount() {
    this.pegarServicos()
  }

  atualizaOrdem = (event) => {
    this.setState({ ordem: event.target.value })
  }
  atualizarBusca = (event) => {
    this.setState({ busca: event.target.value })
  }
  atualizaPrecoMin = (event) => {
    this.setState({ precoMin: event.target.value })
  }
  atualizaPrecoMax = (event) => {
    this.setState({ precoMax: event.target.value })
  }

  atualizaEscolha = (ev) => {
    this.setState({
      escolha: ev.target.value,
    });
  };


  pegarServicos = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"
    axios.get(url,
      {
        headers: {
          Authorization: "bf6e3327-1416-4669-b4c0-83faf70c7677"
        }
      }
    ).then((resposta) => {
      console.log(resposta)
      this.setState({ listaDeServicos: resposta.data.jobs })

    }).catch((erro) => {
      alert(erro.response.data.error)
    })
  }

  render() {
   
    
    const novaListaDeServicos = this.state.listaDeServicos
      .filter(elemento =>{
        return this.state.precoMin === "" || elemento.price >= this.state.precoMin
      })
      .filter(elemento =>{
        return this.state.precoMax === "" || elemento.price <= this.state.precoMax
      })
      .filter(elemento =>{
        return elemento.title.toLowerCase().includes(this.state.busca.toLowerCase())
      })
      .sort((servicoAtual, proximoServico) => {
        switch (this.state.escolha) {
          case "title":
            return (
              this.state.ordem *
              servicoAtual.title.localeCompare(proximoServico.title)
            );
          case "dueDate":
            return (
              this.state.ordem *
              (new Date(servicoAtual.dueDate).getTime() -
                new Date(proximoServico.dueDate).getTime())
            );
          default:
            return this.state.ordem * (servicoAtual.price - proximoServico.price);
        }
      })
      .map(elemento =>{
      return <CardDoServico key={elemento.id}>
      <p>{elemento.title}</p>
      <p>{elemento.price}</p>
      <p>{elemento.paymentMethods}</p>
      <p>{elemento.dueDate}</p>

    </CardDoServico>
      })
    
    return (
      <ContainerPaginaServicos>
        <ContainerServicos>
          <h1>Serviços</h1>
          <div>
            <Filtros
              busca={this.state.busca}
              atualizarBusca={this.atualizarBusca}
              precoMin={this.state.precoMin}
              atualizaPrecoMin={this.atualizaPrecoMin}
              precoMax={this.state.precoMax}
              atualizaPrecoMax={this.atualizaPrecoMax} 
             />
            <Ordenacao atualizaOrdem={this.atualizaOrdem}
              ordem={this.state.ordem}
              escolha={this.state.escolha}
              atualizaEscolha={this.atualizaEscolha}

              />
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
