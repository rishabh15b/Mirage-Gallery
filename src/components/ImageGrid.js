import React from 'react'
import styled from 'styled-components';
import UseFirestore from './UseFirestone';

const ImageGrid = (/*{ setSelectedImg }*/) => {
        const { docs } = UseFirestore('images');
    return (
        <Row>
            {docs && docs.map(doc => (
        <Column key={doc.id} /*onClick={() => setSelectedImg(doc.url)}*/>
          <img src={doc.url} alt="uploaded pic"/>
        </Column>
      ))}
        </Row>
    )
}

const Row = styled.section`
  
  //flex-wrap: wrap;
  
  
  padding: 0;
  margin-top:20px;
  display: grid;
  grid-template-columns: 20fr 20fr 20fr 20fr 20fr;
  grid-gap: 20px;

`;

const Column = styled.section`
  //::before  flex: 25%;
  //::beforemax-width: 25%;
  //::beforepadding: 0 4px;
  


  overflow: hidden;
  height: 0;
  padding: 50% 0;
  /* padding controls height, will always be perfectly square regardless of width */
  position: relative;
  opacity: 0.8;

  img{
  //  margin-top: 8px;
  //vertical-align: middle;
  //width: 100%;

  min-width: 100%;
  min-height: 100%;
  max-width: 150%;
  position: absolute;
  top: 0;
  left: 0;
  }

`;





export default ImageGrid
