import React from "react";
import PropTypes from "prop-types"

export default function Propiedades (props){
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>{props.cadena}</ul>
            <ul>{props.numero}</ul>
            <ul>{props.booleano}</ul>
            <ul>{props.arreglo}</ul>
            <ul>{`${props.objeto.nombre} ${props.objeto.edad}`}</ul>
            <ul>{props.elementoReact}</ul>
            {/*Este recibe una funcion que esta siendo pasada como propiedad del componente*/}
            <ul>{props.arreglo.map(props.funcion).join()}</ul>
            <ul>{props.componenteReact}</ul>
            
        </div>
    )
}

// propiedades por defecto que puede tener un componente
Propiedades.defaultProps = {
    porDefecto: "Las props",
}

// esto permite definir que tipo de datos entran en las propiedades
Propiedades.propTypes = {
    // En la prop numero solo se podran ingresar numeros
    numero: PropTypes.number,
}