/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

// import Layout from "./layout";
import "./layout.css"
import SEO from "./seo"
import Card from "./Card"
import Section from "./Section"
import Wave from "./Wave"
import staticdata from "../../staticdata.json"
import Cell from "./Cell"
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./header"

const SectionCaption = styled.p`
  font-weight: 600px;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
          edges {
            node {
              title
              url
              createdAt
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <Header />
        <div className="Hero">
          <div className="HeroGroup">
            <h1>
              Learn to code <br /> actionable elements for your projects
            </h1>
            <p className="hero-valueProp">
              FREE tutorials that teach you things you will actually use in your
              next project
            </p>
            <Link className="cta" to="/page-2/">Subscribe On Youtube</Link>
            <div className="Logos">
              <img
                src={require("../images/_logo-react.png")}
                width="50"
                alt="logos-react"
              />
              <img
                src={require("../images/logo-javascript.png")}
                width="50"
                alt="logos-js"
              />
              <img
                src={require("../images/logo-css.png")}
                width="50"
                alt="logos-css"
              />
              <img
                src={require("../images/logo-node.png")}
                width="50"
                alt="logos-node"
              />
            </div>
            <Wave />
          </div>
          <div className="Cards">
            <h2>Courses are coming soon</h2>
            <div className="CardGroup">
              <Card
                title="React Snacks"
                text="12 Sections"
                image={require("../images/wallpaper2.jpg")}
              />

              <Card
                title="Javascript Snacks"
                text="12 Sections"
                image={require("../images/wallpaper4.jpg")}
              />

              <Card
                title="CSS Snacks"
                text="12 Sections"
                image={require("../images/wallpaper5.jpg")}
              />

              <Card
                title="Server Side Snacks"
                text="12 Sections"
                image={require("../images/wallpaper6.jpg")}
              />
            </div>
          </div>

          <Section
            image={require("../images/wallpaper2.jpg")}
            logo={require("../images/_logo-react.png")}
            title="Most Popular React Snacks"
            text="In this video I will teach you how to use styled components inside of React.
      This is something that will help you understand how to quickly use CSS in your project.
      Not even a problem. You guys are doing awesome!"
          />

          <SectionCaption>12 Sections - 6 Hours</SectionCaption>
          <SectionCellGroup>
            {staticdata.cells.map(cell => (
              <Cell key={cell.key} title={cell.title} image={cell.image} />
            ))}
          </SectionCellGroup>
          <Footer data={data} />
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
