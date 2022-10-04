import React, { Component } from "react";

function Pokemon({name, avatar}){
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default class AjaxAPIs extends Component{
    state = {
        pokemons: [],
    };

    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon";
        fetch(url)
            .then(res => res.json())
            .then(json => {
                json.results.forEach(el => {
                    fetch(el.url)
                        .then(res => res.json())
                        .then(json => {
                            // estraemos informacion del pokemon
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default
                            };
                            /*
                                con el spread operator hace una copia al arreglo pokemon del estate
                                y va adicionando cada pokemon uno a uno
                            */
                            let pokemons = [...this.state.pokemons, pokemon];
                            this.setState({ pokemons });
                        })
                })
            })
    }

    render(){
        return (
            <>
                <h2>Peticiones Asincronas en componentes de clase</h2>
                {
                    /* aqui tomar los pokemones dentro del arreglo del State y los mapea con un forEach
                    */
                    this.state.pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)
                }

            </>
        )
    }
}