import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './AcademicInfo.css';

function AcademicInfo() {
  return (
    <Container fluid className="academic-info-container">
      <div className="logo">LOGO</div>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="d-flex justify-content-center">
          <div className="academic-info-form">
            <h2 className="academic-text">Academic Information</h2>
            <Form>
              <Form.Group controlId="formDegreeProgram">
                <Form.Control as="select" className="form-control">
                  <option>Current Degree Program</option>
                  <option>Bachelor's</option>
                  <option>Master's</option>
                  <option>Ph.D</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formMajor">
                <Form.Control as="select" className="form-control">
                  <option>Major</option>
                  <option>Computer Science</option>
                  <option>Data Science</option>
                  <option>Business Analytics</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formGraduationYear">
                <Form.Control as="select" className="form-control">
                  <option>Expected Graduation Year</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formPreviousDegrees">
                <Form.Control as="select" className="form-control">
                  <option>Previous Degrees</option>
                  <option>None</option>
                  <option>Bachelor's</option>
                  <option>Master's</option>
                </Form.Control>
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="continue-btn button-with-shadow" 
                block>
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