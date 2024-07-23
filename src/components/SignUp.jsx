import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
// import { getApiBaseUrl } from '../apiUtils.js';
import './SignUp.css';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otpMessage, setOtpMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  const handleChange = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
    localStorage.setItem('formData', JSON.stringify(newFormData));

    const { firstName, lastName, email, password, confirmPassword } = newFormData;
    if (firstName && lastName && email && password && confirmPassword && password === confirmPassword) {
      setError('');
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    navigate('/academic-info');
  };

  const handleGetOtp = async () => {
    try {
      // const apiBaseUrl = await getApiBaseUrl();
      const url = `http://localhost:5001/api/send-otp`;
      // console.log('Request URL:', url);
      const response = await axios.post(url, { email: formData.email });
      console.log('Response:', response);
      setOtpMessage(response.data.message);
    } catch (error) {
      console.error('Error sending OTP:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
      setOtpMessage('Error sending OTP');
    }
  };
  
  const isFormValid = () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;
    const isPasswordMatch = password === confirmPassword;
    return firstName && lastName && email && password && confirmPassword && isPasswordMatch;
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputStyle = {
    height: '40px',
    width: '475px',
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(153, 153, 153, 0.97)',
    borderRadius: '4px',
    paddingLeft: '10px',
    margin: 'auto',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: isFormValid() ? '#00BBF0' : '#cccccc',
    border: 'none',
    width: '475px',
    height: '35px',
    padding: '5px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)',
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: '20px',
    cursor: isFormValid() ? 'pointer' : 'not-allowed',
    opacity: isFormValid() ? 1 : 0.7,
  };

  const otpButtonStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#00BBF0',
    cursor: 'pointer',
    padding: '0',
    fontSize: '14px',
    fontWeight: 'bold',
  };

  return (
    <Container fluid className="signup-container">
      <div className="signup-logo">LOGO</div>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="d-flex justify-content-center">
          <div className="signup-form">
            <h2 className="signup-welcome-text">Welcome to Rolync</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {otpMessage && <Alert variant={otpMessage === 'OTP sent successfully' ? 'success' : 'danger'}>{otpMessage}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFirstName" className="signup-form-group" style={formGroupStyle}>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  className="signup-form-control"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </Form.Group>
              
              <Form.Group controlId="formLastName" className="signup-form-group" style={formGroupStyle}>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  className="signup-form-control"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="signup-form-group position-relative" style={formGroupStyle}>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  className="signup-form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
                <span className="signup-note">*Use UTD email address</span>
              </Form.Group>

              <Form.Group controlId="formOtp" className="signup-form-group position-relative" style={formGroupStyle}>
                <Form.Control
                  type="text"
                  placeholder="Verify your email address"
                  className="signup-form-control"
                  name="otp"
                  value={otp}
                  onChange={handleOtpChange}
                  style={{ ...inputStyle, paddingRight: '100px' }}
                />
                <button
                  type="button"
                  onClick={handleGetOtp}
                  style={otpButtonStyle}
                >
                  Get OTP
                </button>
              </Form.Group>

              <Form.Group controlId="formPassword" className="signup-form-group position-relative" style={formGroupStyle}>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="signup-form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  style={inputStyle}
                />
                <span className="signup-show-password" onClick={toggleShowPassword} >
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              </Form.Group>
              
              <Form.Group controlId="formConfirmPassword" className="signup-form-group" style={formGroupStyle}>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  className="signup-form-control"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className={`signup-continue-btn button-with-shadow`}
                style={buttonStyle}
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
