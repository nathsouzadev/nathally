import React from 'react';
import Card from '../Cards/card';
import soccer from '../../assets/soccer.png';
import cripto from '../../assets/criptomoedas.jpg';
import posts from '../../assets/posts.jpg';

const Cards = () => {

    return(
        <>
            <h1>Projetos</h1>
            <div className="card-group">
                <Card image={soccer}
                    info="E-commerce desenvolvido no curso da Recode Pro"
                    url="https://github.com/nathyts/soccershop">
                        Soccershop
                </Card>

                <Card image={posts}
                    info="Sistema com cadastro, login e postagens do usuário"
                    url="https://github.com/nathyts/login">
                        Sistema de postagens
                </Card>

                <Card image={cripto}
                    info="Painel com informações via API sobre diversas criptomoedas"
                    url="https://github.com/nathyts/everis_bootcamp/tree/main/criptomoedas">
                        Criptomoedas
                </Card>
            </div>
        </>
    )
}

export default Cards;
