import * as React from "react";
 import "./index.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function SingUp() {
  return (
    <div
      className=" pt-5 pb-5 px-4"

    >
      <Box className=" border rounded p-4 bg-shadow" sx={{ flexGrow: 1 }}>
        <Grid container className="d-flex flex-column gap-4  p-3 " spacing={2}>
          <Grid xs={12} >
            <Typography className="input fw-bold pb-2 fs-5">Create Account
</Typography>
          </Grid>
          <Grid className="gap-2" xs={12}>
            <Typography className=" fw-bold">Email ID</Typography>
            <i class="bi bi-envelope text-danger fs-40 fw-bold icon" ></i>
            <input
              className="input w-100 ps-4" 
              placeholder=" Enter your Email ID/ Mobile Number"
            />
          </Grid>
          <Grid  className="gap-2" xs={12}>
            <Typography className=" fw-bold">Password</Typography>
            <i class="bi bi-eye-slash-fill icon22"></i>
            <i class="bi bi-lock text-danger fs-40 fw-bold icon"></i>
            <input className="input w-100 pb-2 ps-4" placeholder="**************" />
          </Grid>
          <Grid  className="gap-2" xs={12}>
            <Typography className=" fw-bold">Confirm Password</Typography>
            <i class="bi bi-eye-slash-fill icon22"></i>
            <i class="bi bi-lock text-danger fs-40 fw-bold icon"></i>
            
            <input className="input w-100 pb-2 ps-4" placeholder="**************" />
          </Grid>
          <Grid xs={12} className="text-center ">
            <button class="rounded-pill py-2 px-5 btn1 w-100"> Create to Registration <i class="bi bi-box-arrow-in-right fs-5"></i> </button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
