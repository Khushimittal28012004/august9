import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Container fluid className="container-fluid">
      <Row className="header-row">
        <Col xs={2} className="header-col header-col-logo" onClick={() => navigate('/home')}>
          LOGO
        </Col>
        <Col xs={8} className="header-col-search">
          <input type="text" placeholder="Search" />
        </Col>
        <Col xs={2} className="header-col header-col-links">
          <div className="header-col-link" onClick={() => navigate('/companies')}>COMPANIES</div>
          <div className="header-col-link" onClick={() => navigate('/blogs')}>BLOGS</div>
          <div className="header-col-link" onClick={() => navigate('/profile')}>
            <i className="fas fa-user" style={{ fontSize: '24px' }}></i>
          </div>
        </Col>
      </Row>
      <div className="main-content">
        <Row className="main-content-row">
          <Col xs={12} className="card">
            <h3 className="card-title">About US</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Col>
        </Row>
        <Row className="main-content-row">
          <Col xs={4} className="card">
            <h3 className="card-title">Our Mission</h3>
          </Col>
          <Col xs={4} className="card">
            <h3 className="card-title">Our Vision</h3>
          </Col>
          <Col xs={4} className="card">
            <h3 className="card-title">Our Values</h3>
          </Col>
        </Row>
      </div>
      <footer className="footer">
        <Row>
          <Col xs={6} className="footer-col">
            <p>Copyright 2024 . Terms and Conditions . User Agreement . Contact Us . About Us . Feedback</p>
          </Col>
          <Col xs={6} className="footer-col">
            <p>HAVE A QUERY? CONTACT US</p>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default AboutUs;
