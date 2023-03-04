import * as React from 'react';
import "./index.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';



export default function FormDemo() {
  return (
    <div className=' pt-5 pb-5 px-4' style={{backgroundColor:"white",marginLeft:"50px",boxShadow:"0px 0px 1px 0px",borderRadius:"8px"}}>
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Typography style={{borderBottom:"1px solid grey"}}>Enter the details and <span className='fw-bold'>Create your Account</span></Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>Street Address</Typography>
        <TextField id="standard-basic" placeholder='jalan SS21/1a, Petaling jaya'  variant="standard" style={{width:"70%"}} />
        </Grid>
        <Grid item xs={4}>
          <Typography>Postcode</Typography>
        <TextField id="standard-basic" placeholder='Postcode'  variant="standard" />
        </Grid>
        <Grid item xs={12}>
          <Typography>State</Typography>
        <TextField id="standard-basic" placeholder='State' variant="standard"style={{width:"100%"}} />
        </Grid>
        <button class=" btn btn-primary rounded-pill mt-5 px-5 py-3 text-center btnIn" style={{marginLeft:"150px"}}  > join Your neighborhood
 </button>
      </Grid>
    </Box>
    </div>
  );
}
