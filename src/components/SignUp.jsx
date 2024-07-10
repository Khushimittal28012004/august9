import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './SignUp.css';

function SignUp() {
  return (
    <Container fluid className="signup-container">
      <div className="logo">LOGO</div>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="d-flex justify-content-center">
          <div className="signup-form">
            <h2 className="welcome-text">Welcome to Rolync</h2>
            <Form>
              <Form.Group controlId="formFirstName">
                <Form.Control type="text" placeholder="First Name" className="form-control" />
              </Form.Group>
              
              <Form.Group controlId="formLastName">
                <Form.Control type="text" placeholder="Last Name" className="form-control" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="position-relative">
                <Form.Control type="email" placeholder="Email Address" className="form-control" />
                <span className="signup-note">*Use UTD email address</span>
              </Form.Group>

              <Form.Group controlId="formPassword" className="position-relative">
                <Form.Label className="form-label"></Form.Label>
                <Form.Control type="password" placeholder="Password" className="form-control" />
                <span className="show-password">Show</span>
              </Form.Group>
              
              <Form.Group controlId="formConfirmPassword">
                <Form.Control type="password" placeholder="Confirm Password" className="form-control" />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="continue-btn button-with-shadow" 
                block>
                Continue
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;