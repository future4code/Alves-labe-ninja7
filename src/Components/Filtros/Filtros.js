import React from 'react'


export default class Filtros extends React.Component {
    render() {
        return (
            <div>
                <h2>Filtrar por:</h2>
                <p>Valor mínimo:</p>
                <input placeholder="100" value={this.props.precoMin} onChange={this.props.atualizaPrecoMin} />
                <p>Valor máximo:</p>
                <input placeholder="10000" value={this.props.precoMax} onChange={this.props.atualizaPrecoMax} />
                <p>Busca por nome:</p>
                <input value={this.props.busca} placeholder="Pesquisa" onChange={this.props.atualizarBusca} />
            </div>
        )
    }
}


