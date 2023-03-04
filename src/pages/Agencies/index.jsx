import React from "react";
import SignUp1 from "../../component/Agencies/singup1";
import ManLayout from "../../layout/MainLayout";
import TopBanner from "../../util/topBanner";
import Container from "@mui/material/Container";
const data = [
  {
    url: "https://jiran360.my/assets/web/images/svg-icons/Geotargeted.svg",
    title: "Personalized Broadcast Messaging ",
    description:
      "Paying more attention to your neighborhood when aid is needed around.",
  },
  {
    url: "https://jiran360.my/assets/web/images/svg-icons/Instant_reach.svg",
    title: "Immediate Response",
    description:
      "Stay accessible to your neighborhood’s latest updates through Jiran360.",
  },
  {
    url: "https://jiran360.my/assets/web/images/svg-icons/Real_impact.svg",
    title: "Extensive Networking",
    description:
      "Be sure to reach the experts needed around you, to build better connection and create further awareness within the neighborhood.",
  },
];
const Agencies = () => {
    const description=(
        <>Creating better communication through public agencies and other services needed among users of <br/>
        <span className="text-dark fw-bold">Jiran360,</span> allocating to on-going community needs and safety.</>
    )
  return (
    <Container maxWidth="xl" className="p-0">
      <ManLayout>
        <div style={{ paddingTop: "85px" }}>
          <TopBanner
            heading="<h1>Jiran<span class='text-danger'>360</span> for Public Agencies<h1>
"
            paragrap={description}
            button="get Started"
          />
          <div class="row mx-md-n5  mt-5 mb-5" style={{width:"100%"}}>
            <div class="col-12 col-sm-6 px-md-5 mt-5 me-5 ms-5 pt-5  pe-5 ps-5">
              <h2>
                Get introduced to the <br />
                <span class="text-danger">Neighborhood</span> you serve
              </h2>
              <p class="mt-3">
                Jiran360 offers a perfect communication platform
                <br />
                for neighborhood users and public agencies.
              </p>
            </div>
          </div>
          <div class="row mx-md-n5  " style={{width:"100%"}}>
            
            <div class="col-12 col-sm-6 px-md-5 mt-5">
              <div class="d-flex flex-column mt-5 ms-5 mb-5  pb-5 gap-4">
                {data.map((list, index) => {
                  return (
                    <div
                      class="card   pt-2 ps-3 box1 pb-2"
                      style={{ width: "35rem", height: "8rem" }}
                    >
                      <div class="card-body  d-flex flex-row ">
                        <div
                          class="p-3 "
                          style={{
                            width: "70px",
                            height: "70px",
                            backgroundColor: "white",
                            boxShadow:" 0px 9px 37px rgb(146 39 255 / 17%)"
                          }}
                        >
                          <img src={list.url} />
                        </div>
                        <div class="pe-4 ps-4">
                          <h4 class="card-subtitle mb-2  ">{list.title}</h4>
                          <p class="card-text  text-muted">
                            {list.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="col-12 col-sm-6 px-md-5 mt-5">
              <img src="https://jiran360.my/assets/web/images/svg-icons/serve_Neighborhoods.svg" />
            </div>
          </div>
          <div class="mb-5">
            <SignUp1 />
          </div>
        </div>
      </ManLayout>
    </Container>
  );
};
export default Agencies;
