import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './AcademicInfo.css';


function AcademicInfo() {
  const [degreeProgram, setDegreeProgram] = useState('');
  const [major, setMajor] = useState('');
  const [customMajor, setCustomMajor] = useState('');
  const [graduationDate, setGraduationDate] = useState('');
  const [previousDegrees, setPreviousDegrees] = useState('');
  const navigate = useNavigate();

  const handleMajorChange = (e) => {
    const value = e.target.value;
    setMajor(value);
    if (value !== 'Other') setCustomMajor('');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/career-interests');
  };

  return (
    <Container fluid style={{ background: '#F5F5F7', height: '100vh' }}>
      <div style={{ position: 'absolute', top: '80px', left: '80px', fontSize: '24px', fontWeight: 'bold' }}>LOGO</div>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="d-flex justify-content-center">
          <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)', maxWidth: '551px', width: '100%', margin: 'auto' }}>
            <h2 style={{ color: 'rgba(0, 0, 0, 0.5)', marginBottom: '40px', textAlign: 'center', fontWeight: 'bold', fontSize: '30px' }}>Academic Information</h2>
            <Form onSubmit={handleContinue}>
              <Form.Group controlId="formDegreeProgram" className="position-relative">
                <Form.Control 
                  as="select" 
                  className="form-control form-select" 
                  value={degreeProgram} 
                  onChange={(e) => setDegreeProgram(e.target.value)}
                  style={{ color: degreeProgram ? '#000000' : 'rgba(0, 0, 0, 0.5)', backgroundColor: '#FFFFFF', border: '1px solid rgba(153, 153, 153, 0.97)', borderRadius: '4px', marginBottom: '20px', paddingLeft: '10px' }} 
                >
                  <option value="" disabled hidden style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Current Degree Program</option>
                  <option>Bachelor's</option>
                  <option>Master's</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formMajor" className="position-relative">
                {major === 'Other' ? (
                  <Form.Control
                    type="text"
                    placeholder="Please specify your major"
                    className="form-control"
                    value={customMajor}
                    onChange={(e) => setCustomMajor(e.target.value)}
                    onBlur={() => setMajor('')}
                    style={{ width: '100%', height: '40px', backgroundColor: '#FFFFFF', border: '1px solid rgba(153, 153, 153, 0.97)', borderRadius: '4px', marginBottom: '20px', paddingLeft: '10px', color: customMajor ? '#000000' : 'rgba(0, 0, 0, 0.5)' }}
                  />
                ) : (
                  <Form.Control 
                    as="select" 
                    className="form-control form-select" 
                    value={major} 
                    onChange={handleMajorChange}
                    style={{ color: major ? '#000000' : 'rgba(0, 0, 0, 0.5)', backgroundColor: '#FFFFFF', border: '1px solid rgba(153, 153, 153, 0.97)', borderRadius: '4px', marginBottom: '20px', paddingLeft: '10px' }}
                  >
                    <option value="" disabled hidden style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Major</option>
                    <option>Computer Science</option>
                    <option>Data Science</option>
                    <option>Business Analytics</option>
                    <option>Other</option>
                  </Form.Control>
                )}
              </Form.Group>

              <Form.Group controlId="formGraduationYear">
                <Form.Control 
                  type="text" 
                  placeholder="Expected graduation date (for e.g May 2025)" 
                  className="form-control" 
                  value={graduationDate}
                  onChange={(e) => setGraduationDate(e.target.value)}
                  style={{ width: '100%', height: '40px', backgroundColor: '#FFFFFF', border: '1px solid rgba(153, 153, 153, 0.97)', borderRadius: '4px', marginBottom: '20px', paddingLeft: '10px', color: graduationDate ? '#000000' : 'rgba(0, 0, 0, 0.5)' }}
                />
              </Form.Group>

              <Form.Group controlId="formPreviousDegrees">
                <Form.Control 
                  type="text" 
                  placeholder="Previous Degree(s)" 
                  className="form-control" 
                  value={previousDegrees}
                  onChange={(e) => setPreviousDegrees(e.target.value)}
                  style={{ width: '100%', height: '40px', backgroundColor: '#FFFFFF', border: '1px solid rgba(153, 153, 153, 0.97)', borderRadius: '4px', marginBottom: '20px', paddingLeft: '10px', color: previousDegrees ? '#000000' : 'rgba(0, 0, 0, 0.5)' }}
                />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="continue-btn button-with-shadow" 
                block
                style={{ backgroundColor: '#00BBF0', border: 'none', marginTop: '20px', width: '100%', height: '35px', padding: '5px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)', color: '#ffffff', fontWeight: 'bold' }}>
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
