import React from 'react';
import styled from 'styled-components';


const FooterGroup = styled.div`
background: #f1f3f5;
padding: 50px 0;
`

const Text = styled.p`
`

const Button = styled.button`
`

const LinkGroup = styled.div`
`

const Footer = ({data}) => (
    

    <FooterGroup>
        <Text>Share with me what snacks you want on twitter. @kelleymuro</Text>
        <Button>Tweet</Button>

        <LinkGroup>
            {data.allContentfulLink.edges.map(edge => (
                <a href={edge.node.url}> {edge.node.title}</a>
            ))}
        </LinkGroup>

    </FooterGroup>
)

export default Footer