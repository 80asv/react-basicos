import React, {useState, useEffect} from "react";

export default function ScrollHooks(){
    const [scrollY, setScrollY] = useState(0);

    // cada vez que se neceite renderizar el componente,
    // useEffect agregara una variable de estado
    useEffect(() => {
        //console.log('fase de montaje');
        const detectarScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener('scroll', detectarScroll)

        return() => {
            window.removeEventListener('scroll', detectarScroll);
        } // -> funcion de desmontaje

    }, [scrollY]); // -> este segundo parametro indica que el useState solo se ejecute cuando la variable ScrollY cambie

    useEffect(() => {
        return () => {
            let res = "Fase de desmontaje";
        }
    }); // -> esta funcion ejecuta la fase de desmontaje como desconexiones de APIS, limpiar intervalos, etc.

    return(
        <>
            <h2>Hooks - useEffect y ciclo de vida</h2>
            <p>Scroll Y del navegador {scrollY}px</p>
        </>
    )
}