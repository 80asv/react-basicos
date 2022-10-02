import React, { Component } from "react";

function EstadoAHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}

export default class Estado extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        }

        // mediante un setIterval vamos modificando el valor del state
        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000);
    }

    // cada vez que el estado se modifica se va actualizando el componente
    // se renderiza por cada cambio en el State
    render(){
        return (
            <div>
                <h2>El estado</h2>
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorHijo = {this.state.contador} />
            </div>
        )
    }
}