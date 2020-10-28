import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/whitelabel/card"
import TopPages from "../components/top-page"
import Partner from "../components/whitelabel/partner"

import "../styles/whitelabel.scss"

const whitelabel = () => (
  <Layout>
    <SEO title="Marque blanche" />
    <TopPages title="Assistance et maintenance WordPress en marque blanche 24/7" sub="Plans de soins continus entièrement gérés pour les agences et les ESN" />
    <div className="bottom-border" />
    <div className="grp-card1">
        <Card logo="fas fa-ghost" title="Entièrement en marque blanche" content="Nous utiliserons l'une de vos adresses e-mail (nous vous recommandons support@votreagence.com) et aurons votre signature et votre logo au bas de chaque e-mail que nous vous enverrons." />
        <Card logo="fas fa-chart-bar" title="Tableau de bord en marque blanche" content="Accédez à votre propre tableau de bord pour une transparence totale sur tous vos tickets clients et le travail et les réponses de notre équipe." />
        <Card logo="fas fa-paste" title="Rapports en marque blanche" content="Nous vous envoyons des rapports hebdomadaires (ou directement à vos clients) avec des mises à jour de chaque changement effectué sur leur site Web." />
    </div>
    <div className="grp-card1">
        <Card logo="fas fa-percentage" title="1 mois offert" content="Nous faisons cadeau d'un mois pour toute souscription annuel à l'un de nos forfaits" />
        <Card logo="fas fa-cocktail" title="Gestion simplifié" content="Grâce à l'ensemble des outils mis à votre disposition vous ne gérez rien ! Vous pouvez siroter tranquillement votre cocktail" />
        <Card logo="fas fa-hand-holding-usd" title="Revendez nos plan avez votre marge" content="Exemple un forfait Solo vous coûte 3O€ /mois revendez-en 10 à 70€ et vous dégagerez un bénéfice de 4800€ par an en ayant rien à faire " />
    </div>
    <div className="bottom-border" />
    <Partner />
    <div className="bottom-border" />
    <div className="btn-lg"><Link to="/tarif/">Les tarifs</Link></div>
    
  </Layout>
)

export default whitelabel