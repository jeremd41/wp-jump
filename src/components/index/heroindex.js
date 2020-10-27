import React from "react"
import { Link } from "gatsby"

import computer from "../../images/computer.png"

const Heroindex = () =>{
    return(
        <div className="heroindex">
            <div className="herocontent">
                <div>
                <h1>Des services de gestion et de soutien de sites web WordPress 24/7 qui alimentent votre croissance</h1>
                <p>Services de maintenance pour les propriétaires de sites web, gestion de sites en marque blanche pour les agences et les freelances.</p>
                <div className="grp-btn-hero">
                    <div className="button"><i className="fas fa-tag"></i> <Link to="/tarif/">Les tarifs</Link></div>
                    <div className="button"><i class="fas fa-ghost"></i> <Link to="/whitelabel/">Option marque blanche</Link></div>
                </div>
                </div>
                <div><img src={computer} alt="computer"/></div>
            </div>
        </div>
    )
}

export default Heroindex