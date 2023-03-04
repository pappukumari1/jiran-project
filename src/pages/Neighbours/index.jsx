import React from "react";
import ManLayout from "../../layout/MainLayout";
import SignUp from "../../util/SignUp";
import TopBanner from "../../util/topBanner";
import "./index.css";


// import TopBanner from "../topBanner";
// import SignUp from "../SignUp";
// import ManLayout from "../../MainLayout";
const data=[
    {
        url:"https://jiran360.my/assets/web/images/svg-icons/useful.svg",
        title:"One-Stop Information",
        description:"Stay on top of the latest news around your Jiran360. "
    },
    {
        url:"https://jiran360.my/assets/web/images/svg-icons/private.svg",
        title:"Stay Protected",
        description:"Be sure that privacy stays amongst your Jiran360 only"
    },
    {
        url:"https://jiran360.my/assets/web/images/svg-icons/proven.svg",
        title:"Be Trustworthy",
        description:"Over XXX users have joined Jiran360"
    },
]
const Neighbours=()=>{
    return(
        <ManLayout>
            <div style={{paddingTop:"85px"}}>
            <TopBanner heading="<h1>Recognize Your Jiran <span class='text-danger'>360!</span>
</h1>"
 paragrap="Opportunities are nearby if you keep looking

" button="Join Your Neigbourhood"/>
<div class ="m-5 " style={{borderBottom:" 1px dashed black",paddingBottom:"100px" ,marginLeft:"80px",marginRight:"80px"}}>

 <div class="row mx-md-n5  mt-5 mb-5">
                <div class="col-12 col-sm-6 px-md-5 mt-5">
                  <div>
                    <img src="https://jiran360.my/assets/web/images/svg-icons/multicultural-community.svg"/>
                  </div>
                </div>
                <div class="col-12 col-sm-6 px-md-5 mt-5 ">
                    <div class="me-5 ">
                        <h1 class ="p-3" style={{fontSize:"45px" ,fontWeight:"bold"}}>Know More to Accept<br/>
More with Jiran<span class="text-danger">360</span>
</h1>
                  <p style={{fontSize:"19px"}}>Jiran360 focuses on providing up-to-date information and valuable services among your neighborhood, a platform of getting to know your neighbors better,
                     through social events and casual gathering,
                      providing public agencies and services,
                       so be sure to get support when it is needed!</p>
                       </div>
                </div>
               </div>   
</div>

        <div class="text-center mt-5 mb-5 me-5 ms-5 pt-5 pb-5 pe-5 ps-5">

<h1>Let’s connect through Jiran<span class="text-danger" > 360</span></h1>
<p class="pt-2" style={{fontSize:"19px"}}>Connect and participate around your neighbourhood through Jiran360, an anticipating place to socialise!</p>
<div class="d-flex flex-row mt-5 ms-5 mb-5 pt-5 pb-5 gap-5" >
            {data.map((list, index) => {
              return (
                <div class="card  text-center pt-3 ps-3 box1 bg-light" style={{ width: "25rem",height:"18rem" }}>
                  <div class="card-body text-center">
                    <div class="p-3  mb-3" style={{width: "80px",height:"60px",borderRadius:"8px",boxShadow:"0px 9px 37px rgb(146 39 255 / 17%)",backgroundColor:"white",marginLeft:"100px"}} >
                    <img src={list.url} />
                    </div>
                    <h3 class="card-subtitle mb-2  ">{list.title}</h3>
                    <p class="card-text  text-muted">{list.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
            </div>
            <div>
                <SignUp/>
            </div>
        </ManLayout>
    )

}
export default Neighbours;