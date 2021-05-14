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
            transition = {{delay:0}}  />
          </Column>
       
      ))}
    </Row>

  )
}



const Row = styled.section`  
  
  padding: 0px;
  margin-top:30px;
  display: grid;
  grid-template-columns: 18fr 21fr 17fr 19fr ;
  grid-gap: 30px;
  
`;

const Column = styled(motion.div)`   
  overflow: hidden;
  height: 0;
  padding-block:40% 35% ;
  /* padding controls height, will always be perfectly square regardless of width */
  position: relative;
  opacity: 0.8;

  img{
  border: 6px solid whitesmoke;
  /* min-width: 100%;
  min-height: 100%; */
  width:100%;
  height:100%;
  position: absolute;
  top: 0;
  left: 0;
  }

`;





export default ImageGrid
