/*import React, { Component } from "react";

export default class Filter extends Component{
  state = {
    pessoas: [
      {nome: 'Nikolas', idade: 24},
      {nome: 'Patricia', idade: 47},
      {nome: 'Bruno', idade: 25},
      {nome: 'Arthur', idade: 25},
      {nome: 'Marcus', idade: 12},
      {nome: 'Luan', idade: 11}
    ], 
    deMaior: []
  };

  maiores = () => {
    this.setState({
      deMaior: this.state.pessoas.filter((element) => {
        return element.idade >18
      })
    })
  }
  
  render(){
    return(
      <div>
        <h1>Vamos fazer um filter</h1>
        {this.state.pessoas.map((item) => (
          <ul>
            <li>Meu nome é {item.nome}</li>
            <li>tenho {item.idade} anos</li>
          </ul>
        ))}
        <button onClick={this.maiores}>Filtrar</button>
        {this.state.deMaior.map((item) => (
          <ul>
            <li>Meu nome é {item.nome}</li>
            <li>tenho {item.idade} anos</li>
          </ul>
        ))}
      </div>
    )
  }
}*/

/*map é um metodo de array que percorre um array e retorna um valor dentro do array*/

import React, { Component } from "react";
import Main from "./Componentes/Main.js"

export default class ToDo extends Component {
  render() {
    return (
      <>
        <Main />
      </>
    )
  }
}