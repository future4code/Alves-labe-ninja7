import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Select from 'react-select'

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
const  options = [
  {value: 1, label: " Cartao de Debito"},
  {value: 2, label: " Cartao de Credito"},
  {value: 3, label: " Boleto "},
  {value: 4, label: " Pix "},
  {value: 5, label: " PayPal "},  
]


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
        <ContainerCadastro>
          <input placeholder='Serviço' onChange={this.atualizaServico}/>
          <input placeholder='Descrição' onChange={this.atualizaDescricao}/>
          <input placeholder='Valor' type="number" onChange={this.atualizaValor}/>
          <input placeholder='Prazo' type="date" onChange={this.atualizaData}/>
         
          <Select 
            isMulti
            options = {options}
            placeholder='Formas de pagamento'
            onChange={this.confirmaArray}
            onSelect={this.confirmaArray}           
          />
           <button onClick={this.criaServico}>Enviar</button>  
          
          {/* <fieldset>
            <legend>Método de pagamento:</legend>
            <div>
              <input type="checkbox" value={this.state.paymentMethods} className="boleto" onChange={this.atualizaPagamento}/>
              <label htmlFor="boleto"> Boleto </label>
            </div>
            <div>
              <input type="checkbox" value={this.state.paymentMethods} onClick={this.atualizaPagamento} />
              <label > Pix </label>
            </div>
            <div>
              <input type="checkbox" value={this.state.paymentMethods} onClick={this.atualizaPagamento} />
              <label > PayPal </label>
            </div>
            <div>
              <input type="checkbox" value={this.state.paymentMethods} onClick={this.atualizaPagamento} />
              <label > Cartão de Crédito </label>
            </div>
            <div>
              <input type="checkbox" value={this.state.paymentMethods} onClick={this.atualizaPagamento} />
              <label > Cartão de Débito </label>
            </div>
            
          </fieldset> */}
        </ContainerCadastro>
      </ContainerPaginaCadastro>
    )
  }
}
