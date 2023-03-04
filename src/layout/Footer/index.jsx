import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
  } from 'reactstrap';
 const Footer= () =>{
  return (
    <Container maxWidth="xl" className='p-0'>
    <MDBFooter bgColor='white' className='text-center text-lg-start ' style={{paddingTop:"80px"}}>
     

      <section className=''>
        <MDBContainer className='mt-5' style={{paddingBottom:"80px",borderBottom:"1px solid black"}}>
          <MDBRow >
            <MDBCol >
              <h4 className=' mb-4'>
                
                Company
              </h4>
              <p>
            <ul className='d-flex flex-column gap-3'>
                <li>
              <NavLink href='/about'>About as</NavLink>
              </li>
              <li>
              <NavLink>Help center</NavLink>
              </li>
              <li>
              <NavLink>Privacy Police</NavLink>
              </li>
              <li>
              <NavLink>Terms & Condition</NavLink>
              </li>
              </ul>
              </p>
            </MDBCol>

            <MDBCol >
              <h4 className=' mb-4'>Neighbours</h4>
              <p>
        <ul  className='d-flex flex-column gap-3'>
            <li>
                <NavLink href="/neighbours">Neighborhoods</NavLink>
            </li>
            <li>
                <NavLink href="/agencies">Public Agency</NavLink>
            </li>
        </ul>
        </p>
            </MDBCol>



           
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'white' }}>
        © 2022.Jiran360.
        <a className='text-reset fw-bold' href='http://jiran360.dollopinfotech.com/'>
        All rights reserved.
        </a>
      </div>
    </MDBFooter>
    </Container>
  );
}
export default Footer;