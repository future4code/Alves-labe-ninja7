import axios from 'axios'
import React from 'react'

export default class Servicos extends React.Component {
  state = {
    listaDeServicos:[]
  }

  componentDidMount(){
    this.pegarServicos()
  }

  pegarServicos = ()=>{
const url = "https://labeninjas.herokuapp.com/jobs"
axios.get(url,
    {
        headers: {
          Authorization: "bf6e3327-1416-4669-b4c0-83faf70c7677"
        }
      }
    ).then((resposta)=>{
        this.setState({listaDeServicos:resposta.data.jobs})

    }).catch((erro)=>{
        alert(erro.response.data.error)
    })
  }
  
    render() {
const novaListaDeServicos = this.state.listaDeServicos.map((servico)=>{
    return <div key={servico.id}>
        <p>{servico.title}</p>
        <p>{servico.price}</p>
        <p>{servico.paymentMethods}</p>
        <p>{servico.dueDate}</p>
        
    </div>
})

    return (
      <div>
        <h1>Serviços</h1>

          {novaListaDeServicos}
      </div>
      
    )
  }
}
