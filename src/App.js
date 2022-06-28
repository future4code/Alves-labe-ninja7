import React from 'react'
import Servicos from './Components/Servicos/Servicos'
import Cadastros from './Components/Cadastros/Cadastros'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


export default class App extends React.Component {
  state = {
    tela: "home"
  }

  mudaTela = (telaEscolhida) => {
    this.setState({ tela: telaEscolhida })
  }

  selecionaPagina = () => {
    switch (this.state.tela) {
      case "servicos":
        return <Servicos />
      case "cadastros":
        return <Cadastros />
      case "home":
        return <Home mudaTela={this.mudaTela}/>
      default:
        return <Home mudaTela={this.mudaTela} />;
    }
  }

  render() {


    return (
      <div>
        <Header mudaTela={this.mudaTela} />
        {this.selecionaPagina()}
        <Footer />
      </div>
    )
  }
}
