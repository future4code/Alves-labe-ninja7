import React from 'react'

export default class Carrinho extends React.Component {



  render() {
    const listaDoCarrinho = this.props.carrinho.map((produto,indice)=>{
        return <div key={indice}>
            <p>Nome do serviço: {produto.title}</p>
            <p>Preço: {produto.price}</p>
            <button onClick={()=>this.props.removerDoCarrinho(produto)}>Remover</button>

        </div>
    })
    return (
      <div>
        <h1>Carrinho:</h1>
        {listaDoCarrinho}
        <p>Valor total: {this.props.valorTotal}</p>
      </div>
    )
  }
}

