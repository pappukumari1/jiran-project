import React from "react";
import Container from "@mui/material/Container";

import { Button } from "@mui/material";
const TopBanner = ({ heading, paragrap, button }) => {
  return (
    <Container maxWidth="xl" className="p-0" >
    <div style={{backgroundColor: "#ebebf3", width: "100%" }}>
      <div style={{  width: "100%" }}>
        <div class="text-center" style={{ paddingTop: "80px", width: "100%" }}>
          <div dangerouslySetInnerHTML={{ __html: heading }} />
          {/* <h1  style={{fontWeight:'bold',fontSize:'80px'}}>{heading}</h1> */}
          <p style={{ fontSize: "18px", paddingTop: "7px" }}>{paragrap}</p>

          <Button
            class=" rounded-pill px-5 py-3 my-5"
            style={{
              fontSize: "18px",
              backgroundColor: "#9227ff",
              color: "#fff",
              borderColor: "#9227ff",
            }}
          >
            {button}
          </Button>
        </div>
        <img
          src="http://jiran360.dollopinfotech.com/assets/web/images/Path_1390.png"
          class="mt-3"
          style={{
            width: "120px",
            height: "130px",
            position: " absolute",
            right: "80px",
            bottom: "-29px",
            transform: " rotate(15deg)",
          }}
        />
      </div>
    </div>
    </Container>
  );
};
export default TopBanner;
