import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import Filtros from '../Filtros/Filtros'
import Ordenacao from '../Ordenação/Ordenacao'
import Carrinho from '../Carrinho/Carrinho'


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
// const CardDoServico = styled.div`
//   display: flex;
//   flex-direction: column;
//   border: 1px solid black;
//   width: 20%;
// `
const CardDoServico = styled.div`
  width: 300px;
  height: 200px;
  perspective: 1000px;
`
const CardTodo = styled.div`
border: 1px solid black;
width: 100%;
height: 100%;
position: relative;
transition: transform 0.8s;
transform-style: preserve-3d;
:hover {
transform: rotateY(180deg)
}
`
const Frente = styled.div`
color: red;
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
`
const Verso = styled.div`
color: green;
transform: rotateY(180deg);
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
`


export default class Servicos extends React.Component {
  state = {
    listaDeServicos: [],
    busca: "",
    precoMin: "",
    precoMax: "",
    ordem: 1,
    carrinho: [],
    escolha: "title",
    valorTotal: 0,
    servicoPego: false
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
        this.setState({ listaDeServicos: resposta.data.jobs })
      


    }).catch((erro) => {
      alert(erro.response.data.error)
    })
  }

  adicionaAoCarrinho = (elemento) => {
    
    this.setState({carrinho: [elemento,...this.state.carrinho]})
    this.setState({valorTotal: this.state.valorTotal + elemento.price})
    alert("Produto adicionado ao carrinho!")
  //   const url = `https://labeninjas.herokuapp.com/jobs/${elemento.id}`
  //   const body = {
  //     taken: true
  //   }
  //   axios.post(url,body,
  //     {
  //       headers: {
  //         Authorization: "bf6e3327-1416-4669-b4c0-83faf70c7677"
  //       }
  //     }
  //   ).then((resposta) => {
  //     this.setState({ listaDeServicos: resposta.data.jobs })

  //   }).catch((erro) => {
  //     alert(erro.response.data.error)
  //   })
  //  this.pegarServicos()
    
  }

  removerDoCarrinho = (produto) => {
  
    const novoCarrinho = this.state.carrinho.filter((item)=>{
      if (item.id !== produto.id){
        return item
      } else {
        return false
      }
    })
    this.setState({carrinho:novoCarrinho})
    this.setState({valorTotal:this.state.valorTotal - produto.price})
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
        <CardTodo>
          <Frente>
      <p>{elemento.title}</p>
      <p>{elemento.price}</p>
      <p>{elemento.dueDate.split("T")[0]}</p>

      </Frente>
      <Verso>
      <p>{elemento.title}</p>
      <p>{elemento.price}</p>
      <p>{elemento.dueDate.split("T")[0]}</p>
      <p>{elemento.paymentMethods}</p>
      <p>{elemento.description}</p>
      <button onClick={()=>{this.adicionaAoCarrinho(elemento)}}>Adicionar ao Carrinho</button>
      </Verso>
      </CardTodo>
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
         <Carrinho carrinho={this.state.carrinho}
         valorTotal={this.state.valorTotal}
         removerDoCarrinho={this.removerDoCarrinho}/>
        </ContainerCarrinho>

      </ContainerPaginaServicos>

    )
  }
}
