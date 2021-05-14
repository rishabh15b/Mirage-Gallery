import React, {useState} from 'react'
import styled from "styled-components";
//import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import Footer from './Footer';
function MainPage() {

    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <Container>
            <Content>
                <HeadingLine>
                    <SubMain>
                    Photo Gallery
                    </SubMain>
                    <Description>
                        Mirage the official photography and video editing club of IET Lucknow.
                    </Description>
                </HeadingLine>
                {/* <UploadForm/> */}
                <ImageGrid setSelectedImg = {setSelectedImg}/>
                { selectedImg && <Modal selectedImg = {selectedImg} setSelectedImg = {setSelectedImg} /> }
            </Content>
            <Footer/>
        </Container>
    )
}

const Container = styled.section`
    
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    background-color:black;
    
`;

const Content = styled.div`
    margin-bottom:0vw;
    width:100%;
    position: relative;
    //min-height: 100vh;
    color:black;
    display: flex;
    flex-direction: column;
    padding: 80px 80px;
    //height:100%;
`;

const HeadingLine = styled.div`
    margin-top:5px;
    font-size:50px;
    color:white;
`;
const SubMain = styled.div`
    font-family:'Parisienne';
    font-size:150px;
    
`;

const Description = styled.p`
    margin-top:20px;
    font-size: 20px;
    line-height:15px;
    letter-spacing:1.5px;
    line-height:1.6;
`;
export default MainPage;
