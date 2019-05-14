import React from "react"
import { Link } from "gatsby"

import Header from "../components/header";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/Card";
import Section from "../components/Section";
import Wave from "../components/Wave";
import staticdata from '../../staticdata.json';
import Cell from "../components/Cell";
import styled from 'styled-components';
import Footer from "../components/Footer";

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

  @media(max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }

`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <Header/>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to  code <br /> actionable elements for your projects</h1>
        <p className="hero-valueProp">FREE tutorials that teach you things you will actually use in your next project</p>
        <Link to="/page-2/">Subscribe On Youtube</Link>
        <div className="Logos">
          <img src={require('../images/_logo-react.png')}  width="50" alt="logos-react"></img>
          <img src={require('../images/logo-javascript.png')}  width="50" alt="logos-js"></img>
          <img src={require('../images/logo-css.png')}  width="50" alt="logos-css"></img>
          <img src={require('../images/logo-node.png')}  width="50" alt="logos-node"></img>
        </div>
        <Wave />
      </div>
      <div className="Cards">
        <h2>Courses are coming soon</h2>
        <div className="CardGroup">
        <Card
          title="React Snacks"
          text="12 Sections"
          image={require('../images/wallpaper2.jpg')}
        />
     
        <Card
          title="Javascript Snacks"
          text="12 Sections"
          image={require('../images/wallpaper4.jpg')}
        />
     
        <Card
          title="CSS Snacks"
          text="12 Sections"
          image={require('../images/wallpaper5.jpg')}
        />
      
        <Card
          title="Server Side Snacks"
          text="12 Sections"
          image={require('../images/wallpaper6.jpg')}
        />
        </div>
      </div>
    
      <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/_logo-react.png')}
      title="Most Popular React Snacks"
      text="In this video I will teach you how to use styled components inside of React.
      This is something that will help you understand how to quickly use CSS in your project.
      Not even a problem. You guys are doing awesome!"
      />

      <SectionCaption>12 Sections - 6 Hours</SectionCaption>
        <SectionCellGroup>
          {staticdata.cells.map(cell => (
            <Cell
              key={cell.key}
              title={cell.title}
              image={cell.image}
            />
          ))}
        </SectionCellGroup>

    </div>

   
  </Layout>
)

export default IndexPage
