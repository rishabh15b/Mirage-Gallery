import React,{useEffect} from 'react';
import styled from 'styled-components';
import UseStorage from './UseStorage'
import {motion} from 'framer-motion'


function ProgressBar({ file, setFile }) {
    const { url,progress } = UseStorage(file);
    console.log(progress, url);

   useEffect(() => {
        if (url) {
          setFile(null);
        }
      }, [url, setFile]);
    
    return (
        <Bar as={motion.div} 
          initial={{width:0}}
          animate={{width: progress + '%'}}> 
         <span>{progress.toFixed(0)+'%'}</span>
        </Bar>
    )
}

const Bar = styled(motion.div)`
    height:22px;
    background:white;
    border-radius:11px;
    span{
      display:flex;
      margin-top:2px;
      font-size:17px;
      justify-content:center;
      align-items:center;
      font-weight:bold;
    }
    
    
    
  
`;

export default ProgressBar
