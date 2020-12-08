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

    function criptoDemo(){
        window.open("/criptomoedas");
    }

    return(
        <>
            <h1>Projetos</h1>
            <div className="card-group">
                <div className="card bg-dark col-lg-4">
                    <img src={soccer} className="card-img-top p-1" alt=".Soccershop"/>
                    <div className="card-body">
                    <h5 className="card-title">Soccershop</h5>
                    <p className="card-text">Projeto de e-commerce produzido durante na Recode Pro</p>
                    <button onClick={soccerApp} className="btn btn-warning col-sm-12 col-lg-5">Projeto no GitHub</button>
                    </div>
                </div>
                <div className="card bg-dark">
                    <img src={posts} className="card-img-top p-1" alt="Posts"/>
                    <div className="card-body">
                    <h5 className="card-title">Sistema de postagens</h5>
                    <p className="card-text">Sistema com cadastro, login e postagens do usuário</p>
                    <button onClick={postsApp} className="btn btn-warning col-sm-12 col-lg-5">Projeto no GitHub</button>
                    </div>
                </div>
                <div className="card bg-dark">
                    <img src={cripto} className="card-img-top p-1" alt="Criptomoedas"/>
                    <div className="card-body">
                    <h5 className="card-title">Criptomoedas</h5>
                    <p className="card-text">Painel com informações via API sobre diversas criptomoedas</p>
                    <div className="d-flex justify-content-around">
                        <button onClick={criptoApp} className="btn btn-warning col-sm-12 col-lg-5">Projeto no GitHub</button>
                        <button onClick={criptoDemo} className="btn btn-warning col-sm-12 col-lg-5">Ver demo</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;