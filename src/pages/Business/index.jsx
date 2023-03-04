import React from "react";
import BusinessTopBanner from "../../component/Business/businessTopBanner";
import ManLayout from "../../layout/MainLayout";

const Business = () => {
  return (
    <ManLayout>
      <div style={{ paddingTop: "85px" }}>
        <BusinessTopBanner />
        <div className="d-flex justify-content-center">
          {" "}
          <p className="">© 2022.Jiran360.All rights reserved.</p>
        </div>
      </div>
    </ManLayout>
  );
};
export default Business;
