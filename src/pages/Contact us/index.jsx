import React from "react";
import TopBanners from "../../component/contact/topBanner";
import ManLayout from "../../layout/MainLayout";
import SignUp from "../../util/SignUp";

const Contact=()=>{
    return(
        <ManLayout>
            <div style={{paddingTop:"85px"}}>
                <TopBanners/>
                <SignUp/>
            </div>
        </ManLayout>
    )

}
export default Contact;