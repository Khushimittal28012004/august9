import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './AdditionalInformation.css'; // Import the CSS file

function AdditionalInformation() {
  const [linkedin, setLinkedin] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [agreed, setAgreed] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed) {
      // Submit the form data
      navigate('/thank-you'); // Adjust this to navigate to the correct next page
    } else {
      alert('You must agree to the user agreement and privacy policy.');
    }
  };

  return (
    <Container fluid className="additional-info-container">
      <div className="logo">LOGO</div>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="d-flex justify-content-center">
          <div className="additional-info-form">
            <h2 className="welcome-text">Additional Information</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formLinkedin">
                <Form.Control
                  type="text"
                  placeholder="Linkedin"
                  className="form-control"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPortfolio">
                <Form.Control
                  type="text"
                  placeholder="Portfolio/Personal website"
                  className="form-control"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formHobbies">
                <Form.Control
                  type="text"
                  placeholder="Hobbies and Interests"
                  className="form-control"
                  value={hobbies}
                  onChange={(e) => setHobbies(e.target.value)}
                />
              </Form.Group>

              <p className="welcome-text">Review all entered information</p>

              <Form.Group controlId="formAgreed" className="checkbox-group">
                <Form.Check
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  style={{ marginRight: '10px' }}
                />
                <span>
                  Agree to <a href="/user-agreement" target="_blank">user agreement</a> and <a href="/privacy-policy" target="_blank">privacy policy</a> of Rolync
                </span>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="continue-btn"
              >
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AdditionalInformation;
