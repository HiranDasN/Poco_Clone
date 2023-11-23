import React from 'react'
import { Row,Col } from 'react-bootstrap'
import "../components/Footer.css"
function Footer() {
  return (
    <>
    <div>
        <div className='footer d-flex justify-content-center align-items-center flex-column  text-light'>
            <div className='bg-light w-100' style={{paddingTop:'40px',paddingBottom:'25px'}}>
                <div className='container'>
                   <Row>
                    <Col>
                        <div className='footer d-flex justify-content-evenly align-items-evenly w-100'>
                            <div className='d-flex mb-4'>
                                <h5  style={{width:'400px',fontWeight:'bold',fontSize:'22px'}}>LET'S STAY IN TOUCH</h5>
                                <input style={{marginRight:'90px',borderRadius:'0px'}} type="text" className='form-control border text-dark bg-light w-50  p-2 ps-3' placeholder='Enter Email Address          >' />
                            </div>
                        </div>
                        <p style={{marginTop:'-40px',fontSize:'12px'}} className='text-dark'>Get updates on sales specials and more</p>
                    </Col>
    
                    <Col>
                    <div className='footer d-flex justify-content-evenly align-items-evenly w-100'>
                            <div className='d-flex mb-4'>
                                <h5 className='hws' style={{fontWeight:'bold',fontSize:'22px',marginRight:'250px'}}>FOLLOW POCO</h5>
                                <div className='position-absolute ' >
                                    <a href=""><i style={{marginLeft:'230px',fontSize:'18px'}} class="fa-brands fa-facebook-f text-dark"></i></a>
                                    <a href=""><i style={{fontSize:'18px'}} class="fa-brands fa-instagram text-dark ms-5"></i></a>
                                    <a href=""><i style={{fontSize:'18px'}} class="fa-brands fa-twitter text-dark ms-5"></i></a>     
                                </div>
                            </div>
                        </div>
                        <p className='text-dark' style={{fontSize:'12px',marginLeft:'119px',marginTop:'-35px'}}>We want to hear from you!</p>
                    </Col>
                   </Row>
                </div>
            </div>
            </div>
            
            <div className='mt-5'>
                <div>
                    <div className='container'>
                      <Row className='footer d-flex justify-content-evenly align-items-evenly w-100' >
                        <Col className='col-lg-2'>
                            <h6 style={{fontWeight:'bold',fontSize:'medium'}}>LEARN MORE</h6>
                            <div className='d-flex flex-column' style={{fontSize:'15px'}}>
                                <a href=""style={{textDecoration:'none'}} className='atag  mt-2'>POCO C65</a>
                                <a href=""style={{textDecoration:'none'}} className='atag  mt-2'>POCO F5 Series</a>
                                <a href=""style={{textDecoration:'none'}} className='atag  mt-2'>POCO C5 Series</a>
                                <a href=""style={{textDecoration:'none'}} className='atag  mt-2'>POCO M5</a>
                                <a href=""style={{textDecoration:'none'}} className='atag  mt-2'>POCO WATCH</a>
                            </div>
                        </Col>
    
    
                        <Col  className='col-lg-2'>
                        <h6 style={{fontWeight:'bold',fontSize:'medium'}}>SUPPORT</h6>
                        <div className='d-flex flex-column'style={{fontSize:'15px'}}>
                        <a href=""style={{textDecoration:'none'}} className='atag mt-2'>Contact Us</a>
                        <a href=""style={{textDecoration:'none'}} className='atag mt-2'>WARRANTY</a>
                        </div>
                        </Col>
    
    
                        <Col  className='col-lg-2'>
                        <h6 style={{fontWeight:'bold',fontSize:'medium'}}>ABOUT US</h6>
                        <div className='d-flex flex-column'style={{fontSize:'15px'}}>
                        <a href=""style={{textDecoration:'none'}} className='atag mt-2'>POCO</a>
                        <a href=""style={{textDecoration:'none'}} className='atag mt-2'>User Agreement</a>
                        <a href=""style={{textDecoration:'none'}} className='atag mt-2'>Privacy Policy</a>
                        <a href=""style={{textDecoration:'none'}} className='atag mt-2'>POCO Blog</a>                    
                        </div>
                        </Col>
    
    
                        <Col>
                        <h6 style={{fontWeight:'bold',fontSize:'medium'}}>FOLLOW POCO</h6>
                        <div className='d-flex flex-column' style={{fontSize:'15px'}}>
                        <a href=""style={{textDecoration:'none'}} className='atag mt-2'><i class="fa-brands fa-facebook-f" style={{color:'white'}}></i>  Facebook</a>
                        <a href=""style={{textDecoration:'none'}} className='atag mt-2'><i class="fa-brands fa-instagram"></i> Instagram</a>
                        <a href=""style={{textDecoration:'none'}} className='atag mt-2'><i class="fa-brands fa-twitter"></i> Twitter</a>
                        <a href=""style={{textDecoration:'none'}} className='atag mt-2'>More Regions</a> 
                        </div>
                        </Col>
                      </Row>  
                    </div>
                </div>
            </div>
            <hr  style={{margin: "2% 7.6% 1.5%"}}/>
            <div className='footer-bottom' style={{marginBottom:'1.5%'}}>
                <div className='container'>
                    <div style={{fontSize:'15px'}}>
                        <p className='text-dark'>Copyright © 2010 - 2022 Xiaomi. All Rights Reserved</p>
                    </div>
                </div>
            </div>
    </div>
    

    </>
  )
}

export default Footer