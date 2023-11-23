import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/Home.css'
import Carousel from 'bootstrap'
import CardImg from './CardImg';
import VideoCard from './VideoCard';

function Home() {
  return (
    <>
    <div>
       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" data-bs-animation="fade">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i02.appmifile.com/147_operatorx_operatorx_xm/03/11/2023/d09bb6f53d3a49c9d862b98646e10588.jpg" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="https://i02.appmifile.com/343_operatorx_operatorx_xm/19/05/2023/781225cc840ff62a6a2a7eb980581694.jpg" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="https://i02.appmifile.com/760_operatorx_operatorx_xm/09/05/2023/a12e5c333ec2bdb81d75c7ddd2c6b5c2.png" className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src="https://i02.appmifile.com/742_operatorx_operatorx_xm/12/05/2023/8f58817e5b398448538afd2c09e5035e.jpg" className="d-block w-100" alt="Slide 4" />
          </div>
          <div className="carousel-item">
            <img src="https://i02.appmifile.com/280_operatorx_operatorx_xm/27/03/2023/e586163acde9bd47e278582c1cd49cde.jpg" className="d-block w-100" alt="Slide 5" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{ fontSize: '2em' }}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{ fontSize: '2em' }}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>


     <div>
     <Navbar collapseOnSelect expand="lg" className="bg- position-absolute w-100" style={{marginTop:'-609px',paddingTop:'25px'}}>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" style={{paddingLeft:'320px',fontWeight:"bold",fontSize:'15px'}}>
                <Nav.Link href="#" className='linkhvr ms-5' >POCO C65</Nav.Link>
                <Nav.Link href="#" className='linkhvr ms-4' >POCO F5 Series</Nav.Link>
                <Nav.Link href="#" className='linkhvr ms-4' >POCO X5 Series</Nav.Link>
                <Nav.Link href="#" className='linkhvr ms-4' >POCO M5s</Nav.Link>
                <Nav.Link href="#" className='linkhvr ms-4' >POCO M5</Nav.Link>
                <Nav.Link href="#" className='linkhvr ms-4' >POCO F4</Nav.Link>
                <Nav.Link href="#" className='linkhvr ms-4' >ALL PRODUCTS</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
     </div>

     <div>
      <CardImg/>
     </div>

     <div style={{marginTop:'60px',marginBottom:'180px'}} >
        <h4  style={{textAlign:'center',fontWeight:'bolder',marginBottom:'35px'}}>VIDEOS</h4>
        <VideoCard/>
     </div>
    
    </>
   
  )
}

export default Home