import React from 'react'
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo>
        <img src="/assets/white_logo.png" alt="Mirage Logo" />
      </Logo>
      <NavHeading>
        <NavHeadingMain>
          MIRAGE
      </NavHeadingMain>
      <NavHeadingSub>
           IET LUCKNOW
      </NavHeadingSub>
      </NavHeading>
      <Login >
        LOGIN
      </Login>
    </Nav>
  )
}

const Nav = styled.nav`
    position:static;
    top:0;
    left:0;
    right:0;
    height:100px;
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,55,29,1) 50%, rgba(252,176,69,1) 100%);
    display:flex;
    justify-content:space-between;
    align-items:center;
    
    padding:10px 60px;
    color: hsl(0,0%,95.3%,1);
    letter-spacing:10px;
    z-index:3;
    
`; 

const Logo = styled.a`
    padding:0;
    margin-top:-2px;
    width:90px;
    height:90px;
    font-size:0;
    display:inline-block;
    margin-left:-20px;
    
    img {
        display:block;
        margin-left:-8px;
        width:100%;
        
    }
`;

const NavHeading = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
`;

const NavHeadingMain = styled.div`
    font-size:35px;
    font-weight:bold;
    color:white;
    
`;

const NavHeadingSub = styled.div`
    color:white;
    margin-top:5px;
    font-size:15px;
`; 

const Login = styled.div`
    font-size:16px;
    background-color: rgb(0,0,0,0.6);
    padding: 8px 16px;
    margin-right:-15px;
    text-transform: uppercase;
    letter-spacing:1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    
    } 
`;
export default Header;

