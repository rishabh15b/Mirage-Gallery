import React,{useEffect} from 'react';
import styled from 'styled-components';
import UseStorage from './UseStorage'


function ProgressBar({ file, setFile }) {
    const { url,progress } = UseStorage(file);
    console.log(progress, url);

   useEffect(() => {
        if (url) {
          setFile(null);
        }
      }, [url, setFile]);
    
    return (
        <Bar style={{width: progress + '%'}}> 
         <span>{progress.toFixed(0)+'%'}</span>
        </Bar>
    )
}

const Bar = styled.div`
    height:22px;
    background:orange;
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
