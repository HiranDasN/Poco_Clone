import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
        <Navbar className=" p-2  bg-dark" >
        <Container>
          <Navbar.Brand href="#">
            <img
              src="https://i01.appmifile.com/webfile/globalimg/i18n/poco/POCO.png"
              width="108px"
              height="58px"
              className="ms-4 ps-1 position-absolute"
              style={{marginTop:'-15px'}}
              alt="no logo"
            />
            <Navbar.Text className='text-light ms-auto' >
            <a href="#login" style={{textDecoration:'none',marginLeft:'200px',color:'white',fontSize:'small'}} className='me-3'>GLOBAL</a><span style={{color:"white",fontSize:'13.5px'}}>|</span>
            <a href="#login" style={{textDecoration:'none',color:'white',fontSize:'small'}} className='ms-3'>POCO COMMUNITY</a>
            <a href="#login" style={{textDecoration:'none',marginLeft:'698px',color:'white',fontSize:'small'}} className='me-3'>SIGN IN</a><span style={{color:"white",fontSize:'13.5px'}}>|</span>
            <a href="#login" style={{textDecoration:'none',color:'white',fontSize:'small'}} className='ms-3'>SIGN UP</a>
          </Navbar.Text>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header