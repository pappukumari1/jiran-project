import React from "react";
import Carousal from "../../component/Home/Carousal";
import FormDemo from "../../component/Home/Form";
// import SignUp from "../../component/SignUp";
import ManLayout from "../../layout/MainLayout";
import SignUp from "../../util/SignUp";

const Home = () => {
  return (
    <div>
      <ManLayout>
        {/* <div className="d-flex flex-row" >
                    <div style={{display:"flex",justifyContent:"start"}}>hello</div>
                    <div style={{display:"flex",justifyContent:"end"}}> hiii</div>
                </div> */}
        <div style={{backgroundColor:"#fbf6ff",paddingBottom:"100px"}}>
        <div class="row mx-md-n5" style={{ width: "100%",paddingTop:"130px"}}>
          <div class="col px-md-5">
            <h3 class="display-4 mt-5 ms-5 " style={{fontWeight:"bold"}}>
              Your <span style={{color:"red"}}> Community </span>
              <br />
              Knows Best
              <img src="https://jiran360.my/assets/web/images/svg-icons/arrow.svg" style={{width:"200px",position:"relative",right:"30px"}} />
            </h3>
          </div>
          <div class="col px-md-5 mt-5 " style={{fontSize:"19px"}}>
            New to your neighborhood? Register to Jiran360 to keep yourself
            up-to-date with the latest news, events and get to know your
            neighbours more!
          </div>
        </div>
        <div class="row mx-md-n5" style={{ width: "100%" }}>
          <div class="col px-md-5 mt-5">
            <div >
              <FormDemo />
            </div>
          </div>
          <div class="col px-md-5 " style={{paddingTop:"138px"}}>
            <img src="https://jiran360.my/assets/web/images/Layer_2.svg" />
          </div>
        </div>
        </div>
        <div
          className="container text-center m-5 px-5 "
          style={{ 
            width: "100%",
             borderBottom: "1px dashed grey" ,paddingBottom:"80px"}}
        >
          <h1 style={{ width: "100%",paddingTop:"50px" }}>
            Stay connected with your neighborhood <br />
            using Jiran<span className="text-danger">360!</span>
          </h1>
          <p  class="pt-4" style={{ width: "100%" ,fontSize:"19px"}}>
            Gather around Jiran! Get to know your neighborhood better, filled
            <br />
            with informative support,staying up-to-date with local news, fun
            <br />
            events or even lending hands,Jiran360 is your one-stop locality.
            <br />
            A place to hire and to help, to provide and to lend, to come
            together
            <br />
            as one reliable neighborhood.
          </p>
        </div>
        {/* <div
          className="m-5 p-5"
          style={{
            width: "100%",
            paddingLeft: "150px",
            paddingRight: "150px",
            borderBottom: "2px dashed black",
          }}
        ></div> */}
        <div class="row mx-md-n5  mt-5 mb-5" style={{ width: "100%",paddingTop:"50px",paddingBottom:"100px" }}>
          <div class="col-12 col-sm-6 px-md-5 mt-5" >
            <div className=" me-5 ms-5 " >
              <h2 style={{paddingTop:"80px" ,fontSize:"38px",fontWeight:"bold"}}>
                Get-To-Know Your Jiran <span className="text-danger">360</span>
              </h2>
              <p class="pt-3" style={{fontSize:"19px"}}>
                Get-together in your neighborhood social events, stay in the
                loop on social news and get help if you need one
              </p>
            </div>
          </div>
          <div class="col-12 col-sm-6 px-md-5 mt-5">
            <div>
              <Carousal />
            </div>
          </div>
        </div>
        <div class="mt-5 " style={{ width: "100%" }}>
          {" "}
          <SignUp />
        </div>
      </ManLayout>
    </div>
  );
};
export default Home;
