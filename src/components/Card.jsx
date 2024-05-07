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
import UserImage from '../components/UserImage';

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
    <UserImage image='https://drive.google.com/file/d/1dU6vG8isshmu8YbHbFMVT0SJCKzOBFlX/view?usp=drive_link' />
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        ajinjose01
      </Typography>
      <Typography variant="h5" component="div">
        Ajin{bull}Jose
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        0x1234567x01
      </Typography>
      <Typography variant="body2">
        User 
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
