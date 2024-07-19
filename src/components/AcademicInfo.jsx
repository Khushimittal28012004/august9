import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { getApiBaseUrl } from '../apiUtils';
import './AcademicInfo.css';

function AcademicInfo() {
  const [degreeProgram, setDegreeProgram] = useState('');
  const [major, setMajor] = useState('');
  const [customMajor, setCustomMajor] = useState('');
  const [graduationDate, setGraduationDate] = useState('');
  const [previousDegrees, setPreviousDegrees] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Get the userId from location state
  const { userId } = location.state || {};
  console.log('UserId from state:', userId);

  useEffect(() => {
    const fetchAcademicInfo = async () => {
      try {
        const apiBaseUrl = await getApiBaseUrl();
        console.log('API Base URL:', apiBaseUrl);
        const response = await axios.get(`${apiBaseUrl}/academic-info/${userId.trim()}`);
        const data = response.data;

        setDegreeProgram(data.degreeProgram || '');
        setMajor(data.major || '');
        setCustomMajor(data.customMajor || '');
        setGraduationDate(data.graduationDate || '');
        setPreviousDegrees(data.previousDegrees || '');
      } catch (error) {
        console.error('Error fetching academic info:', error);
        setError('Failed to fetch academic information.');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchAcademicInfo();
    }
  }, [userId]);

  const handleMajorChange = (e) => {
    const value = e.target.value;
    setMajor(value);
    if (value !== 'Other') setCustomMajor('');
  };

  const handleContinue = async (e) => {
    e.preventDefault();

    if (!degreeProgram || !graduationDate || !previousDegrees) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      const apiBaseUrl = await getApiBaseUrl();
      await axios.post(`${apiBaseUrl}/academic-info`, {
        userId: userId.trim(),
        degreeProgram,
        major: major === 'Other' ? customMajor : major,
        graduationDate,
        previousDegrees
      });
      navigate('/career-interests', { state: { userId } });
    } catch (error) {
      console.error('Error saving academic info:', error);
      setError('Failed to save academic information.');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Container fluid style={{ background: '#F5F5F7', height: '100vh' }}>
      <div style={{ position: 'absolute', top: '80px', left: '80px', fontSize: '24px', fontWeight: 'bold' }}>LOGO</div>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="d-flex justify-content-center">
          <div className="form-container">
            <h2 className="form-title">Academic Information</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleContinue}>
              <Form.Group controlId="formDegreeProgram">
                <Form.Control 
                  as="select" 
                  value={degreeProgram} 
                  onChange={(e) => setDegreeProgram(e.target.value)}
                  className="form-select"
                >
                  <option value="" disabled hidden>Current Degree Program</option>
                  <option>Bachelor's</option>
                  <option>Master's</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formMajor">
                {major === 'Other' ? (
                  <Form.Control
                    type="text"
                    placeholder="Please specify your major"
                    value={customMajor}
                    onChange={(e) => setCustomMajor(e.target.value)}
                    onBlur={() => setMajor('')}
                    className="form-control"
                  />
                ) : (
                  <Form.Control 
                    as="select" 
                    value={major} 
                    onChange={handleMajorChange}
                    className="form-select"
                  >
                    <option value="" disabled hidden>Major</option>
                    <option>Computer Science</option>
                    <option>Data Science</option>
                    <option>Business Analytics</option>
                    <option>Other</option>
                  </Form.Control>
                )}
              </Form.Group>

              <Form.Group controlId="formGraduationDate">
                <Form.Control 
                  type="text" 
                  placeholder="Expected graduation date (e.g., May 2025)" 
                  value={graduationDate}
                  onChange={(e) => setGraduationDate(e.target.value)}
                  className="form-control"
                />
              </Form.Group>

              <Form.Group controlId="formPreviousDegrees">
                <Form.Control 
                  type="text" 
                  placeholder="Previous Degree(s)" 
                  value={previousDegrees}
                  onChange={(e) => setPreviousDegrees(e.target.value)}
                  className="form-control"
                />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="continue-btn"
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

export default AcademicInfo;
