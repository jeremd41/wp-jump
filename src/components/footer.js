import React from "react"
import { Link } from "gatsby"

import "../styles/footer.scss"


const Footer = () =>  {
    return(
        <footer>
            <div className="callaction">
                <h2>Envie de parler à un expert Wordpress ? </h2>
                <div className="btn-grey"><i className="fas fa-comment"></i> <Link to="/bookacall/">Réserver un appel</Link></div>
            </div>
        </footer>
    )
}


export default Footer