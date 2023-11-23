import React from 'react'
import { Row , Col } from 'react-bootstrap';

function CardImg() {
  return (
    <>
    <div className='container'>
      <Row className='container mt-3'>
             
                <Col md={4} className=''>
                <img src="https://i02.appmifile.com/805_operatorx_operatorx_xm/12/05/2023/4acc371319b74c6e8f58c90bba079f7e.jpg?width=398&height=230&160516"  alt="no img" />
                </Col>
    
                <Col md={4} className=''>
                <img src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/POCO/POCO-X5-Pro-small.jpg?width=398&height=230&160516"  alt="no img" />
                </Col>
                
                <Col md={4} className=''>
                <img src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/POCO/POCO-X5-small.jpg?width=398&height=230&160516"  alt="no img" />
                </Col>
                
            
            </Row>
    </div>
    </>
  )
}

export default CardImg