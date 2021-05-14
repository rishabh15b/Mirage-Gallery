import React ,{useEffect} from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "./userSlice";
//import UploadForm from './UploadForm';

const Header = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/UploadForm");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };


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
      {!userName ? (
      <Login  onClick={handleAuth}>
        LOGIN
      </Login>
      ):(
        <>
        <SignOut>
                <UserImg src={userPhoto} alt={userName} />
                <DropDown>
                  <span onClick={handleAuth}>Sign out</span>
                </DropDown>
              </SignOut>
            </>
      )}
    </Nav>
  );
};

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

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
      margin-top:3px;
    }
  }
`;

export default Header;

