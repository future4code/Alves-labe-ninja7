import React from 'react'

export default class Ordenacao extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <select value={this.props.ordem} onChange={this.props.atualizaOrdem}>
                        <option value={1}>Crescente</option>
                        <option value={-1}>Decrescente</option>
                    </select>
                    <select
                        value={this.props.escolha}
                        onChange={this.props.atualizaEscolha}
                    >
                        <option  value="title">Título</option>
                        <option  value="price">Preço</option>
                        <option  value="dueDate">Prazo</option>
                    </select>
                </div>
            </div>

        )
    }
}
