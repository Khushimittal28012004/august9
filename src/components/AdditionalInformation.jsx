import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import './AdditionalInformation.css';
import { createItem } from '../api'; // Correctly import createItem function

function AdditionalInformation() {
  const [linkedin, setLinkedin] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!linkedin || !portfolio || !hobbies) {
      setError('Please fill in all fields.');
      return;
    }

    if (!agreement) {
      setError('You must agree to the user agreement and privacy policy.');
      return;
    }

    try {
      await createItem({ linkedin, portfolio, hobbies });
      setShowModal(true);
    } catch (error) {
      console.error('Error submitting additional information:', error);
      setError('Failed to submit information.');
    }
  };

  const handleOkClick = () => {
    setShowModal(false);
    navigate('/login'); // Redirect to the login page
  };

  return (
    <Container fluid style={{ background: '#F5F5F7', height: '100vh' }}>
      <div style={{ position: 'absolute', top: '80px', left: '80px', fontSize: '24px', fontWeight: 'bold' }}>LOGO</div>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="d-flex justify-content-center">
          <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)', maxWidth: '551px', width: '100%', margin: 'auto' }}>
            <h2 style={{ color: 'rgba(0, 0, 0, 0.5)', marginBottom: '40px', textAlign: 'center', fontWeight: 'bold', fontSize: '30px' }}>Additional Information</h2>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formLinkedin">
                <Form.Control
                  type="text"
                  placeholder="LinkedIn"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  style={{ marginBottom: '20px' }}
                />
              </Form.Group>
              <Form.Group controlId="formPortfolio">
                <Form.Control
                  type="text"
                  placeholder="Portfolio/Personal Website"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  style={{ marginBottom: '20px' }}
                />
              </Form.Group>
              <Form.Group controlId="formHobbies">
                <Form.Control
                  type="text"
                  placeholder="Hobbies and Interests"
                  value={hobbies}
                  onChange={(e) => setHobbies(e.target.value)}
                  style={{ marginBottom: '20px' }}
                />
              </Form.Group>
              <p style={{ textAlign: 'left', color: 'black', marginBottom: '20px' }}>Review all entered information</p>
              <Form.Group controlId="formAgreement" className="d-flex align-items-center" style={{ marginBottom: '20px' }}>
                <input
                  type="checkbox"
                  checked={agreement}
                  onChange={(e) => setAgreement(e.target.checked)}
                  style={{ marginRight: '10px' }}
                />
                <label style={{ color: 'black' }}>
                  Agree to <a href="/user-agreement" style={{ color: '#00BBF0' }}>user agreement</a> and <a href="/privacy-policy" style={{ color: '#00BBF0' }}>privacy policy</a> of Rolync
                </label>
              </Form.Group>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!agreement}
                  style={{ backgroundColor: '#00BBF0', border: 'none', width: '150px', height: '35px', padding: '5px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)', color: '#ffffff', fontWeight: 'bold' }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Submission Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your information has been submitted successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleOkClick} style={{ backgroundColor: '#00BBF0', border: 'none', width: '150px', height: '35px', padding: '5px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)', color: '#ffffff', fontWeight: 'bold' }}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default AdditionalInformation;
