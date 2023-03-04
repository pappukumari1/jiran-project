import React from "react";
// import "./index.css";
import Container from '@mui/material/Container';

const SignUp1=()=>{
    return(
    <Container maxWidth="xl" className="p-0">
    <div class="pt-5 text-center" style={{backgroundColor:"#f7f1f9"}}>
        <div className="text-center">
        <h1 class="mt-3 mb-3">Get  
<span className="text-danger "> Started</span></h1>
<h6>Submit an application today to get started with<br/>
using <span class="text-black">Jiran</span><span class="text-danger">360</span>.</h6>
</div>
<div class="pt-5 mt-3" style={{width:"100%"}}>
{/*  */}

<button class=" btn btn-primary rounded-pill pt-3 pb-3 pe-5 ps-5" style={{position:"relative",left:"37rem",bottom:"125px"}} >SING UP <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
</svg>
 </button>
 
     <img src="https://jiran360.my/assets/web/images/svg-icons/BOTTOM_SECOND02_fnl.svg " />
    </div>
    </div>
    </Container>
    )
}
export default SignUp1;