import { Link } from "gatsby"
import React from "react"
import Fade from "react-reveal/Fade"

const Pricing = () =>{
    return(
        <div className="pricing">
            <div className="pricing-content">
                <div className="top">
                    <Fade left>
                        <p>Nos Tarifs</p>
                        <h3>Quel type de service de maintenance WordPress avez-vous besoin ?</h3>
                    </Fade>
                </div>
                <ul>
                    <Fade left>
                        <li>
                            <h3>Support de sites pour vos clients</h3>
                            <div className="underline"></div>
                            <h4>Agences, SS2I</h4>
                            <p>Offrez une assistance premium 24/7 à l'ensemble de votre clientèle ou de votre public sans vous soucier de recruter, de gérer une équipe ou d'assurer une assistance technique.</p>
                            <Link className="button" to="/whitelabel/"><i className="fas fa-ghost"></i>Option marque blanche</Link>
                        </li>
                    </Fade>
                    <Fade right>
                        <li>
                            <h3>Support de sites pour vous</h3>
                            <div className="underline"></div>
                            <h4>Petite entreprise, site unique</h4>
                            <p>Associez-vous à une équipe d'ingénieurs WordPress talentueux pour gérer entièrement tous les aspects de votre site Web WordPress 24/7, pour un petit montant mensuel.</p>
                            <Link className="button" to="/tarif/"><i className="fas fa-tag"></i>Les tarifs</Link>
                        </li>
                    </Fade>
                </ul>
            </div>
        </div>
    )
}

export default Pricing