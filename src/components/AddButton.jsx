import * as React from 'react';
import { useState , useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import CryptoJS from 'crypto-js';

import Webcam from 'react-webcam';



const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function FloatingActionButtons() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const [selectedFile, setSelectedFile] = useState(null); 
    const [image_hash, set_image_Hash] = useState("");
    const [imageSrc, setImageSrc] = useState(null);


    const webcamRef = useRef(null);
    const [showWebcam, setShowWebcam] = useState(false);

    const generate_image_Hash = (imageSrc) => {
      set_image_Hash(CryptoJS.MD5(imageSrc).toString(CryptoJS.enc.Hex));
    };




    

    const handleImageUpload = async (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        setSelectedFile(event.target.files[0]);
        reader.onloadend = () => {
          setImageSrc(reader.result);
          generate_image_Hash(imageSrc);
        };
        reader.readAsDataURL(file);
      }
    };

    const handleControlledCapture = () => {
      const imageSrc = webcamRef.current.getScreenshot(); 
      setImageSrc(imageSrc);
      generate_image_Hash(imageSrc);
      setShowWebcam(false); 
      // setSelectedFile(webcamRef.current.getScreenshot);
    };

    const openWebcam = () => {
      setShowWebcam(true);
    };

    return (
    <>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
    </Box>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a Post
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The post would be uploaded to IPFS for transparency.
            Please avoid posting any false information.
          </Typography>
            <div className='mt-3'>
            <TextField className='w-full' id="standard-basic" label="Title" variant="standard" />
            </div>

            <div className='mt-3'>
            <TextField
                id="standard-multiline-flexible"
                label="Description"
                className='w-full'
                multiline
                maxRows={4}
                variant="standard"
           />
            </div>
            
            
           <div className='grid grid-cols-2 '>
           {showWebcam && (
            <div>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={640}
                height={480}
              />
               <div className="GD_custom_Button_Container">
               <div className='pr-3 pt-5'>
                    <Button 
                        className='col-span-1  w-full h-full text-wrap' 
                        variant="outlined" 
                        onClick={ handleControlledCapture }      
                    >
                        Controlled Capture 
                    </Button>
                </div>
              </div>
             
            </div>
          )}
          {!showWebcam && !imageSrc && (
                <div className='pr-3 pt-5'>
                <Button 
                    className='col-span-1  w-full h-full text-wrap' 
                    variant="outlined" 
                    onClick={ openWebcam }      
                >
                    Controlled Capture 
                </Button>
            </div>
          )}




                <div className='pr-2 pt-5'>
                    <Button 
                        className='col-span-1 w-full h-full text-wrap'
                        component="label"
                        role={undefined}
                        variant="outlined"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        onInputCapture={
                            handleImageUpload
                        }
                    >
                        Image Upload
                        <VisuallyHiddenInput type="file" />
                    </Button>
                </div>
           </div>

           <div id='#uploadedImageDisplay' className='mt-4'>
                {selectedFile && ( // Conditionally render image preview
                <img src={URL.createObjectURL(selectedFile)} alt="Selected Image" />
        )}
           </div>
           
           <div className='mt-3'>
            <TextField className='w-full' id="standard-basic" label="Hash" variant="standard" value={image_hash} disabled/>
            </div>

           <div className='w-100 mt-5'>
           <Button 
                variant="contained" 
                onClick={handleClose}
                className='w-full ' 
                size='large' 
                disableElevation 
                
            >
                Upload
            </Button>
           </div>

           


        </Box>
      </Modal>
    </>
  );
}


