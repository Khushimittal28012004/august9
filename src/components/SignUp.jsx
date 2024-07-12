import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();

  return (
    <Container fluid className="signup-container">
      <div className="signup-logo">LOGO</div>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="d-flex justify-content-center">
          <div className="signup-form">
            <h2 className="signup-welcome-text">Welcome to Rolync</h2>
            <Form>
              <Form.Group controlId="formFirstName" className="signup-form-group">
                <Form.Control type="text" placeholder="First Name" className="signup-form-control" />
              </Form.Group>
              
              <Form.Group controlId="formLastName" className="signup-form-group">
                <Form.Control type="text" placeholder="Last Name" className="signup-form-control" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="signup-form-group position-relative">
                <Form.Control type="email" placeholder="Email Address" className="signup-form-control" />
                <span className="signup-note">*Use UTD email address</span>
              </Form.Group>

              <Form.Group controlId="formPassword" className="signup-form-group position-relative">
                <Form.Control type="password" placeholder="Password" className="signup-form-control" />
                <span className="signup-show-password">Show</span>
              </Form.Group>
              
              <Form.Group controlId="formConfirmPassword" className="signup-form-group">
                <Form.Control type="password" placeholder="Confirm Password" className="signup-form-control" />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="signup-continue-btn button-with-shadow" 
                block
                onClick={() => navigate('/academic-info')}>
                Continue
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
