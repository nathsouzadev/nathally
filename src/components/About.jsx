import React from 'react';

const About = () => {
    return(
        <>
            <div className="container-fluid">
                <h3>Nome</h3>
                <p>Nathally Souza</p> 
                <h3>Data de nascimento</h3> 
                <p>22/05/1990</p> 
                <h3>Formação</h3>
                    <ul>
                        <li>
                            Rádio e TV - UFMA 01/208
                        </li>
                        <li>
                            Programação Full Stack - Recode Pro
                        </li>
                    </ul>
                <h3>Habilidades ténicas</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>PHP</li>
                        <li>SQL</li>
                        <li>React</li>
                        <li>Python</li>
                    </ul>

            </div>
        </>
    )
}

export default About;