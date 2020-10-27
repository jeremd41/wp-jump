import React from "react"

const Plan = (props) =>{
    return(
        <div className="plan">
            <h3>{props.name}</h3>
            <div className="border"/>
            <h2>{props.prix}  <span>/mois</span></h2>
            <p>{props.description}</p>
            <p className="price"><i class="fas fa-arrow-right"></i>Prix valable pour: <b>{props.quantity}</b></p>
            <p className="blanche"><i class="fas fa-arrow-right"></i>Marque blanche possible </p>
        </div>
    )
}

export default Plan