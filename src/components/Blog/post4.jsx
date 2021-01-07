import React from 'react';
import git from '../../assets/git-terminal.png';
import data from './list.json'

const Post4 = () => {

  console.log(data);

  return (
    <div className="card text-white bg-dark">
      <div className="card-body">
        <h5 className="card-title">As lições de 2020</h5>
        <h6 className="card-subtitle mb-2 text-muted">07/01/2021 - 14h43</h6>
        <img src={git} className="card-img-top" alt="GitHub no terminal"></img>
        <p className="card-text mt-3">
          O GitHub é uma das, senão, a plataforma mais presente na vida dos
          desenvolvedores. Compartilhar, versionar e a interação na comunidade
          são as principais vantagens dessa plataforma. Para o uso de todas as
          funcionalidades, existe o GitHub Desktop (Windows e Mac OS), mas todos
          sistemas operacionais podem realizar todas as operações através do
          terminal.
        </p>
        <p className="card-text">
          No início da jornada como desenvolvedor é natural encontrar alguns
          desafios no GitHub. Por conta das dificuldades que eu tive, deixo aqui
          uma lista de comandos básicos que serão úteis ao longo da jornada.
        </p>
        <p className="card-text">
          Algumas dicas são bem valiosas, como clonar uma branch específica ou
          alterar a URL do repositório remoto. Lembrando que no caso de
          repositórios que acabamos de criar no perfil, o próprio GitHub já nos
          dá uma série de comandos para executar via terminal e fazer o upload
          do nosso repositório local para o repositório remoto.
        </p>
        <ul className="list-group list-group-flush">
          {data.map(key =>{
            return <li key={key.item} className="list-group-item list-group-item-dark">{key.item}</li>
          })}
        </ul>
        <p className="card-text">
          Além dessa lista existem vários outros comandos para configurações do
          Git via terminal. A lista completa pode ser acessada clicando aqui.
        </p>
      </div>
    </div>
  );
}

export default Post4;
