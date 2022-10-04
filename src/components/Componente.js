// importamos la libreria React
import React, {Component} from 'react';


// con funciones expresivas
const Componente = props => <h2>{props.mensaje}</h2>

// con funciones declaradas

//function Componente(props){
//    return <h2>{props.msg}</h2>
//}

// como si fuera una clase

//class Componente extends Component{
//    render(){
//        return <h2>{this.props.msg}</h2>
//    }
//}

export default Componente;