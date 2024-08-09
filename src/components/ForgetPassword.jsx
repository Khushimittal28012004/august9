import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './ForgotPassword.css';

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value) {
      setError('');
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();
    // No longer requiring email and otp to be filled to proceed
    navigate('/reset-pass'); // Navigate to Reset Password page
  };

  const handleGetOtp = () => {
    // Logic to handle OTP generation
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
    backgroundColor: '#00BBF0',
    border: 'none',
    width: '475px',
    height: '35px',
    padding: '5px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)',
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: '20px',
    cursor: 'pointer',
    opacity: 1,
  };

  const otpButtonStyle = {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '4px',
    color: '#4ab6e2',
    padding: '5px 10px',
    cursor: 'pointer',
  };

  return (
    <Container fluid className="forgot-password-container">
      <div className="logo" style={{ position: 'absolute', top: '80px', left: '80px', fontSize: '24px', fontWeight: 'bold' }}>LOGO</div>
      <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col md={6} className="d-flex justify-content-center">
          <div className="forgot-password-form">
            <h2 className="forgot-password-text">Forgot Password</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleContinue}>
              <Form.Group controlId="formEmail" style={formGroupStyle}>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  style={inputStyle}
                />
              </Form.Group>

              <Form.Group controlId="formOtp" style={formGroupStyle} className="position-relative">
                <Form.Control
                  type="text"
                  placeholder="Enter OTP"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  className="form-control"
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

              <Button
                variant="primary"
                type="submit"
                className="continue-btn button-with-shadow"
                style={buttonStyle}
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

export default ForgotPassword;
