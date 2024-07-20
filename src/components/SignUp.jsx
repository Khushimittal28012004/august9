import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './SignUp.css';
import { getApiBaseUrl } from '../apiUtils.js';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [initialFormData, setInitialFormData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state || {};

  useEffect(() => {
    const loadFormData = () => {
      const savedFormData = JSON.parse(localStorage.getItem('signupFormData'));
      if (savedFormData) {
        setFirstName(savedFormData.firstName || '');
        setLastName(savedFormData.lastName || '');
        setEmail(savedFormData.email || '');
        setPassword(savedFormData.password || '');
        setConfirmPassword(savedFormData.confirmPassword || '');
        setInitialFormData(savedFormData);
      }
    };

    const fetchUserData = async () => {
      if (userId) {
        try {
          const apiBaseUrl = await getApiBaseUrl();
          const response = await axios.get(`${apiBaseUrl}/signup/${userId}`);
          const userData = response.data;
          setFirstName(userData.firstName || '');
          setLastName(userData.lastName || '');
          setEmail(userData.email || '');
          setPassword(userData.password || '');
          setConfirmPassword(userData.password || '');
          setInitialFormData(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    if (userId) {
      fetchUserData();
    } else {
      loadFormData();
    }
  }, [userId]);

  const saveFormData = useCallback(() => {
    const formData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    };
    localStorage.setItem('signupFormData', JSON.stringify(formData));
  }, [firstName, lastName, email, password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    const newUser = {
      firstName,
      lastName,
      email,
      password
    };

    const hasFormChanged = () => {
      return (
        firstName !== initialFormData.firstName ||
        lastName !== initialFormData.lastName ||
        email !== initialFormData.email ||
        password !== initialFormData.password
      );
    };

    try {
      const apiBaseUrl = await getApiBaseUrl();
      let response;
      if (userId) {
        if (hasFormChanged()) {
          response = await axios.put(`${apiBaseUrl}/signup/${userId}`, newUser);
        } else {
          navigate('/academic-info', { state: { userId } });
          return;
        }
      } else {
        response = await axios.post(`${apiBaseUrl}/signup`, newUser);
      }

      if (response && (response.status === 201 || response.status === 200)) {
        console.log('User processed with ID:', response.data.userId);
        localStorage.removeItem('signupFormData');
        navigate('/academic-info', { state: { userId: response.data.userId } });
      } else {
        navigate('/academic-info', { state: { userId } });
      }
    } catch (error) {
      alert('Error processing user');
    }
  };

  useEffect(() => {
    window.addEventListener('beforeunload', saveFormData);
    return () => {
      window.removeEventListener('beforeunload', saveFormData);
      saveFormData();
    };
  }, [saveFormData]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="signup-form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="signup-show-password" onClick={toggleShowPassword}>
                  {showPassword ? 'Hide' : 'Show'}
                </span>
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
