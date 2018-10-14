/*
Primeiro App criado com ReactJs

Nome: Contador
Autor: Thiago Novato
Data: 14/10/2018

*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      contador: 0
    }
  }

  // Método que soma
  somar = () => {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  // Método que subtrai
  subtrair = () => {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  // Método que limpa (zera)
  limpar = () => {
    this.setState({
      contador: 0
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Contador</h2>
        <h1>{this.state.contador}</h1>
        <button onClick={this.somar}> + </button>
        <button onClick={this.subtrair}> - </button>
        <button onClick={this.limpar}> Limpar </button>
      </div>
    );
  }
}

export default App;
