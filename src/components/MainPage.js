import React from 'react'
import styled from "styled-components";
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
function MainPage() {
    return (
        <Container>
            <Content>
                <HeadingLine>
                    PHOTO GALLERY
                    <Description>
                        Mirage the official photography and video editing club of IET Lucknow.
                    </Description>
                </HeadingLine>
                <UploadForm/>
                <ImageGrid />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    
`;

const Content = styled.div`
    margin-bottom:10vw;
    width:100%;
    position: relative;
    min-height: 100vh;
    color:black;
    display: flex;
    flex-direction: column;
    padding: 80px 80px;
    height:100%;
`;

const HeadingLine = styled.div`
    margin-top:20px;
    font-size:50px;
`;

const Description = styled.p`
    margin-top:20px;
    font-size: 20px;
    line-height:15px;
    letter-spacing:1.5px;
    line-height:1.6;
`;
export default MainPage;
