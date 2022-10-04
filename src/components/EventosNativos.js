import React, { Component } from "react";

//* componente creado como arrow function
//const Boton = (props) => <button onClick={props.myOnClick}>Boton hecho componente</button>

//* usamos la destructuracion para pasar props de forma implicita
const Boton = ({ myOnClick }) => <button onClick={myOnClick}>Boton hecho componente</button>

export class EventosNativos extends Component{

    handleClick = (e, mensaje) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(mensaje)
    }

    render(){
        return(
            <div>
                <h2>Mas Sobre eventos</h2>

                <button 
                    onClick={
                        (e) => this.handleClick(e, "hola, pasando parametro desde un evento")
                    }>Saludar
                </button>

                {/* Evento personalizado */}
                <Boton
                    myOnClick ={
                        (e) => this.handleClick(e, "hola, Esto es un evento personalizado")
                    }
                />
            </div>
        )
    }
}