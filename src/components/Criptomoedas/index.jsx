import React, { useState, useEffect } from 'react';

const Cripto = () => {
    const [coin, setCoin] = useState([]);
    //const [coins, setCoins] = useState([])

    useEffect(async () => {
        const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=f2e60ab4-81b7-4b03-8fc9-1a34c8c72ce7');
        //setCoin(await res.json());
        const dados = await res.json();
        setCoin(dados.data)
    }, [])

    //const coins = coin.data;

   // console.log(coins)

    return (
    <>
    <div className="container">
            <h1>Criptomoedas</h1>
        </div>
        <div className="table-responsive-xl text-light">
            <table className="table table-hover">
                <thead className="text-light">
                    <tr>
                    <th scope="col-xl">Moeda</th>
                    <th scope="col-xl">Cotação</th>
                    <th scope="col-xl">Variação (24h)</th>
                    </tr>
                </thead>
                
                <tbody>
                   {coin.map ( value => {
                        return (
                            <tr key={value.id} className="text-light">
                                <td >{value.name} {value.symbol}</td>
                                <td>US$ {(value.quote.USD.price).toFixed(2)}</td>
                                <td>{(value.quote.USD.percent_change_24h).toFixed(2)} %</td>
                            </tr>
                        )
                    })}
        
                </tbody>
        
            </table>
            
        </div>
        </>
    )
}

export default Cripto;