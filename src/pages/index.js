import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heroindex from "../components/index/heroindex"

import "../styles/index.scss"
import Services from "../components/index/services"
import Pricing from "../components/index/pricing"

const IndexPage = () => (
  <Layout>
    <SEO title="24/7 support Wordpress" />
    <Heroindex />
    <Services />
    <Pricing />
  </Layout>
)

export default IndexPage
