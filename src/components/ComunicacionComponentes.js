import React, { Component } from "react";

// componente hijo
const Hijo = ({ mensaje, incrementarContador }) => (
    <>
        <h3>{mensaje}</h3>
        <button onClick={incrementarContador}>+</button>
    </>
)

export default class Padre extends Component{
    state = {
        contador: 0
    }

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render(){
        return(
            <>
                <h2>Comunicacion entre componentes</h2>
                <Hijo mensaje="Mensaje para el hijo 1" />
                <Hijo 
                    incrementarContador = {this.incrementarContador}
                    mensaje="Mensaje para el hijo 2"
                />
                
            </>
        )
    }
}
