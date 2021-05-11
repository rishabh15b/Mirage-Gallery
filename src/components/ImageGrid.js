import React from 'react'
import styled from 'styled-components';
import UseFirestore from './UseFirestone';
import { motion } from 'framer-motion'

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = UseFirestore('images');
  return (
    <Row>
      {docs && docs.map(doc => (
        
          <Column  as={motion.div} key={doc.id} layout whileHover = {{opacity:2}} onClick={() => setSelectedImg(doc.url)}>
            <motion.img src={doc.url} alt="uploaded pic"
            initial = {{opacity:0}}
            animate = {{opacity:1}}
            transition = {{delay:1}} />
          </Column>
       
      ))}
    </Row>
  )
}

const Row = styled.section`  
  
  //flex-wrap: wrap;
  
  
  padding: 30px;
  margin-top:20px;
  display: grid;
  grid-template-columns: 5fr 5fr 5fr 5fr ;
  grid-gap: 50px;

`;

const Column = styled(motion.div)`   
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  /* padding controls height, will always be perfectly square regardless of width */
  position: relative;
  opacity: 0.8;

  img{
  border: 10px  black;
  min-width: 100%;
  min-height: 100%;
  max-width: 150%;
  position: absolute;
  top: 0;
  left: 0;
  }

`;





export default ImageGrid
