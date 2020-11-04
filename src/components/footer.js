import React from "react"
import { Link } from "gatsby"

import "../styles/footer.scss"


const Footer = () =>  {
    return(
        <footer>
            <div className="callaction">
                <h2>Envie de parler à un expert Wordpress ? </h2>
                <Link className="btn-grey" to="/bookacall/"> <i className="fas fa-comment"></i>Réserver un appel</Link>
            </div>
        </footer>
    )
}


export default Footer