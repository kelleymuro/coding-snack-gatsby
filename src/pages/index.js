import React from "react"
import { Link } from "gatsby"

import Header from "../components/header";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <Header/>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to code and design React Apps</h1>
        <p>Complete FREE courses that cover the concepts of coding that you need to know now.</p>
        <Link to="/page-2/">Subscribe On Youtube</Link>
      </div>
    </div>

   
  </Layout>
)

export default IndexPage
