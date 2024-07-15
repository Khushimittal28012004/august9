import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { createItem } from '../api'; // Import API function
import './SignUp.css';
import { createItem } from '../api'; // Correct relative path
import { fetchItems, createItem } from '../api.js'; // Correct relative path



function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    const newItem = {
      name: `${firstName} ${lastName}`,
      description: `Email: ${email}, Password: ${password}`
    };

    const result = await createItem(newItem);
    if (result) {
      navigate('/academic-info');
    } else {
      alert('Failed to create item');
    }
  };

  return (
    <Container fluid className="signup-container">
      <div className="signup-logo">LOGO</div>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="d-flex justify-content-center">
          <div className="signup-form">
            <h2 className="signup-welcome-text">Welcome to Rolync</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFirstName" className="signup-form-group">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  className="signup-form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              
              <Form.Group controlId="formLastName" className="signup-form-group">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  className="signup-form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="signup-form-group position-relative">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  className="signup-form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="signup-note">*Use UTD email address</span>
              </Form.Group>

              <Form.Group controlId="formPassword" className="signup-form-group position-relative">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="signup-form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="signup-show-password">Show</span>
              </Form.Group>
              
              <Form.Group controlId="formConfirmPassword" className="signup-form-group">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  className="signup-form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="signup-continue-btn button-with-shadow"
                block
              >
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
