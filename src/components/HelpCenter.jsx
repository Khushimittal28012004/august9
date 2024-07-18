import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HelpCenter.css'; // Import the CSS file

const HelpCenter = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Container fluid className="help-center-container">
      <Row className="header-row">
        <Col xs={12} className="header">
          <h1>HOW CAN WE HELP YOU?</h1>
        </Col>
      </Row>
      <Row className="main-content">
        <Col xs={4} className="card" onClick={() => navigate('/profile')}>
          <h3 className="card-title">PROFILE</h3>
        </Col>
        <Col xs={4} className="card" onClick={() => navigate('/support')}>
          <h3 className="card-title">SUPPORT</h3>
        </Col>
        <Col xs={4} className="card" onClick={() => navigate('/alerts')}>
          <h3 className="card-title">ALERTS</h3>
        </Col>
      </Row>
      <Row className="main-content">
        <Col xs={4} className="card" onClick={() => navigate('/faq')}>
          <h3 className="card-title">FAQ</h3>
        </Col>
        <Col xs={4} className="card" onClick={() => navigate('/reviews')}>
          <h3 className="card-title">REVIEWS</h3>
        </Col>
        <Col xs={4} className="card" onClick={() => navigate('/about-us')}>
          <h3 className="card-title">ABOUT US</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default HelpCenter;
