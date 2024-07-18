import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './MyMatches.css';

const MyMatches = () => {
  return (
    <Container fluid style={{ padding: 0, backgroundColor: '#F5F5F7', minHeight: '100vh' }}>
      <Row style={{ backgroundColor: '#333333', padding: '10px 0' }}>
        <Col xs={2} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer', paddingLeft: '40px', fontSize: '24px', fontWeight: 'bold' }}>
          LOGO
        </Col>
        <Col xs={7}>
          <input type="text" placeholder="Search" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none' }} />
        </Col>
        <Col xs={1} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer' }}>
          <Link to="/companies" style={{ color: '#FFFFFF', textDecoration: 'none' }}>COMPANIES</Link>
        </Col>
        <Col xs={1} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer' }}>
          <Link to="/roles" style={{ color: '#FFFFFF', textDecoration: 'none' }}>ROLES</Link>
        </Col>
        <Col xs={1} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer' }}>
          <Link to="/blogs" style={{ color: '#FFFFFF', textDecoration: 'none' }}>BLOGS</Link>
        </Col>
        <Col xs={1} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer' }}>
          <i className="fas fa-user" style={{ fontSize: '24px' }}></i>
        </Col>
      </Row>
      <div style={{ padding: '20px' }}>
        <Row>
          <Col xs={3} style={{ paddingRight: '0' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#E0E0E0', margin: '0 auto', marginBottom: '10px' }}></div>
              <div style={{ fontWeight: 'bold', fontSize: '20px' }}>NAME</div>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }}>My Profile</div>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }}>My Matches</div>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }}>My Favorites</div>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>People in different roles</div>
              <div>Data Scientist</div>
              <div>Data Analyst</div>
              <div>Data Engineer</div>
              <div style={{ color: 'red', cursor: 'pointer' }}>+200 more</div>
            </div>
          </Col>
          <Col xs={9}>
            <h3 style={{ marginBottom: '20px' }}>RECOMMENDATIONS</h3>
            <Row>
              {Array(6).fill().map((_, idx) => (
                <Col key={idx} xs={4} style={{ marginBottom: '20px' }}>
                  <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '20px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', textAlign: 'center' }}>
                    <div style={{ width: '100%', height: '150px', backgroundColor: '#E0E0E0', margin: '0 auto', borderRadius: '8px' }}></div>
                    <div style={{ fontWeight: 'bold', marginTop: '10px' }}>Ritika Rauthan</div>
                    <div>Company</div>
                    <div>Data Scientist</div>
                    <Button variant="outline-success" style={{ marginTop: '10px', borderColor: '#28a745', color: '#28a745' }}>Read more</Button>
                  </div>
                </Col>
              ))}
            </Row>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Button variant="success" style={{ backgroundColor: '#28a745', border: 'none', padding: '10px 40px' }}>See All</Button>
            </div>
          </Col>
        </Row>
      </div>
      <footer style={{ backgroundColor: '#333333', color: '#FFFFFF', padding: '10px 0', textAlign: 'center' }}>
        <Row>
          <Col xs={6}>
            <p>Copyright 2024 . Terms and Conditions . User Agreement . Contact Us . About Us . Feedback</p>
          </Col>
          <Col xs={6}>
            <p>HAVE A QUERY? CONTACT US</p>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default MyMatches;
