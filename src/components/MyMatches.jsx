import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './MyMatches.css';
import CardComponent from './CardComponent';

const MyMatches = () => {
  const navigate = useNavigate();

  const handleNavigateRole = (role) => {
    // Navigate to the role-specific page
    console.log(`Navigate to ${role}`);
  };

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
      <div style={{ padding: '40px' }}>
        <Row>
          <Col xs={3} style={{ backgroundColor: '#F5F5F7', padding: '20px' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginTop: '-18px', width: '368px', textAlign: 'center', height: '300px', marginBottom: '30px' }}>
              <div style={{ width: '200px', height: '200px', borderRadius: '50%', backgroundColor: '#E0E0E0', margin: '0 auto' }}></div>
              <div style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '24px' }}>NAME</div>
            </div>
            <div style={{ marginTop: '30px' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height: '329px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>People in different roles</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Data Scientist')}>1. Data Scientist</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Data Analyst')}>2. Data Analyst</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Data Engineer')}>3. Data Engineer</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Business Analyst')}>4. Business Analyst</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('ML Engineer/ML-Ops')}>5. ML Engineer/ML-Ops</div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '30px', backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/profile-one')}>My Profile</div>
              <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/my-matches')}>My Matches</div>
              <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/my-favorites')}>My Favorites</div>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }}>My Jobs</div>
            </div>

           
          </Col>
          <Col xs={9} style={{ paddingLeft: '0' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', marginLeft: '30px', height: '97.5%' , borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '25px' }}>RECOMMENDATIONS</h3>
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
