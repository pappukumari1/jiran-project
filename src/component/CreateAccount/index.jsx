import React from "react";
import { Button, NavLink } from "reactstrap";
import FormDemo from "../Home/Form";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

import { Container, Typography } from "@mui/material";
import SingUp from "./SingUp";

const CreatAccont1 = () => {
  return (
    <Container maxWidth="xl" className="p-0">
      <div className="d-flex flex-row" style={{ width: "100%" }}>
        <div className="position-fixed" style={{ zIndex: 1 }}>
          <img
            src="https://jiran360.my/assets/web/images/signup_left.png"
            width={"270px"}
          />
        </div>
        <div style={{ width: "270px" }}></div>
        <div>
          <div
            className="h-25% bg-light d-flex flex-row px-5 py-3 "
            style={{ gap: "492px" }}
          >
            <div className="text-start">
              <NavLink href={"/"}>
                <img src="https://jiran360.my/assets/web/images/logo.svg" />
              </NavLink>
            </div>
            <div className=" d-flex flex-row text-end gap-5">
              <p className="pt-2">Don't have an account?</p>
              <NavLink href={"/singin"}>
                <Button
                  className="rounded-pill px-4 py-1 put"
                  style={{ backgroundColor: "white" ,borderColor:"rgb(113, 14, 212)",color:"rgb(113, 14, 212)"}}
                >
                  LogIn Now <i class="bi bi-box-arrow-in-right "></i>
                </Button>
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
                <SingUp />
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
                  <button className=" gap-2 rounded-pill py-2 px-5 btn2">
                    <img src="https://jiran360.my/assets/web/images/svg-icons/facebook.svg" style={{width: '30px', padding:"8px"}}/>
                    FACEBOOK
                  </button>
                  <button class="   rounded-pill py-2 px-5 btn3 ">
                    <img src="https://jiran360.my/assets/web/images/svg-icons/google.svg" style={{width: '40px', padding:"8px"}}/>
                    GOOGLE
                  </button>
                </div>
              </Grid>
            </Grid>
          </Box>
          <div className="text-center footer pt-5 ">
            {" "}
            <p className="p-3">© 2022. Jiran360. All rights reserved.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default CreatAccont1;
