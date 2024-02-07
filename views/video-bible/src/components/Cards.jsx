import React from 'react'
import styled from 'styled-components'
import Prophet  from "../img/prof2.png";
import Prophet2 from '../img/prof.png'
import { Link } from 'react-router-dom';



const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`

const Details = styled.div`
  display:flex;
  margin-top: 16;
  gap: 12px;
`;

const ChannelImage = styled.img`
   width: 36px;
   height:36px;
   border-radius: 50%;
   background-color: #999;

`

const Texts = styled.div`

`;

const Title = styled.h1`
 font-size:19px;
 font-weight: 500;
 color: #181818

`;


const ChannelName = styled.h2`
   font-size: 16;
   color:#606060;
   margin: 9px 8px;
`;



const Info = styled.div`
  font-size: 14px;
  color:#606060;
  `;


const Cards = () => {
  return (

    <Link to='/video/test' style={{textDecoration:"none"}}>
    <Container><Image src={Prophet}/>
        <Details>
          <ChannelImage src={Prophet2}/>
          <Texts>
            <Title>Heaven Way</Title>
               <ChannelName>Prophet Francis Kwateng</ChannelName>
             <Info>900,654 views . 1 day ago</Info>
          </Texts>
        </Details>
    </Container>
  </Link>
    
  )
}

export default Cards
