import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './Login.css';
import { getApiBaseUrl } from '../apiUtils.js'; // Import the utility function

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    navigate('/forget-pass');
  };
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const apiBaseUrl = await getApiBaseUrl(); 
      const response = await axios.post(`${apiBaseUrl}/login `, { email: formData.email, password: formData.password });
      // check if the login was successful 
      if (response.status === 200) {
        localStorage.setItem('formData', JSON.stringify(formData)); // Store form data in local storage
        navigate('/home'); // Corrected navigation path
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
            {error && <p className="text-danger">{error}</p>}
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formEmail">
                <Form.Control 
                  type="email" 
                  placeholder="Enter Your UTD email address" 
                  className="login-form-control" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPassword" className="position-relative">
                <Form.Control 
                  type={showPassword ? "text" : "password"} // Toggle visibility
                  placeholder="Password" 
                  className="login-form-control" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span className="login-show-password" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </span>
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
                Forgot Password?  <a href="#!" onClick={handleForgotPasswordClick}>Click Here</a>
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

export default Login;
