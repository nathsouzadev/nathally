import './style.css';

const Day01 = () => {
    return(
        <>
            <div className="box">
                <h1>Desafio 1</h1>
                <h2>Ícones em camadas</h2>
                <div className="box-item">
                    <ul className="box-ul">
                        <li className="box-li">
                            <a href="#css">
                                <span className="box-span"></span>
                                <span className="box-span"></span>
                                <span className="box-span"></span>
                                <span className="box-span"></span>
                                <span className="box-span fab fa-github" aria-hidden="true"></span>
                            </a>
                        </li>
                
                        <li className="box-li">
                            <a href="#css">
                                <span className="box-span"></span>
                                <span className="box-span"></span>
                                <span className="box-span"></span>
                                <span className="box-span"></span>
                                <span className="box-span fab fa-twitter" aria-hidden="true"></span>
                            </a>
                        </li>

                        <li className="box-li">
                            <a href="#css">
                                <span className="box-span"></span>
                                <span className="box-span"></span>
                                <span className="box-span"></span>
                                <span className="box-span"></span>
                                <span className="box-span fab fa-linkedin" aria-hidden="true"></span>
                            </a>
                        </li>
                
                        <li className="box-li">
                            <a href="#css">
                                <span className="box-span"></span>
                                <span className="box-span"></span>
                                <span className="box-span"></span>
                                <span className="box-span"></span>
                                <span className="box-span fab fa-instagram" aria-hidden="true"></span>
                            </a>
                        </li>

                        <li className="box-li">
                            <a href="#css">
                                <span className="box-span"></span>
                                <span className="box-span"></span>
                                <span className="box-span"></span>
                                <span className="box-span"></span>
                                <span className="box-span fab fa-facebook" aria-hidden="true"></span>
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Day01;
