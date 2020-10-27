import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Plan from "../components/tarif/plan"

import TopPages from "../components/top-page"

import "../styles/tarif.scss"

const Tarif = () =>{
    return(
        <Layout>
            <SEO title="Les tarifs"/>         
            <TopPages title="Plan et forfaits de maintenance Wordpress" sub="Enfin, un partenaire technique 24/7 capable de gérer tous les aspects de votre (vos) site (s) Web." />
            <div className="bottom-border" />
            <div className="middle">
                <h3>Chez nous les tarifs c'est claire !</h3>
                <p>Tous nos forfaits comprennent la totalité de nos services :</p>
                <ul className="card-services">
                    <li><i class="fas fa-check-circle"></i>Tableau de bord dédié à votre entreprise</li>
                    <li><i class="fas fa-check-circle"></i>Mise à jour hebdomadaire de l'ensemble du back office WP (CMS, Thème et plug-in)</li>
                    <li><i class="fas fa-check-circle"></i>Envoi d'un rapport hebdomadaire pour chaque site</li>
                    <li><i class="fas fa-check-circle"></i>Surveillance et optimisation des performances</li>
                    <li><i class="fas fa-check-circle"></i>Modification à la demande du client illimités</li>
                    <li><i class="fas fa-check-circle"></i>Correction de bug et gestion des tickets</li>
                    <li><i class="fas fa-check-circle"></i>Ajout et/ou suppression de plugins</li>
                    <li><i class="fas fa-check-circle"></i>Sauvegarde quotidienne</li>
                    <li><i class="fas fa-check-circle"></i>Maintien d'une sécurité optimal</li>
                </ul>
            </div>
            <div className="grp-plan">
                <Plan 
                    name="Solo" 
                    prix="30 €"
                    quantity="1 site" 
                    description="Idéal pour les entreprises qui souhaitent commencer doucement ou pour celles qui gères peu de sites"
                />
                <Plan 
                    name="Perform"
                    prix="170 €"
                    quantity="1 à 15 sites"
                    description="La formule qu'il vous faut si vous êtes une petite agence"
                />
                <Plan 
                    name="Elite"
                    prix="399 €"
                    quantity="Nombre sites illimité"
                    description="Adapter aux agences qui souhaitent maintenir un grande quantité de site"
                />
            </div>
            <div className="btn-lg"><Link to="/bookacall/">Réserver un appel</Link></div>
        </Layout>
    )
}

export default Tarif