import React from "react";
import ManLayout from "../../layout/MainLayout";
import "./index.css";
import SignUp from "../../util/SignUp";
import TopBanner from "../../util/topBanner";

const data = [
  {
    title: "Neighbours",
    description:
      "Build networking with the people in your neighbourhood, be it someone next door or those you have yet to meet.",
  },
  {
    title: "Public Agencies",
    description:
      "Create a two-way connection with the community members in order to provide benefits that they need and reach out to a wider audience.",
  },
  {
    title: "Nonprofits ",
    description:
      "Reach out to people who needs you the most and discover multiple alternatives to gain support from donors nearby.  ",
  },
  {
    title: "Large Brands ",
    description:
      "Increase brand recognition by offering services that can improve daily lives to the neighbourhood members.",
  },
];

const About = () => {
  return (
    <ManLayout>
      <div style={{paddingTop:"85px"}}>
        <TopBanner 
         heading="<h1 class='hed'>Your <span class='redd'>Opportunities</span> are just around the corner</h1>"
          paragrap="Get to know which opportunities are for you"
          button="Join Your Neigbourhood"/>
        
        <div class="d-flex flex-row mx-5 mt-5  p-5" style={{marginLeft:"200"}}>
          <h1 style={{fontSize:"40px",fontWeight:"bold"}}>
            About Jiran<span style={{color:"red"}}>360</span>
          </h1>
          <div  class ="ms-3 me-3" style={{borderBottom:"1px dashed black",width:"65%",height:"55px"}}>
          </div>
          <img src="http://jiran360.dollopinfotech.com/assets/web/images/svg-icons/about_page_about_sec_logo.svg" />
        </div>

        <div class="row mx-md-n5  mx-5  px-5" >
          <div class="col px-md-5 mt-5">
            <div class="me-5">
              <div
                style={{
                  backgroundColor: "#efe6e6",
                  width: "100px",
                  height: "100px",
                  paddingLeft: "20px",
                  paddingTop: "20px",
                }}
              >
                <img src="http://jiran360.dollopinfotech.com/assets/web/images/svg-icons/out_of_your_us.svg" />
              </div>
              <h2>Discover Your Jiran360 *</h2>
              <p>
                Jiran360 is a place where you can be sure of where to reach out
                for support around your neighborhood. From helpful neighbors to
                engaging services, even when you are looking for household
                products, Jiran360 has it all! Jiran360 stays reliable when aid
                is needed.
              </p>
            </div>
          </div>
          <div class="col px-md-5 mt-5">
            <div>
              <div class="me-5">
                <div
                  style={{
                    backgroundColor: "#efe6e6",
                    width: "100px",
                    height: "100px",
                    paddingLeft: "20px",
                    paddingTop: "20px",
                  }}
                >
                  <img src="http://jiran360.dollopinfotech.com/assets/web/images/svg-icons/neibher_hood_network.svg" />
                </div>
                <h2>One Network For All</h2>
                <p>
                  On errand to get things done? Jiran360 is here to provide
                  supply to your demands, informative news and other services
                  for you and your family. Keep in the loop with your network of
                  neighborhood, as Jiran360 stays updated from time to time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="m-5 pe-5 ps-5">
          <div style={{borderBottom:"1px dashed black",width:"95%",height:"1px"}}>
            
          </div>
        </div>
        <div class="text-center m-5 p-5">
          <h1>
            Connecting the <span class="text-danger">Neighborhood</span>
          </h1>
          <p class="mt-4" >
            A prosperous community is a community that consists of neighbours
            and organizations that assist each other in improving the
            environment.
          </p>
          <div class="d-flex flex-row mt-5 ms-5    gap-3 " >
            {data.map((list, index) => {
              return (
                <div class="card box p-4" style={{ width: "20rem",height:"18rem" }} >
                  <div class="card-body">
                    <h4 class="card-subtitle mb-2 text " >{list.title}</h4>
                    <p class="card-text  text-muted" style={{fontSize:"19px"}}>{list.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div  >
        <SignUp/>
      </div>
    </ManLayout>
  );
};
export default About;
