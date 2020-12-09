import React, { useState, useEffect } from 'react';

const Pokedex = () => {
    
    const [list, setList] = useState([]);

    useEffect(async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1118');
        const dados = await res.json();
        setList(dados.results);
    }, [])

    
    return(
        <>
            <p>Pokemons</p>
            {list.map(value => {
                return(
                    <div key={value.name}>
                        <p>{value.name}</p>
                    </div>
                )
            }
            )}
        </>
        )
}

export default Pokedex;
