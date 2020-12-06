import React from 'react';
import soccer from '../../assets/soccer.png';
import cripto from '../../assets/criptomoedas.jpg';
import posts from '../../assets/posts.jpg';

const Cards = () => {

    function soccerApp(){
        window.open("https://github.com/nathyts/soccershop");
    }

    function postsApp(){
        window.open("https://github.com/nathyts/login");
    }

    function criptoApp(){
        window.open("https://github.com/nathyts/everis_bootcamp/tree/main/criptomoedas");
    }

    return(
        <>
            <h1>Projetos</h1>
            <div class="card-group">
                <div class="card bg-dark">
                    <img src={soccer} class="card-img-top p-1" alt=".Soccershop"/>
                    <div class="card-body">
                    <h5 class="card-title">Soccershop</h5>
                    <p class="card-text">Projeto de e-commerce produzido durante na Recode Pro</p>
                    <button onClick={soccerApp} className="btn btn-warning">Projeto no GitHub</button>
                    </div>
                </div>
                <div class="card bg-dark">
                    <img src={posts} class="card-img-top p-1" alt="Posts"/>
                    <div class="card-body">
                    <h5 class="card-title">Sistema de postagens</h5>
                    <p class="card-text">Sistema com cadastro, login e postagens do usuário</p>
                    <button onClick={postsApp} className="btn btn-warning">Projeto no GitHub</button>
                    </div>
                </div>
                <div class="card bg-dark">
                    <img src={cripto} class="card-img-top p-1" alt="Criptomoedas"/>
                    <div class="card-body">
                    <h5 class="card-title">Criptomoedas</h5>
                    <p class="card-text">Painel com informações via API sobre diversas criptomoedas</p>
                    <button onClick={criptoApp} className="btn btn-warning">Projeto no GitHub</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;