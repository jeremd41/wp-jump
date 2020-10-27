import { Link } from "gatsby"
import React from "react"


const Partner = () =>{
    return(
        <div className="partner">
            <div className="partner-content">
                <h5><i class="fas fa-handshake"></i>Tableau de bord des partenaires </h5>
                <p>Votre propre connexion au service d'assistance pour une transparence totale sur tous vos tickets clients et le travail et les réponses de notre équipe, le tout à partir d'un tableau de bord intuitif.</p>
                <div className="button"><Link to="/bookacall/">Planifiez votre appel découverte</Link></div>
            </div>
        </div>
    )
} 

export default Partner