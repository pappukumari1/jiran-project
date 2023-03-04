import { Container, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./index.css";
const TopBanners = () => {
  return (
    <Container maxWidth="xl" className="p-0">
      <div >
        <div className="bg1" >
          <div className="d-flex flex-column  text-center  gap-2 pd125 " >
            <h1 className="h12">
              We are here for your{" "}
              <span style={{ color: "red" }}>support </span>
            </h1>
            <p className="p12">
              Enter your basic details in the form and click on the submit
              button
              <br />
              our team will reach you in{" "}
              <span className="fw-bold">24 Hours</span>{" "}
            </p>
          </div>
        </div>
        <div className="box123  " >
        
          <Box className="p-3 " sx={{ flexGrow: 1 }}>
            <Grid
              container
              className="d-flex flex-column gap-4  p-3 "
              spacing={2}
            >
              <Grid xs={12} className="p-2">
                <Typography className="input fw-bold">
                  Please enter the details
                </Typography>
              </Grid>
              <Grid className="gap-2" xs={12}>
                <Typography className=" fw-bold">Full Name</Typography>
                <input className="input w-100 " placeholder=" Your Namer" />
              </Grid>
              <Grid className="gap-2" xs={12}>
                <Typography className=" fw-bold">Email Address</Typography>
                <input
                  className="input w-100"
                  placeholder="Enter Your Email Address"
                />
              </Grid>
              <Grid className="gap-2" xs={12}>
                <Typography className=" fw-bold">Message</Typography>
                <input
                  className="input w-100"
                  placeholder="Write Your Message here"
                />
              </Grid>
              <Grid xs={4} className="text-center  btn12">
                <button class="bttn1  rounded-pill py-2 px-5  "> Submit </button>
              </Grid>
            </Grid>
          </Box>
        </div>
        <div style={{borderBottom:"1px dashed grey", height:"10px" ,margin:"80px"}}></div>
      </div>
    </Container>
  );
};
export default TopBanners;
