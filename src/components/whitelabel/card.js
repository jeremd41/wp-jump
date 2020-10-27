import React from "react"

const Card = (props) =>{
    return(
        <div className="card">
            <div className="logo-card"><i className={props.logo}></i></div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Card