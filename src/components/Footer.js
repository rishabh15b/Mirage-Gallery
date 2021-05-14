import React from 'react'
import styled from 'styled-components';
function footer() {
    return (
        <FootPage>
            <DisplayName>
                RISHABH BALAIWAR
            </DisplayName>
            <CraftedAll>
            <Crafted>
                Crafted with <img src="/assets/logoo.png" alt=""></img> and 
            </Crafted>
            <Crafted_f>
            <img src="/assets/firebase_logo.png" alt=""></img> 
            </Crafted_f>
            </CraftedAll>
            <Reach>
                <a href="https://github.com/rishabh15b"><img src="/assets/github.png" alt=""></img></a>
                <a href="https://www.linkedin.com/in/rishabh-balaiwar-167685183/"><img src="/assets/linkedIn.png" alt=""></img></a>
                <a href="https://www.instagram.com/rishabh_balaiwar/"><img src="/assets/instagram.png" alt=""></img></a>
            </Reach>
        </FootPage>
    )
}

const FootPage = styled.div`
  /* left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center; */
    top:0;
    left:0;
    right:0;
    height:100px;
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,55,29,1) 50%, rgba(252,176,69,1) 100%);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:50px 80px;
    color: hsl(0,0%,95.3%,1);
    letter-spacing:10px;
    z-index:3;
`;

const DisplayName = styled.div`
    font-size:18px;
`;
const CraftedAll = styled.div`
    font-size:14px;
    display:flex;
    justify-content:center;
    align-items:center;
    letter-spacing:8px;
`;

const Crafted = styled.div`
    
    margin-top:5px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    img {
        width:40px;
    }
`;


const Crafted_f = styled.div`
    font-size:10px;
    margin-top:5px;
    margin-right:102px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    
    img{
        width:25px; 
    }
`;

const Reach = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    background-color:white;
    width:220px;
    height:45px;
    border-radius:30px;
    img {
        margin-top:4px;
        width:40px; 
    }
`;




export default footer;
