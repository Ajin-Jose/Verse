import * as React from 'react';
import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UserImage from './UserImage';

import TextField from '@mui/material/TextField';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>   
    <CardContent>
    <Typography variant="h5" component="div">
        Friends
      </Typography>
      
      <div>
      <TextField className='w-full ' id="standard-basic" label="Search Username" variant="standard" /> 
      </div>

      <div className='mt-5 mb-5'>
      <Button 
          className='col-span-1  w-full h-full text-wrap' 
          variant="outlined"     
       >
          Add Friend
      </Button>
      </div>

      <Typography className='text-center' variant="h4" component="div">
        My Friends
      </Typography>

    </CardContent>

  </React.Fragment>
);

export default function OutlinedCard({friends}) {
  

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>

  );
}
