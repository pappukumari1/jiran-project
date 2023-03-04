
import react from "react";

import { Route, Routes } from "react-router-dom";
import CreatAccont1 from "../../component/CreateAccount";

import About from "../../pages/About";
import Agencies from "../../pages/Agencies";
import Business from "../../pages/Business";
import Contact from "../../pages/Contact us";
// import CreatAccont from "../../pages/CreateAnAccount";
import Home from "../../pages/Home";
import Neighbours from "../../pages/Neighbours";
import SingIn from "../../pages/SingIn";



const AllRoutes=()=>{
    return (
        <div>
            <  Routes>
            <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/neighbours" element={<Neighbours/>}/>
                <Route path="/agencies" element={<Agencies/>}/>
                <Route path="/business" element={<Business/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/singin" element={<SingIn/>}/>
                <Route path="/createanaccount" element={<CreatAccont1/>}/>
                
              
            </Routes>
        </div>
    )
}
export default AllRoutes;