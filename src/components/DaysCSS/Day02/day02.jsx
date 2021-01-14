import './style.css';

const Day02 = () => {
    return(
        <div className="box-loader" id="day02">
            <div className="header">
                <h1>Desafio 02</h1>
                <h2>Loader animado</h2>
            </div>
            

            <div class="loader">
                <div class="text-loader">Loading</div>
                <div class="ring-loader"></div>
            </div>
        </div>
    )
}

export default Day02;
