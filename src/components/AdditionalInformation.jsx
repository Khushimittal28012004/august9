import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './AdditionalInformation.css';

function AdditionalInformation() {
  const [linkedin, setLinkedin] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [hobbies, setHobbies] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/next-page'); // Adjust this to navigate to the correct next page
  };

  return (
    <Container fluid style={{ background: '#F5F5F7', height: '100vh' }}>
      <div style={{ position: 'absolute', top: '80px', left: '80px', fontSize: '24px', fontWeight: 'bold' }}>LOGO</div>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="d-flex justify-content-center">
          <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)', maxWidth: '551px', width: '100%', margin: 'auto' }}>
            <h2 style={{ color: 'rgba(0, 0, 0, 0.5)', marginBottom: '40px', textAlign: 'center', fontWeight: 'bold', fontSize: '30px' }}>Additional Information</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formLinkedin">
                <Form.Control
                  type="text"
                  placeholder="Linkedin"
                  className="form-control"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  style={{ width: '475px', height: '40px', backgroundColor: '#FFFFFF', border: '1px solid rgba(153, 153, 153, 0.97)', borderRadius: '4px', marginBottom: '20px', paddingLeft: '10px', color: 'rgba(0, 0, 0, 0.5)' }}
                />
              </Form.Group>

              <Form.Group controlId="formPortfolio">
                <Form.Control
                  type="text"
                  placeholder="Portfolio/Personal website"
                  className="form-control"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  style={{ width: '475px', height: '40px', backgroundColor: '#FFFFFF', border: '1px solid rgba(153, 153, 153, 0.97)', borderRadius: '4px', marginBottom: '20px', paddingLeft: '10px', color: 'rgba(0, 0, 0, 0.5)' }}
                />
              </Form.Group>

              <Form.Group controlId="formHobbies">
                <Form.Control
                  type="text"
                  placeholder="Hobbies and Interests"
                  className="form-control"
                  value={hobbies}
                  onChange={(e) => setHobbies(e.target.value)}
                  style={{ width: '475px', height: '40px', backgroundColor: '#FFFFFF', border: '1px solid rgba(153, 153, 153, 0.97)', borderRadius: '4px', marginBottom: '20px', paddingLeft: '10px', color: 'rgba(0, 0, 0, 0.5)' }}
                />
              </Form.Group>

              <Form.Group controlId="formReview" className="text-center">
                <p style={{ marginBottom: '20px' }}>Review all entered information</p>
              </Form.Group>

              <Form.Group controlId="formAgreement" className="text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Form.Check 
                  type="checkbox" 
                  label={<span>Agree to <a href="/user-agreement" target="_blank">user agreement</a> and <a href="/privacy-policy" target="_blank">privacy policy</a> of Rolync</span>} 
                  required 
                  style={{ marginRight: '10px' }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="continue-btn button-with-shadow"
                block
                style={{ backgroundColor: '#00BBF0', border: 'none', marginTop: '20px', width: '475px', height: '35px', padding: '5px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)', color: '#ffffff', fontWeight: 'bold' }}
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
