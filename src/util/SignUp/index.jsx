import React from "react";
import "./index.css";


const SignUp=()=>{
    return(<div  style={{backgroundColor:"#f7f1f9"}}>
        <div className="text-center pt-5">
        <h1 class="pt-5">Connect swiftly with your<br/>
Jiran<span className="text-danger">360</span></h1>
<p class="mt-3" style={{fontSize:"18px"}}>A quick sign up to get yourself<br/>
posted about your neighborhood<br/>
or participate in the social activities with your neighbor.</p>
</div>
<div >
{/*  */}

<button class="  rounded-pill pt-3 pb-3 ps-5 pe-5 btnIn" style={{position:"relative",left:"34rem",top:"110px"}} >SING UP <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
</svg>
 </button>
 
     <img src="https://jiran360.my/assets/web/images/svg-icons/BOTTOM_SECOND02_fnl0000.svg " class="rounded" style={{position:"relative",left:"65px"}}/>
    </div>
    </div>)
}
export default SignUp;