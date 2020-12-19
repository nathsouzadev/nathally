const Card = (props) => {
    return(
        <div className="card bg-dark">
            <img src={props.image} className="card-img-top p-1" alt={props.children}/>
            <div className="card-body">
                <h5 className="card-title">{props.children}</h5>
                <p className="card-text">{props.info}</p>
                <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-warning col-sm-12 col-lg-5">Projeto no GitHub</a>
            </div>
        </div> 
    )
}

export default Card;
