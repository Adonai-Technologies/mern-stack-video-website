import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display:flex;
  gap:24;
`;
const Content = styled.div`
  flex:5;
`;

const Reccommendation = styled.div`
   flex:2; 
`;



const Video = () => {
  return (
    <Container>
        <Content>content</Content>
        <Reccommendation>Reccommendation</Reccommendation>
    </Container>
  )
}

export default Video
