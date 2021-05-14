import React, { useEffect,useState } from 'react';
import styled from 'styled-components'
import ProgressBar from './ProgressBar.js'
import { makeStyles } from '@material-ui/core/styles';
import AddAPhotoRoundedIcon from '@material-ui/icons/AddAPhotoRounded';
import Button from '@material-ui/core/Button';
import {  useSelector } from "react-redux";
import { selectUserName } from "./userSlice";

function UploadForm() {

    const userName = useSelector(selectUserName);

    useEffect(() => {
    },[userName]);


    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);


    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            
          },
        },
        input: {
          display: 'none',
        },
      }));
      const classes = useStyles();
    const types = ['image/png', 'image/jpeg'];
    const handleChange = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
        }

    }


    return (
        <Content>
            <FormGroup>
                <label htmlFor="contained-button-file">
                    <input type="file" accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
         onChange={handleChange} />
        <Button variant="contained" color="primary" component="span" 
        style={{borderRadius:'50px', border:'2px solid white'}}>
         <span> < AddAPhotoRoundedIcon style={{fontSize:'30px'}} /></span>
        </Button>
        
        </label>
                <Output>
                    {error && <ErrorDisplay>{error}</ErrorDisplay>}
                    {file && <NoError>{file.name}</NoError>}
                </Output>
            </FormGroup>
            {file && <ProgressBar file={file} setFile={setFile} />}
        </Content>
    )
}

const Content = styled.form`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

`;


const FormGroup = styled.div`
    display:flex;
    flex-direction:column;
    margin-top: 30px ;
    text-align: center; 
    input {
    height: 0;
    width: 0;
    opacity: 0;
    }   
span {
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight: bold;
    width: 100%;
    letter-spacing: 1.5px;
    &:hover {
        background-color: #0483ee;
    }     
   }
`;

const ErrorDisplay = styled.div`
    color: red;
`;

const Output = styled.section`
    height: 60px;
    font-size: 0.8rem;
    margin-top:20px;
    
`;

const NoError = styled.div`
    font-size:15px;
    font-weight:bold;

`;

export default UploadForm
