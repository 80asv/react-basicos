import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props){
    return(
        <li>
            {/* Consume los datos dentro del archivo JSON */}
            <a href={props.el.web} target="_blank">{props.el.name}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons: ["primavera", "verano", "otoño", "invierno"],
        }
    }
    render(){
        console.log(data);
        return(
            <div>
                <h2>renderizado de elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        // tenemos que asignarle el valor key dentro de cada li generado dinamicamente
                        this.state.seasons.map((el, index) => <li key={index}>{el}</li>)
                    }
                </ol>
                <h3>Frameworks frontend  JS</h3>
                <ul>
                    {
                        // mapeamos los elementos del archivo JSON generando varios compoenentes con ElementoLista
                        data.frameworks.map((el, index) => <ElementoLista key={el.id} el={el}/>)
                    }
                </ul>
            </div>
        )
    }
}