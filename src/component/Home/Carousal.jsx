import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Carousal = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 800 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 800, min: 445 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 445, min: 200 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 200, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive} style={{ gap: "30px" }}>
        <div
          class="p-3 m-3 text-center"
          style={{ boxShadow: "0px 1px 5px 0px", marginLeft: "10px" }}
        >
          <img src="https://jiran360.my/assets/web/images./svg-icons/party.svg" style={{ width:"50px",height:"50px" }} />
          <h3 class="my-3">Security</h3>
          <p style={{fontSize:"18px"}}>
            All registred neighbors are verified prior to registration,in order
            to be sure of staying well protected.
          </p>
        </div>
        <div
          class="p-3 m-3 text-center"
          style={{ boxShadow: "0px 1px 5px 0px", marginLeft: "10px" }}
        >
          {" "}
          <img
            src="https://jiran360.my/assets/web/images/svg-icons/verified.svg"
            style={{ width:"50px",height:"50px" }}
          />
          <h3 class="my-3">Community</h3>
          <p style={{fontSize:"18px"}}>
           Get in-touch instantly with your helpful neighbors, exciting businesses and fun-filled enventsaround you. 
          </p>
        </div>
        <div class="p-3 m-3 text-center"
          style={{ boxShadow: "0px 1px 5px 0px", marginLeft: "10px" }}>
          {" "}

          
          <img src="https://jiran360.my/assets/web/images/svg-icons/file.svg" style={{ width:"50px",height:"50px" }} />
          
          <h3 class="my-3">Latest News</h3>
          <p style={{fontSize:"18px"}}>
           Stay in the loop for the live updatesaround you, from public announcement, business related to emergency broadcast.
          </p>{" "}
        </div>
      </Carousel>
    </div>
  );
};
export default Carousal;
