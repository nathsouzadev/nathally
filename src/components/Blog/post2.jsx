import React, { useState } from 'react';
import textTypist from '../../assets/text-typist.gif';
import Typist from 'react-typist';

const Post2 = () => {
    
    const [exe, setExe] = useState('');
    const [delay, setDelay] = useState('');
    const [back, setBack] = useState('');

    const line1 = "import Typist from 'react-typist'";
    const line2 = "<Typist cursor={{ hideWhenDone: true }}>Usando react-typist</Typist>";
    const cursor = "cursor={{ hideWhenDone: true }}";
    const codigoDelay = "<Typist> Usando <Typist.Delay ms={2000}/> delay no Typist </Typist>";
    const codigoBack = "<Typist> Usando o Typist.delay <Typist.Backspace count={6} delay={200} /> backspace</Typist>";

    function example(){
      if(!exe){
        const text = <Typist cursor={{ hideWhenDone: true }}>Usando react-typist</Typist>
        setExe(text);
      } else {
        setExe('');
      }
    }

    function exampleDelay(){
      if(!delay){
        const text = <Typist>Usando <Typist.Delay ms={2000}/>delay no Typist</Typist>
        setDelay(text);
      } else {
        setDelay('');
      }
    }

    function backspace() {
      if(!back){
        const text = <Typist> Usando o Typist.delay <Typist.Backspace count={6} delay={200} />backspace</Typist>
        setBack(text);
      } else {
        setBack('');
      }
    }
  
    return (
      <div className="card text-white bg-dark">
        <div className="card-body">
          <h5 className="card-title">React e react-typist</h5>
          <h6 className="card-subtitle mb-2 text-muted">17/12/2020 - 17h47</h6>
          <img
            src={textTypist}
            className="card-img-top"
            alt="digitando"
          ></img>
          <p class="card-text mt-3">
            Hoje vou fazer um pequeno tutorial sobre como acrescentar o efeito
            de digitando em seus projetos com React. Ao longo desses dias estava
            estudando sobre animações para CSS e buscando formas de simplificar
            algumas tarefas. Uma das formas encontradas foi o react-typist, uma
            ferramenta simples e que pode adicionar muito dinamismo aos seus
            projetos.
          </p>
          <p class="card-text mt-3">
            O react-typist é altamente personalizável e com uma documentação
            simples disponível no github. Para utilizá-lo é necessário instalar
            sua dependência no projeto e fazer a importação nos componentes onde
            será chamado.
          </p>
          <div className="shadow-lg p-3 mb-3 bg-secondary text-dark rounded">
            npm install react-typist --save
          </div>
          <p class="card-text">
            Clique no botão para ver uma breve demonstração do react-typist.
          </p>
          <div className="card text-center bg-dark mb-3">
            <div className="card-body">
              <button className="btn btn-warning" onClick={example}>
                React typist
              </button>
              <p className="card-text mt-3">{exe}</p>
            </div>
          </div>
          <div className="shadow-lg p-3 mb-3 bg-secondary text-dark rounded">
            {line1}
            <br />
            {line2}
          </div>
          <p class="card-text mt-3">
            Para fazer esse exemplo, criamos um estado que define o texto
            inicial vazio e somente após chamar a função com o clique no botão
            ele atribui o texto à variável e o reproduz na tela. Uma propriedade
            personalizável já utilizada nesse exemplo foi a opção de deixar o
            cursor visível ou não ao fim da renderização.
          </p>
          <div className="shadow-lg p-3 mb-3 bg-secondary text-dark rounded">
            {cursor}
          </div>
          <p class="card-text mt-3">
            O valor false é configurado por padrão. É importante destacar que o
            texto que será renderizado com esse efeito precisa ser digitado
            entre as tags Typist. Outra propriedade que pode ser configurada é a
            velocidade da digitação através da tag Typist.Delay. Essa tag é
            declarada dentro do elemento que será renderizado e sua velocidade
            atribuída em ms.
          </p>
          <div className="card text-center bg-dark mb-3">
            <div className="card-body">
              <button className="btn btn-warning" onClick={exampleDelay}>
                Typist.Delay
              </button>
              <p className="card-text mt-3">{delay}</p>
            </div>
          </div>
          <div className="shadow-lg p-3 mb-3 bg-secondary text-dark rounded">
            {codigoDelay}
          </div>
          <p class="card-text mt-3">
            Observando o código do exemplo, vemos que podemos alterar a
            velocidade de digitação em qualquer trecho do elemento. Podemos ter
            um elemento com várias velocidades de digitação ao longo do corpo.
          </p>
          <p class="card-text mt-3">
            Uma última propriedade interessante é a Typist.Backspace. Ela faz o
            efeito de apagar um texto renderizado e pode substituí-lo por outro
            texto ou até deixar em branco, de acordo com o configurado.
          </p>
          <div className="card text-center bg-dark mb-3">
            <div className="card-body">
              <button className="btn btn-warning" onClick={backspace}>
                Typist.Backspace
              </button>
              <p className="card-text mt-3">{back}</p>
            </div>
          </div>
          <div className="shadow-lg p-3 mb-3 bg-secondary text-dark rounded">
            {codigoBack}
          </div>
          <p class="card-text mt-3">
            Como observamos no exemplo e no código a propriedade count declarada
            dentro de Typist.Backspace é a responsável por definir quantos
            espaços serão apagados. No caso do nosso exemplo, além de apagar o
            texto foi substituído por outro, pois havia elementos posteriores
            para serem renderizados, mas caso não existisse, o texto seria
            simplesmente apagado.
          </p>
          <p className="card-text mt-3">
            Outras propriedades e funcionalidades podem ser conferidas na
            <a href='https://github.com/jstejada/react-typist' target="_blank" rel="noreferrer"> documentação completa do React.Typist disponível no GitHub. </a>
          </p>
        </div>
      </div>
    );
}

export default Post2;