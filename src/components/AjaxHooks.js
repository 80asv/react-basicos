import React, { useState, useEffect } from 'react';

function Pokemon({name, avatar}){
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async (url) => {
            let res = await fetch(url),
                json = await res.json();
            
            json.results.forEach(async el => {

                let res = await fetch(el.url),
                    json = res.json();

                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                };

                setPokemons((pokemons) => [...pokemons, pokemon])
            })

        }
    },[]);

    return (
        <>
            <h2>Peticiones Asincronas en Hooks</h2>
            {
                /* aqui tomar los pokemones dentro del arreglo del State y los mapea con un forEach */
                pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)
            }
        </>
    )
}