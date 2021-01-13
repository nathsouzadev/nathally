import Icon from './icon.jsx';
import './style.css';

const Day01 = (props) => {
    return(
        <>
            <div className="box" id={props.id}>
                <h1>Desafio 1</h1>
                <h2>Ícones em camadas</h2>
                <div className="box-item">
                    <ul className="box-ul">

                        <Icon url="#css" social="fab fa-github"/>
                        <Icon url="#css" social="fab fa-twitter"/>
                        <Icon url="#css" social="fab fa-linkedin"/>
                        <Icon url="#css" social="fab fa-instagram"/>
                        <Icon url="#css" social="fab fa-facebook"/>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Day01;
