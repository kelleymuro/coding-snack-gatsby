import React from 'react';
import styled from 'styled-components'
import Wave from './Wave';

const SectionGroup = styled.div`
    background: url(${props => props.image});
    height: 750px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 30px;
    position: relative;
    margin-bottom: 80px;

    @media (max-width: 720px) {
        height: 820px;
    }

`
const SectionLogo = styled.img`
align-self: end;
width: 80px;
margin: 0 auto;
`
const SectionTitleGroup = styled.div`
display: grid;
grid-template-columns: 500px 45%;
justify-content: center;
margin: 0 40px;
grid-gap: 20px;
grid-templates-rows: auto 100%;

@media (max-width: 720px) {
    grid-template-columns: 1fr;
}
`
const SectionTitle = styled.h3`
color: white;
font-size: 60px;
margin: 0;
line-height: 1.2;

@media (max-width: 720px) {
    font-size: 40px;
    text-align: center;
}

`
const SectionText = styled.p`
color: white;
color: rgba(255, 255, 255, 0.8);
font-size: 30px;
line-height: 1.5;
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -70px;
`

const WaveTop = styled.div`
position: absolute;
width: 100%;
top: -6px;
transform: rotate(180deg);
`

const Section = props => (
    <SectionGroup image={props.image}>
    <WaveTop> <Wave/> </WaveTop>
    <WaveBottom><Wave/></WaveBottom>  
    <SectionLogo src={props.logo}/>
     <SectionTitleGroup>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText> {props.text} </SectionText>
     </SectionTitleGroup>
    </SectionGroup>
)


export default Section;