/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      allContentfulLink {
        edges {
         node {
          title
          url
      }
    }
  }
      }
    `}
    render={data => (
      <> 
          <main>  
          {children}
          {data.allContentfulLink.edges.map( edge => (
            <a href={edges.node.link}> {edges.node.title}</a>
          ))} 
          </main>  
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


