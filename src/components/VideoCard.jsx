import React from 'react'
import { Row , Col } from 'react-bootstrap';
import '../components/VideoCard.css'
function VideoCard() {
  return (
    <>
    <div className='container'>
      <Row className='container' >
              <Col md={4} className=''>
              <img src="https://i02.appmifile.com/207_operatorx_operatorx_xm/12/05/2023/eed3c0fb1341cee3ec4bd3384b86c80a.jpg?width=398&height=320" height={'320px'} width={'398px'}  alt="no img" />
              <h6 style={{textAlign:'center',marginTop:'-110px',fontSize:'large'}}>POCO F5 Pro</h6>
              <div className='cbox'>
                <div className="circle-container">
                    <div className="video-icon">
                    <i style={{color:'white',fontSize:"x-large"}} class="fa-solid fa-play"></i>
                    </div>
                </div>
              </div>
              </Col>
  
              <Col md={4} className=''>
              <img src="https://i02.appmifile.com/237_operatorx_operatorx_xm/12/05/2023/c808cdf6c7c4e73d2e2ae6180520ddd8.jpg?width=398&height=320"  alt="no img" />
              <h6 style={{textAlign:'center',marginTop:'-110px',fontSize:'large'}}>POCO F5 </h6>
              <div className='cbox'>
                <div className="circle-container">
                    <div className="video-icon">
                    <i style={{color:'white',fontSize:"x-large"}} class="fa-solid fa-play"></i>
                    </div>
                </div>
              </div>
              </Col>
              
              <Col md={4} className=''>
              <img src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/POCO/POCO-X5-Pro-Video.jpg?width=398&height=320"  alt="no img" />
              <h6 style={{textAlign:'center',marginTop:'-110px',fontSize:'large'}}>POCO X5 Pro 5G</h6>
              <div className='cbox'>
                <div className="circle-container">
                    <div className="video-icon">
                    <i style={{color:'white',fontSize:"x-large"}} class="fa-solid fa-play"></i>
                    </div>
                </div>
              </div>
              </Col>
              
            </Row>
    </div>
    </>
  )
}

export default VideoCard