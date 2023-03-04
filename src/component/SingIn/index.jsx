import React from "react";
import { Button, NavLink } from "reactstrap";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

import { Container, Typography } from "@mui/material";
import LogIn from "./Login";

const SingIn1 = () => {
  return (
    <Container maxWidth="xl" className="p-0">
      <div className="d-flex flex-row " style={{ width: "100%" }}>
        <div className="position-fixed" style={{ zIndex: 1}}>
          <img
            src="https://jiran360.my/uploads/Profile/93af804831b39966f438a1e2e33e5f8b_1.png"
            width={"270px"}
          />
        </div>
        <div style={{width: "270px"}}></div>
        <div>
          <div
            className="h-25% bg-light d-flex flex-row px-5 py-3 "
            style={{ gap: "470px" }}
          >
            <div className="text-start">
              <NavLink href={"/"}>
                <img src="https://jiran360.my/assets/web/images/logo.svg" />
              </NavLink>
            </div>
            <div className=" d-flex flex-row text-end gap-5">
              <p className="pt-2">Don't have an account?</p>
             
              <NavLink href={" /createanaccount"}>
              <Button className="rounded-pill put" style={{backgroundColor:"white", borderColor:"rgb(113, 14, 212)",color:"rgb(113, 14, 212)"}}> <i class="bi bi-person"></i> create an account</Button>
              </NavLink>
            </div>
          </div>
          <div>
            <div className="d-flex flex-row m-5 gap-2">
              <h1 className=" fw-bold">
                {" "}
                <span style={{ color: "red" }}>Welcome </span>Jiran!{" "}
              </h1>
              <p
                className=" mt-3"
                style={{
                  borderBottom: "1px dashed grey",
                  width: "585px",
                  height: "10px",
                }}
              ></p>
            </div>
            <p className=" px-5">
              Please enter your{" "}
              <span className="text-dark fw-bold">
                Email ID / Mobile Number
              </span>{" "}
              and <span className="text-dark fw-bold">Password</span> to login
              <br />& access your account.
            </p>
          </div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <LogIn/> 
                <div className="d-flex flex-row gap-5">
                  <p className="p-4 text-start me-5">Forgot password?</p>
                  <p className=" p-4 text-end ms-5 fw-bold">Recover Now</p>
                </div>
              </Grid>
              <Grid
                item
                xs={6}
                className="pt-5 mt-5  d-flex justify-content-center "
              >
                <div className="d-flex flex-column gap-5">
                  <Typography className="fw-bold fs-5">
                    or continue with
                  </Typography>
                  {/* <p className="ft1" >f</p> */}
                  <button className="  rounded-pill py-2 px-5 btn2">
                  <img src="https://jiran360.my/assets/web/images/svg-icons/facebook.svg" style={{width: '30px', padding:"8px"}}/>
                    FACEBOOK
                  </button>
                  {/* <p className="gt1">G</p> */}
                  <button class="   rounded-pill py-2 px-5 btn3 ">
                  <img src="https://jiran360.my/assets/web/images/svg-icons/google.svg" style={{width: '40px', padding:"8px"}}/>
                    GOOGLE
                  </button>
                </div>
              </Grid>
            </Grid>
          </Box>
          <div className="text-center footer Pt-5">
            {" "}
            <p className="p-3">© 2022. Jiran360. All rights reserved.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default SingIn1;
