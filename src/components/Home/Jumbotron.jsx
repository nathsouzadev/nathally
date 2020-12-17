import React from 'react';
import Typist from 'react-typist';

const Jumbotron = () => {

    function linkedin(){
        window.open("https://www.linkedin.com/in/nathally-souza-7331a71b9/");
    }
    
    function git() {
        window.open("https://github.com/nathyts");
    }

    function twitter() {
        window.open("https://twitter.com/nathally_22");
    }

    return(
        <>
            <div className="jumbotron text-dark">
                <h1 className="display-4">Nathally Souza</h1>
                <p className="lead"><Typist cursor={{ hideWhenDone: true }}>Estudante de programação na Recode Pro</Typist></p>
                <hr className="my-4"/>
                <div className="redes">
                    <i className="text-info fab fa-linkedin-in m-1" onClick={linkedin}></i>
                    <i className="fab fa-github m-1" onClick={git}></i>
                    <i className="text-info fab fa-twitter m-1" onClick={twitter}></i>                   
                </div>
            </div>
        </>
    )
}

export default Jumbotron;