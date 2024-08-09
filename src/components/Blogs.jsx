import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import booksImage from './books.jpg';

// import booksImage from '../assets/images/books.jpg'; // Adjust path as needed

import './Blogs.css'; 
const Blogs = () => {
  const navigate = useNavigate();

  return (
    <Container fluid style={{ padding: 0, backgroundColor: '#F5F5F7', minHeight: '100vh' }}>
      <Row style={{ backgroundColor: '#333333', padding: '10px 10px' }}>
        <Col
          xs={2}
          style={{
            color: '#FFFFFF',
            textAlign: 'center',
            cursor: 'pointer',
            paddingLeft: '40px',
            fontSize: '24px',
            fontWeight: 'bold'
          }}
          onClick={() => navigate('/home')}
        >
          LOGO
        </Col>
        <Col
          xs={7}
          style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
        >
          <input
            type="text"
            id="search1"
            placeholder="Search"
            style={{
              width: '60%',
              padding: '10px',
              borderRadius: '5px',
              border: 'none'
            }}
          />
        </Col>
        <Col
          xs={3}
          className="headerup"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            color: '#FFFFFF',
            alignItems: 'center',
            paddingRight: '10px'
          }}
        >
          <div style={{ cursor: 'pointer' ,marginLeft: '-186px'}} onClick={() => navigate('/home')}>
            HOME
          </div>
          <div style={{ cursor: 'pointer' ,marginLeft: '50px'}} onClick={() => navigate('/companies')}>
            COMPANIES
          </div>
          <div style={{ cursor: 'pointer',marginLeft: '50px' }} onClick={() => navigate('/roles')}>
            ROLES
          </div>
          <div style={{ cursor: 'pointer',marginLeft: '50px' }} onClick={() => navigate('/blogs')}>
            BLOGS
          </div>
          <div style={{ cursor: 'pointer',marginLeft: '50px' }}>
            <i className="fas fa-user" style={{ fontSize: '24px' }}></i>
          </div>
        </Col>
      </Row>
      <div style={{ padding: '40px', marginLeft: '20px' , marginRight: '20px', }}>
        <Row >
          <Col  className="col-12" xs={12} style={{ backgroundColor: '#FFFFFF', height:'350px' ,  padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '40px' }}>
            <h3 >Heading</h3>
            <p style={{ marginBottom: '20px', marginRight: '50%', marginTop: '33px' }}>
                 Lorem Ipsum is simply dummy text. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sunt ipsum est officia veritatis omnis aperiam eligendi corporis exercitationem quo? Of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <img src={booksImage} alt="Books" style={{ width: '31%', height: '261px', borderRadius: '8px' , marginLeft:'60%' , marginTop: '-159px'}} />

          </Col>
          <Col className="col-12" xs={12} style={{ backgroundColor: '#FFFFFF',height:'350px',  padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '40px' }}>
            <h3 style={{ marginLeft: '50%'}}>Heading</h3>
            <p style={{ marginBottom: '20px', marginLeft: '50%', marginTop: '33px' }}>
              Lorem Ipsum is simply dummy text. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sunt ipsum est officia veritatis omnis aperiam eligendi corporis exercitationem quo? Of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>  
            <img src={booksImage} alt="Books" style={{ width: '31%', height: '261px', borderRadius: '8px' , marginLeft:'5%' , marginTop: '-159px'}} />
                  
            </Col>
          <Col className="col-12" xs={12} style={{ backgroundColor: '#FFFFFF',height:'350px' ,  padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '40px' }}>
            <h3>Heading</h3>
            <p style={{ marginBottom: '20px', marginRight: '50%', marginTop: '33px' , }}>
              Lorem Ipsum is simply dummy text. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sunt ipsum est officia veritatis omnis aperiam eligendi corporis exercitationem quo? Of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>    
            <img src={booksImage} alt="Books" style={{ width: '31%', height: '261px', borderRadius: '8px' , marginLeft:'60%',marginTop:'5%' , marginTop: '-159px'}} />

                  </Col>
          <Col className="col-12" xs={12} style={{ backgroundColor: '#FFFFFF',height:'350px' ,  padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '40px' }}>
          <h3 style={{ marginLeft: '50%'}}>Heading</h3>
            <p style={{ marginBottom: '20px', marginLeft: '50%', marginTop: '33px'  }}>
              Lorem Ipsum is simply dummy text. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sunt ipsum est officia veritatis omnis aperiam eligendi corporis exercitationem quo? Of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>            
            <img src={booksImage} alt="Books" style={{ width: '31%', height: '261px', borderRadius: '8px' , marginLeft:'5%', marginTop: '-159px'}} />
            
            </Col>
        </Row>
      </div>
      <footer className="footer" style={{ backgroundColor: '#333333', color: '#FFFFFF', padding: '10px 0', textAlign: 'center' }}>
      <Row>
        <Col xs={7} style={{ textAlign: 'left' }}>
          <p style={{ margin: 0 }}>
            Copyright 2024 .{' '}
            <a href="/terms-and-conditions" style={{ marginLeft:'10px'}}>Terms and Conditions</a> {' '}
            <a href="/user-agreement" style={{ marginLeft:'25px'  }}>User Agreement</a> {' '}
            <a href="/contact-us" style={{  marginLeft:'40px' }}>Contact Us</a> {' '}
            <a href="/about-us" style={{  marginLeft:'50px' }}>About Us</a> {' '}
            <a href="/feedback" style={{ marginLeft:'50px'  }}>Feedback</a>
          </p>
        </Col>
        <Col xs={5} style={{ textAlign: 'right' }}>
          <p style={{ margin:'5px' }}>HAVE A QUERY ? <a href="/contact-us" style={{ marginLeft:'40px' , marginRight:'50px'}}>CONTACT US</a></p>
        </Col>
      </Row>
      </footer>
    </Container>
  );
};

export default Blogs;
