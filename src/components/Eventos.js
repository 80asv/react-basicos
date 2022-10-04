import React, { Component } from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        }

        //* le declaramos una propiedad a this llamado sumar y le enlaza el elementos this
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    // * estas funciones alteran el state incrementando o disminuyendo un numero
    sumar(){
        console.log('sumando');
        console.log(this);
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar(){
        console.log('restando');
        console.log(this);
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos de Componentes de clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

export class EventosES7 extends Component{
    // desaparece el constructor

    // el State se puede declarar como un atributo normal sin this
    state = {
        contador: 0,
    }
    
    // las arrow function ahora no necesitan this para hacer el binding
    // ya herendan el contexto de la clase a la que pertenecen
    sumar = (e) => {
        console.log('sumando');
        console.log(this);
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar = (e) =>{
        console.log('restando');
        console.log(this);
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos de Componentes de clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}