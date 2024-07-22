import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './PreviousExperience.css';

function PreviousExperience() {
  const [experience, setExperience] = useState('');
  const [employmentTitle, setEmploymentTitle] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('previousExperience'));
    if (savedFormData) {
      setExperience(savedFormData.experience || '');
      setEmploymentTitle(savedFormData.employmentTitle || '');
    }
  }, []);

  const handleChange = (setter, key) => (e) => {
    const { value } = e.target;
    setter(value);

    const formData = {
      experience: key === 'experience' ? value : experience,
      employmentTitle: key === 'employmentTitle' ? value : employmentTitle,
    };
    localStorage.setItem('previousExperience', JSON.stringify(formData));

    if (formData.experience && formData.employmentTitle) {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (experience && employmentTitle) {
      navigate('/additional-info');
    } else {
      setError('Please fill in all required fields to continue.');
    }
  };

  const isFormValid = experience && employmentTitle;

  return (
    <Container fluid style={{ background: '#F5F5F7', height: '100vh' }}>
      <div style={{ position: 'absolute', top: '80px', left: '80px', fontSize: '24px', fontWeight: 'bold' }}>LOGO</div>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="d-flex justify-content-center">
          <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)', maxWidth: '551px', width: '100%', margin: 'auto' }}>
            <h2 style={{ color: 'rgba(0, 0, 0, 0.5)', marginBottom: '40px', textAlign: 'center', fontWeight: 'bold', fontSize: '30px' }}>Previous Experience</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formExperience">
                <Form.Control
                  type="text"
                  placeholder="Total Experience (Years and months)"
                  className="form-control"
                  value={experience}
                  onChange={handleChange(setExperience, 'experience')}
                  style={{
                    width: '475px',
                    height: '40px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(153, 153, 153, 0.97)',
                    borderRadius: '4px',
                    marginBottom: '20px',
                    paddingLeft: '10px',
                    color: experience ? '#000000' : 'rgba(0, 0, 0, 0.5)'
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formEmploymentTitle">
                <Form.Control
                  type="text"
                  placeholder="Previous Employment Title"
                  className="form-control"
                  value={employmentTitle}
                  onChange={handleChange(setEmploymentTitle, 'employmentTitle')}
                  style={{
                    width: '475px',
                    height: '40px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(153, 153, 153, 0.97)',
                    borderRadius: '4px',
                    marginBottom: '20px',
                    paddingLeft: '10px',
                    color: employmentTitle ? '#000000' : 'rgba(0, 0, 0, 0.5)'
                  }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className={`continue-btn button-with-shadow ${isFormValid ? 'valid' : 'invalid'}`}
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

export default PreviousExperience;
