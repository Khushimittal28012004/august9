import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home'); // Navigate to HomePage
  };

  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="login-left-side">
          <img 
            src="https://i.ibb.co/tHw8hrW/Screenshot-2567-07-05-at-6-44-54-AM.png" 
            alt="Team High Five" 
            className="img-fluid" 
          />
          <h3>Discover Your Next Career Move</h3>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <div className="login-form">
            <h2 className="login-welcome-text">Welcome to Rolync</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formEmail">
                <Form.Control 
                  type="email" 
                  placeholder="Enter Your UTD email address" 
                  className="login-form-control" 
                />
              </Form.Group>
              <Form.Group controlId="formPassword" className="position-relative">
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  className="login-form-control" 
                />
                <span className="login-show-password">Show</span>
              </Form.Group>
              <Button 
                variant="primary" 
                type="submit" 
                className="login-btn button-with-shadow" 
                block
              >
                LOG IN
              </Button>
              <p className="login-forgot-password">
                Forgot Password? <a href="#!">Click Here</a>
              </p>
              <Button 
                variant="success" 
                type="button" 
                className="signup-btn button-with-shadow" 
                block 
                onClick={() => navigate('/signup')}
              >
                SIGN UP
              </Button>
              <p className="login-signup-note">*Use UTD email address</p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
