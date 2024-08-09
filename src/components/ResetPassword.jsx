import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './ResetPassword.css';

function ResetPassword() {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(true); // State for new password visibility
  const [showPassword, setShowPassword] = useState(false); // State for confirm password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    console.log(formData); // Add this line to inspect formData
  

    if (value) {
      setError('');
    }

    if (name === 'confirmPassword') {
      setShowNewPassword(false); // Hide new password when confirm password is being entered
    } else {
      setShowNewPassword(true); // Show new password while entering it
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    const { newPassword, confirmPassword } = formData;

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Handle the password reset process here
  };

  const inputStyle = {
    height: '40px',
    width: '475px',
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(153, 153, 153, 0.97)',
    borderRadius: '4px',
    paddingLeft: '10px',
    margin: 'auto',
    color: 'black'
  };

  const formGroupStyle = {
    marginBottom: '20px',
    position: 'relative',
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container fluid className="reset-password-container">
      <div className="logo" style={{ position: 'absolute', top: '80px', left: '80px', fontSize: '24px', fontWeight: 'bold' }}>LOGO</div>
      <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col md={6} className="d-flex justify-content-center">
          <div className="reset-password-form">
            <h2 className="reset-password-text">Reset Password</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleReset}>
              <Form.Group controlId="formNewPassword" style={formGroupStyle}>
                <Form.Control
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder="New Password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="form-control"
                  style={inputStyle}
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword" style={formGroupStyle}>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="form-control"
                  style={inputStyle}
                />
                <span className="login-show-password" onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '20px', bottom: '64%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
                  {showPassword ? "Hide" : "Show"}
                </span>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="reset-btn button-with-shadow"
                style={buttonStyle}
              >
                Reset Password
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ResetPassword;
