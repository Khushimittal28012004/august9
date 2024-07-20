import React, { useState, useEffect, useCallback } from 'react';
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
  const [loading, setLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const sessionId = location.state?.sessionId || localStorage.getItem('sessionId');
  const { userId } = location.state || {};

  useEffect(() => {
    const loadFormData = () => {
      const savedFormData = JSON.parse(localStorage.getItem(`${sessionId}-academicInfoFormData`));
      if (savedFormData) {
        setDegreeProgram(savedFormData.degreeProgram || '');
        setMajor(savedFormData.major || '');
        setCustomMajor(savedFormData.customMajor || '');
        setGraduationDate(savedFormData.graduationDate || '');
        setPreviousDegrees(savedFormData.previousDegrees || '');
      }
    };

    const fetchAcademicInfo = async () => {
      if (userId) {
        try {
          const apiBaseUrl = await getApiBaseUrl();
          const response = await axios.get(`${apiBaseUrl}/academic-info/${userId}`);
          const academicInfo = response.data;
          setDegreeProgram(academicInfo.degreeProgram || '');
          setMajor(academicInfo.major || '');
          setCustomMajor(academicInfo.major === 'Other' ? academicInfo.customMajor : '');
          setGraduationDate(academicInfo.graduationDate || '');
          setPreviousDegrees(academicInfo.previousDegrees || '');
        } catch (error) {
          console.error('Error fetching academic info:', error);
        }
      } else {
        loadFormData();
      }
    };

    fetchAcademicInfo();
  }, [userId, sessionId]);

  const saveFormData = useCallback(() => {
    const formData = {
      degreeProgram,
      major,
      customMajor,
      graduationDate,
      previousDegrees
    };
    localStorage.setItem(`${sessionId}-academicInfoFormData`, JSON.stringify(formData));
  }, [degreeProgram, major, customMajor, graduationDate, previousDegrees, sessionId]);

  useEffect(() => {
    saveFormData();
  }, [degreeProgram, major, customMajor, graduationDate, previousDegrees, saveFormData]);

  const handleContinue = async (e) => {
    e.preventDefault();

    if (!degreeProgram || !graduationDate || !previousDegrees) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    try {
      const apiBaseUrl = await getApiBaseUrl();
      await axios.post(`${apiBaseUrl}/academic-info`, {
        userId: userId.trim(),
        degreeProgram,
        major: major === 'Other' ? customMajor : major,
        graduationDate,
        previousDegrees,
      });
      localStorage.removeItem(`${sessionId}-academicInfoFormData`);
      navigate('/career-interests', { state: { userId, sessionId } });
    } catch (error) {
      console.error('Error saving academic info:', error);
      setError('Failed to save academic information.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener('beforeunload', saveFormData);
    return () => {
      window.removeEventListener('beforeunload', saveFormData);
      saveFormData();
    };
  }, [saveFormData]);

  const handleMajorChange = (e) => {
    const value = e.target.value;
    setMajor(value);
    if (value !== 'Other') setCustomMajor('');
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Container fluid style={{ background: '#F5F5F7', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'absolute', top: '80px', left: '80px', fontSize: '24px', fontWeight: 'bold' }}>LOGO</div>
      <Row className="justify-content-center align-items-center" style={{ width: '100%' }}>
        <Col md={6} className="d-flex justify-content-center">
          <div style={{
            background: '#FFFFFF',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
            maxWidth: '551px',
            width: '100%',
            margin: 'auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              color: 'rgba(0, 0, 0, 0.5)',
              marginBottom: '40px',
              fontWeight: 'bold',
              fontSize: '30px'
            }}>Academic Information</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleContinue}>
              <Form.Group controlId="formDegreeProgram" style={{ marginBottom: '30px' }}>
                <Form.Control
                  as="select"
                  value={degreeProgram}
                  onChange={(e) => setDegreeProgram(e.target.value)}
                  className="form-select"
                  style={{
                    height: '40px',
                    width: '475px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(153, 153, 153, 0.97)',
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    margin: 'auto',
                  }}
                >
                  <option value="" disabled hidden>Current Degree Program</option>
                  <option>Bachelor's</option>
                  <option>Master's</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formMajor" style={{ marginBottom: '30px', position: 'relative' }}>
                {major === 'Other' ? (
                  <div style={{ position: 'relative' }}>
                    <Form.Control
                      type="text"
                      placeholder="Please specify your major"
                      value={customMajor}
                      onChange={(e) => setCustomMajor(e.target.value)}
                      className="form-control"
                      style={{
                        height: '40px',
                        width: '475px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(153, 153, 153, 0.97)',
                        borderRadius: '4px',
                        paddingLeft: '10px',
                        margin: 'auto'
                      }}
                    />
                    <span 
                      onClick={() => setMajor('')} 
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                      style={{
                        position: 'absolute', 
                        right: '10px', 
                        top: '50%', 
                        transform: 'translateY(-50%)', 
                        cursor: 'pointer', 
                        color: '#00BBF0',
                        fontSize: '20px'
                      }}
                    >
                      ⟲
                    </span>
                    {showTooltip && (
                      <div style={{
                        position: 'absolute',
                        top: '-30px',
                        right: '0',
                        backgroundColor: '#fff',
                        border: '1px solid rgba(153, 153, 153, 0.97)',
                        borderRadius: '4px',
                        padding: '5px 10px',
                        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
                        zIndex: 10,
                      }}>
                        Click the icon to go back to the dropdown
                        <span 
                          onClick={() => setShowTooltip(false)} 
                          style={{ 
                            marginLeft: '10px', 
                            cursor: 'pointer', 
                            color: '#000' 
                          }}
                        >
                          ×
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <Form.Control
                    as="select"
                    value={major}
                    onChange={handleMajorChange}
                    className="form-select"
                    style={{
                      height: '40px',
                      width: '475px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(153, 153, 153, 0.97)',
                      borderRadius: '4px',
                      paddingLeft: '10px',
                      margin: 'auto',
                    }}
                  >
                    <option value="" disabled hidden>Major</option>
                    <option>Computer Science</option>
                    <option>Data Science</option>
                    <option>Business Analytics</option>
                    <option>Other</option>
                  </Form.Control>
                )}
              </Form.Group>

              <Form.Group controlId="formGraduationDate" style={{ marginBottom: '30px' }}>
                <Form.Control
                  type="text"
                  placeholder="Expected graduation date (e.g., May 2025)"
                  value={graduationDate}
                  onChange={(e) => setGraduationDate(e.target.value)}
                  style={{
                    height: '40px',
                    width: '475px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(153, 153, 153, 0.97)',
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    margin: 'auto'
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formPreviousDegrees" style={{ marginBottom: '30px' }}>
                <Form.Control
                  type="text"
                  placeholder="Previous Degree(s)"
                  value={previousDegrees}
                  onChange={(e) => setPreviousDegrees(e.target.value)}
                  style={{
                    height: '40px',
                    width: '475px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(153, 153, 153, 0.97)',
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    margin: 'auto'
                  }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: '#00BBF0',
                  border: 'none',
                  width: '475px',
                  height: '35px',
                  padding: '5px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  margin: 'auto'
                }}
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
