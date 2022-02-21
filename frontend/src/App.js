import React from 'react'
import ReactDOM from 'react-dom'

import { Form, IconButton, Radio, RadioGroup, Uploader } from 'rsuite';
import './App.css';
import FileUploadIcon from '@rsuite/icons/FileUpload';

function App() {
  const [value, setValue] = React.useState('1');
  const [file, setFile] = React.useState();
  
  const SELECTED_CLOUD = {
    1: 'AWS',
    2: 'Google Cloud'
  }
  
  
  return (
    <div className="text-center div-center">
      {console.log(file)}
      <h4>
        Cloud File Uploader
      </h4>

      
      <RadioGroup className="inline-flx" name="radioList" inline appearance="picker" defaultValue="1">
        <span style={{display: 'inline-block', marginTop: '9px'}}>Select Cloud To Be Upload: </span>
        <Radio className="margin-radio" value='1' onChange={(value)=>{setValue(value)}}>AWS</Radio>
        <Radio className="margin-radio" value='2' onChange={(value)=>{setValue(value)}}>Google Cloud</Radio>
      </RadioGroup>

      
      {/* <IconButton className="btn" icon={<FileUploadIcon />} color="yellow" appearance="primary">
        Upload File
      </IconButton> */}
      <div>
        <input type="file" onChange={(evt) => setFile(evt.target.files[0])}/>
      </div>

    </div>
  );
}

export default App;
