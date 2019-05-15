/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from './header'
import "./layout.css"
import Footer from "./Footer";


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
      <>
        <main>
          {children}
        </main>
        <Footer data={data}> 
        Designed with the help of Meng To. Built with React & Gatsby.
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
