import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Select from 'react-select'




const ContainerPaginaCadastro = styled.div`
  display: flex;
  justify-content: center;
  height: 74.5vh;
  background-color: #96D0FF;
`
const ContainerCadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #96D0FF;
  padding: 65px;
  width: 50%;
  height: 50vh;
  margin-top: 10vh;
  
  border: 1px solid #96D0FF;

`
const  options = [
  {value: 1, label: " Cartao de Debito"},
  {value: 2, label: " Cartao de Credito"},
  {value: 3, label: " Boleto "},
  {value: 4, label: " Pix "},
  {value: 5, label: " PayPal "},  
]

const DivDoSelect = styled.div`
  display: flex;
  background-color: #96D0FF;
  justify-content: center;
  justify-content: space-between;

`

const DivAuxiliarDescritiva = styled.div`
  display: block; 
  width: 50%;
  margin-top: 18vh;
  justify-content: space-evenly;
  color: #394F61;
`
const Header1 = styled.h1`
  display: flex;  
  justify-content: center;
  font-size: xx-large;
  font-weight: bold;
  text-align: center;
`
const InformativoCadastro = styled.p`
  display: flex;
  width: 30vw;  
  margin-top: 5vh;
  margin-left: 10vw;
  font-size: large;
  text-align: center;
`

const BotaoEnviar = styled.button`
  border: 2px solid white;
  background-color: white;
  color: #394F61;
  border-radius: 10px;
  padding: 5px;
  width: 200px;
`


export default class Cadastros extends React.Component {
  state = {
    title: "",
    description: "",
    price: 0,
    paymentMethods: [],
    dueDate:""

  }

criaServico = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"
    const body = {
      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price),
      paymentMethods: this.state.paymentMethods,
      dueDate:this.state.dueDate
    }
    console.log(body)
    axios.post(url,body,
      {
        headers: {
          Authorization: "bf6e3327-1416-4669-b4c0-83faf70c7677"
        }
      }
    ).then((resposta) => {
      console.log(resposta)
      // this.setState({  })

    }).catch((erro) => {
      console.log(erro)
      // alert(erro.response.data.error)
    })
  }

  atualizaServico = (event) => {
    this.setState({ title: event.target.value })
  }

  atualizaDescricao = (event) => {
    this.setState({ description: event.target.value })
  }

  // atualizaPagamento = (event) => {
  //   this.setState({ paymentMethods: event.target.value })
  // }

  atualizaValor = (event) => {
    this.setState({  price: event.target.value })
  }

  atualizaData = (event) => {
    this.setState({dueDate: event.target.value})
  }

  confirmaArray = (e) => {
    this.setState ({paymentMethods: Array.isArray(e) ? e.map((x) => x.label) : [],
    })
  }

  render() {
    return (
      <ContainerPaginaCadastro>
        <DivAuxiliarDescritiva className='Div Auxiliar'>
        <Header1>Seja um Ninja em segundos!</Header1>
        <InformativoCadastro>
        Em questão de segundos você pode cadastrar seu serviço, descrevê-lo da maneira que melhor lhe apetecer, informar o valor do mesmo
        e um prazo para expiração da oferta. Por fim, escolha as formas de pagamento e pronto: Você já é um Ninja7
        </InformativoCadastro>               
        </DivAuxiliarDescritiva>
      <ContainerCadastro>
          <input name='Cadastre o Serviço' placeholder='Serviço' onChange={this.atualizaServico}/>
          <input placeholder='Descrição' onChange={this.atualizaDescricao}/>
          <input placeholder='Valor' type="number" onChange={this.atualizaValor}/>
          <input placeholder='Prazo' type="date" onChange={this.atualizaData}/>
          <DivDoSelect>
          <Select 
            isMulti
            options = {options}
            placeholder='Formas de pagamento'
            onChange={this.confirmaArray}
            onSelect={this.confirmaArray}           
          />
           <BotaoEnviar onClick={this.criaServico}>Enviar</BotaoEnviar> 
           </DivDoSelect>
        </ContainerCadastro>
      </ContainerPaginaCadastro>
    )
  }
}
