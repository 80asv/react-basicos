import { useState, useEffect } from 'react';

// peticion fetch generica
export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {

            try {
                // realizamos la peticion
                let res = await fetch(url);

                // si se origina el error mandaamos el error al catch
                if(!res.ok){
                    throw { 
                        err: true, 
                        status: res.status, 
                        statusText: !res.statusText ? "Ocurrio un error" : res.statusText
                    }
                }

                // convertimos a JSON la respuesta de la peticion 
                let data = await res.json();

                // actualizamos el estado de las variables
                setIsPending(false);
                setData(data);
                setError(false);
                
            } catch (err) {
                setIsPending(true);
                setError(true);
            }
        };

        getData(url);
    }, [url])
    
    return { data, isPending, error}
}

