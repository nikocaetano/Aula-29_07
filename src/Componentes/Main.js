import React, { Component } from "react";

export default class ToDo extends Component {
    state = {
        compras: '',
        listaCompras: []
    }

    handleChange = (e) => {
        this.setState({
            compras: e.target.value
        });
    };

    handleClick = () => {
        this.setState({
            listaCompras: this.state.listaCompras.concat({
                compras:this.state.compras
            })
        })
    }

    render() {
        return (
            <>
                <h1>Vamos fazer uma lista de tarefas</h1>
                <div>
                    <input onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Enviar</button>
                    {this.state.listaCompras.map((item) => (
                        <ul>
                            <li>{item.compras}</li>
                        </ul>
                    )

                    )}
                </div>
            </>
        )
    }
}