import React, { useState } from 'react';
import styled from 'styled-components'
import ProgressBar from './ProgressBar.js'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function UploadForm() {

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
        <Button size="large" variant="contained" color="primary" component="span" >
          Upload
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
    img{
      
     
        justify-content:center;
        align-items:center;
    }
   
    /*span {
    font-weight: bold;
    color:white;
    background-color: #0063e5;
    width: 100%;
    margin-top:15px;
    letter-spacing: 1.5px;
    font-size: 20px;
    padding : 15px 20px 15px 20px ;
    border: 1px solid transparent;
    border-radius: 50%;
    &:hover {
        background-color: #0483ee;
    }     
   }*/
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
