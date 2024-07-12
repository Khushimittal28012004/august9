import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './homepage.css';

const HomePage = () => {
  return (
    <Container fluid style={{ padding: 0, backgroundColor: '#F5F5F7', minHeight: '100vh' }}>
      <Row style={{ backgroundColor: '#333333', padding: '10px 0' }}>
        <Col xs={2} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer', paddingLeft: '40px', fontSize: '24px', fontWeight: 'bold' }}>
          LOGO
        </Col>
        <Col xs={7}>
          <Form.Control type="text" placeholder="Search" style={{ backgroundColor: '#444444', borderColor: '#444444', color: '#B0B0B0' }} />
        </Col>
        <Col xs={1} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer' }}>
          COMPANIES
        </Col>
        <Col xs={1} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer' }}>
          ROLES
        </Col>
        <Col xs={1} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer' }}>
          BLOGS
        </Col>
        <Col xs={1} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer' }}>
          <i className="fas fa-user" style={{ fontSize: '24px' }}></i>
        </Col>
      </Row>
      <Row>
        <Col xs={2} style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#E0E0E0', margin: '0 auto' }}></div>
            <div style={{ fontWeight: 'bold', marginTop: '10px' }}>NAME</div>
          </div>
          <div style={{ marginTop: '30px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>My Profile</div>
            <div style={{ fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>My Matches</div>
            <div style={{ fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>My Jobs</div>
            <div style={{ fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>My Favorites</div>
          </div>
          <div style={{ marginTop: '30px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>People in different roles</div>
            <div style={{ marginBottom: '10px' }}>Data Scientist</div>
            <div style={{ marginBottom: '10px' }}>Data Analyst</div>
            <div style={{ marginBottom: '10px' }}>Data Engineer</div>
            <div style={{ color: 'red', cursor: 'pointer' }}>+200 more</div>
          </div>
        </Col>
        <Col xs={10} style={{ padding: '20px' }}>
          <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <Button variant="success" style={{ backgroundColor: '#28a745', border: 'none' }}>Find your Dream</Button>
          </div>
          <div style={{ marginTop: '20px' }}>
            <h3>People with us</h3>
            <Row>
              {Array(3).fill().map((_, idx) => (
                <Col key={idx} xs={4} style={{ padding: '20px' }}>
                  <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                    <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#E0E0E0', margin: '0 auto' }}></div>
                    <div style={{ fontWeight: 'bold', marginTop: '10px' }}>Ritika Rauthan</div>
                    <div>Company</div>
                    <div>Data Scientist</div>
                    <Button variant="outline-success" style={{ marginTop: '10px', borderColor: '#28a745', color: '#28a745' }}>Read more</Button>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div style={{ marginTop: '20px' }}>
            <h3>Companies they Work at</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src="amazon-logo.png" alt="Amazon" style={{ width: '100px' }} />
              <img src="microsoft-logo.png" alt="Microsoft" style={{ width: '100px' }} />
              <img src="google-logo.png" alt="Google" style={{ width: '100px' }} />
              <img src="carenane-logo.png" alt="Carenane" style={{ width: '100px' }} />
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={2} style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            {/* Profile Picture and Name */}
          </div>
          <div style={{ marginTop: '30px' }}>
            <div style={{ fontWeight: 'light', marginBottom: '10px', cursor: 'pointer' }}>People in different Roles</div>
            <div style={{ fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>Data Scientist</div>
            <div style={{ fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>Data Analyst</div>
            <div style={{ fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>Data Engineer</div>
            <div style={{ color: 'red', cursor: 'pointer' }}>+200 more</div>
          </div>
          <div style={{ marginTop: '30px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Job Based On Skills</div>
            <Form>
              <Form.Check type="checkbox" label="SQL" style={{ marginBottom: '10px' }} />
              <Form.Check type="checkbox" label="Python" style={{ marginBottom: '10px' }} />
              <Form.Check type="checkbox" label="Tableau" style={{ marginBottom: '10px' }} />
              <div style={{ color: 'red', cursor: 'pointer' }}>+200 more</div>
            </Form>
          </div>
        </Col>
        <Col xs={10} style={{ padding: '20px' }}>
          <div style={{ marginTop: '20px' }}>
            <h3>Find Company Based on size</h3>
            <Row>
              {Array(3).fill().map((_, idx) => (
                <Col key={idx} xs={4} style={{ padding: '20px' }}>
                  <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                    <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#E0E0E0', margin: '0 auto' }}></div>
                    <div style={{ fontWeight: 'bold', marginTop: '10px' }}>Company name</div>
                    <div>Company</div>
                    <div>Info</div>
                    <Button variant="outline-success" style={{ marginTop: '10px', borderColor: '#28a745', color: '#28a745' }}>Read more</Button>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
