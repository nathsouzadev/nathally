import React from 'react';
import study from '../../assets/aprender-programar.png';

const Post1 = () => {
    return(
      <div className="card text-white bg-dark">
        <div className="card-body">
        <h5 className="card-title">Como eu comecei a estudar programação</h5>
        <h6 className="card-subtitle mb-2 text-muted">13/12/2020 - 11h01</h6>
        <img src={study} className="card-img-top" alt="estudar programação"></img>
        <p class="card-text mt-3">
          Olá pessoas, antes de falar um pouco do meu ingresso no mundo da
          tecnologia, um breve resumo sobre quem eu sou. Meu nome é Nathally
          Souza, sou uma mulher trans, tenho 30 anos e trabalhei por 10 anos
          como jornalista, mas sempre tive curiosidade e interesse na área
          tecnológica.
        </p>
        <p class="card-text">
          Em 2017, conheci o Curso em Vídeo, do Gustavo Guanabara, e comecei meu
          primeiro contato com as linguagens de programação. Sem muito rumo,
          iniciei o caminho tradicional do HTML e CSS, posteriormente fiz o
          curso de PHP e Phyton e somente depois disso fiz lógica de
          programação. Caminho totalmente invertido por causa da falta de
          orientação.
        </p>
        <p class="card-text">
          Nos três últimos anos, o aprendizado sempre foi esporádico. Em 2020,
          com minha mudança para São Paulo e todo o cenário da pandemia, conheci
          a Recode Pro. Fiz o seletivo, participei do hackathon e tive a
          felicidade de ser uma das selecionadas para a turma que começou em
          setembro e terá formação em março de 2021.
        </p>
        <p class="card-text">
          Posso dizer que a partir desse momento é que verdadeiramente comecei a
          estudar programação. Com orientação de professores e uma comunidade
          focada em um objetivo comum, os conteúdos que absorvi no passado
          passaram a fazer sentido e serviram como base para a trilha do curso.
        </p>
        <p class="card-text">
          O fato de ter uma turma com mais de 100 alunos, a frequência das
          aulas, os projetos para entregar, foram cruciais para realmente criar
          uma disciplina nesse caminho.
        </p>
        <p class="card-text">
          Uma dica que posso dar para quem planeja iniciar a caminhada na área
          de programação é que procure comunidades e construa uma rede de apoio,
          mesmo que virtualmente. O fato de você ter incentivo de outras pessoas
          que estão com o mesmo objetivo, ajuda demais na disciplina para
          realizar os estudos e projetos ao longo da jornada.
        </p>
        <p class="card-text">
          Por mais óbvio que seja, comece pelo básico. Dê os primeiros passos
          com Lógica de Programação. Se alguém me desse essa dica há três anos
          eu com certeza seria muito grata. Entendo lógica de programação, o
          processo de aprendizado em todas as linguagens será extremamente
          facilitado.
        </p>
        <p class="card-text">
          Atualmente ainda estou no processo de formação da Recode Pro, mas já
          com segurança para arriscar alguns projetos. A curiosidade tem ajudado
          demais nesse processo, com horas de pesquisas em canais especializados
          no YouTube, buscas no GitHub e Stackoverflow, além de muita interação
          com outros membros da comunidade.
        </p>
      </div>
    </div>
    )
}

export default Post1;