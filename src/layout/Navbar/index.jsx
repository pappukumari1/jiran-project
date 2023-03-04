import "./index.css";
import React, { useState } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Navbars = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar
        color="faded"
        light
        className=""
        style={{
          backgroundColor: " #fff",

          boxShadow: " 0px 4px 16px rgb(0 0 0 / 2%)",
          position: "fixed",

          top: "0px",
          left: "0px",
          zIndex: "999",
          width: "100%",
          padding: "10px",
          width: "100%",
        }}
      >
        <div class="p-2">
          <NavLink href={"/"}>
            <img src="https://jiran360.my/assets/web/images/logo.svg" />
          </NavLink>
        </div>
        <div
          className="d-flex p-2 gap-5 ms-5 active-tab mob-res align-items-center   mb-2 mb-lg-0"
          sx={{ fontFamily: "Outfit-R" }}
        >
          <div className="box2">
            <NavLink href={"/about"}>
              {" "}
              <MDBIcon icon="gem" className="ms-0" />
              About
            </NavLink>
          </div>
          <div className="box2">
            <NavLink href={"/neighbours"} className="box2">
              Neighbours
            </NavLink>
          </div>
          <div className="box2">
            <NavLink href={"/agencies"} className="box2">
              {" "}
              Agencies
            </NavLink>
          </div>
          <div className="box2">
            <NavLink href={"/business"} className="box2">
              Business
            </NavLink>
          </div>
          <div className="box2">
            <NavLink href={"/contact"} className="box2">
              Contact us
            </NavLink>
          </div>
          <div>
            <span class="vr "></span>
          </div>
          <div
            style={{
              color: "red",
              fontSize: "medium",
              borderBottom: "1px solid red",
            }}
          >
            <NavLink href={"/singin"}>
              <span class="material-icons">
                SING IN
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="red"
                  style={{ color: "red" }}
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z" />
                  </g>
                </svg>
              </span>
            </NavLink>
          </div>
          <NavLink href={"/createanaccount"}>
            <button
              type="button"
              className="btn rounded-pill p-2 "
              style={{ borderColor: "#9227ff", color: "#9227ff" }}
              data-toggle="button"
              aria-pressed="false"
              autocomplete="off"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#5714af"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
              </svg>{" "}
              Create an Account
            </button>
          </NavLink>
        </div>

        {/* <NavbarBrand href="/" className="me-auto">
          reactstrap
        </NavbarBrand> */}
        {/* <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse> */}
      </Navbar>
    </div>
  );
};

export default Navbars;
