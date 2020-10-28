import React from "react"
import Fade from "react-reveal/Fade"

const Services = () =>{
    return(
        <div className="services">
            <div className="top">
                <Fade left>
                    <p>Nos services</p>
                    <h3>Faites équipe avec l'équipe qui vous offre tous les aspects des services de soutien WordPress de qualité.</h3>
                </Fade>
            </div>
            <div className="services-content">
                <Fade left>
                    <ul>
                        <li>
                            <div><i class="fas fa-pencil-ruler"></i></div>
                            <p>Modifications / édition 24/7</p>
                        </li>
                        <li>
                            <div><i class="fas fa-eye"></i></div>
                            <p>Support 24/7</p>
                        </li>
                        <li>
                            <div><i class="fas fa-fingerprint"></i></div>
                            <p>Sécurité permanente</p>
                        </li>
                        <li>
                            <div><i class="far fa-calendar-check"></i></div>
                            <p>Mise à jour hebdomadaire</p>
                        </li>
                        <li>
                            <div><i class="fas fa-cloud-upload-alt"></i></div>
                            <p>Sauvagarde quotidienne</p>
                        </li>
                        <li>
                            <div><i class="fas fa-tachometer-alt"></i></div>
                            <p>Optimisation performance</p>
                        </li>
                    </ul>
                </Fade>
            </div>
            
        </div>
    )
}

export default Services