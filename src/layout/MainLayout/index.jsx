import { Container } from "@mui/material";
import React from "react"
import Footer from "../Footer";
import Navbars from "../Navbar";



const ManLayout=({children})=>{

    return(
        
          <Container maxWidth='xl' className="p-0">
          < Navbars/>
        {children}
        <Footer/>
        </Container>
        
    )
}
export default ManLayout;