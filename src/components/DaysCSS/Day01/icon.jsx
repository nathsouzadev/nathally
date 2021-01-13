const Icon = (props) => {
    
    const social = `box-span ${props.social}`;
    
    return(
        <li className="box-li">
            <a href={props.url}>
                <span className="box-span"></span>
                <span className="box-span"></span>
                <span className="box-span"></span>
                <span className="box-span"></span>
                <span className={social} aria-hidden="true"></span>
            </a>
        </li>
    )
}

export default Icon;
