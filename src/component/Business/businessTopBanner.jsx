import { Button } from "@mui/material";
import React from "react";
// import "./index.css";

const BusinessTopBanner = () => {
  return (
    <div class="p-5" style={{ backgroundColor: "#f7f1f9" }}>
      <div className="text-center">
        <h1 class="mt-3 mb-3">
          <span className="text-danger "> Choose </span>Your Strength
        </h1>
        <h6>
          Have a separate business account to support your neighborhood better.
          <br />
          Fill the demand gap between supply needed, to create a better
          community
        </h6>
      </div>
      <div class="p-5 mt-3 ">
        {/*  */}

        <div
          class="card   pt-2 ps-3  pb-2 "
          style={{ width: "40rem", height: "10rem", marginLeft: "270px" }}
        >
          <div class="card-body  d-flex flex-column ">
            <h5>Use in current accounts or create new</h5>
            <Button
              class="pt-3 pb-3 mt-2"
              style={{ border: "1px dashed #0c12c7", borderRadius: "8px" }}
            >
              Use new account for business
            </Button>
          </div>
        </div>

        <img
          src="https://jiran360.my/assets/web/images/create_business_account_bg.png"
          class=""
        />
      </div>
    </div>
  );
};

export default BusinessTopBanner;
