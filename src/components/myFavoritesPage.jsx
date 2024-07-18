import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MyFavoritesPage = () => {
  const navigate = useNavigate();

  return (
    <Container fluid style={{ padding: 0, backgroundColor: '#F5F5F7', minHeight: '100vh' }}>
      <Row style={{ backgroundColor: '#333333', padding: '10px 0' }}>
        <Col xs={2} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer', paddingLeft: '40px', fontSize: '24px', fontWeight: 'bold' }}>
          LOGO
        </Col>
        <Col xs={8}>
          <input type="text" placeholder="Search" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none' }} />
        </Col>
        <Col xs={2} style={{ display: 'flex', justifyContent: 'space-around', color: '#FFFFFF', alignItems: 'center' }}>
          <div style={{ cursor: 'pointer' }}>COMPANIES</div>
          <div style={{ cursor: 'pointer' }}>ROLES</div>
          <div style={{ cursor: 'pointer' }}>BLOGS</div>
          <div style={{ cursor: 'pointer' }}><i className="fas fa-user" style={{ fontSize: '24px' }}></i></div>
        </Col>
      </Row>
      <div style={{ padding: '40px' }}>
        <Row>
          <Col xs={3} style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#E0E0E0', margin: '0 auto', marginBottom: '20px' }}></div>
            <div style={{ fontWeight: 'bold', fontSize: '24px' }}>NAME</div>
            <div style={{ marginTop: '20px', textAlign: 'left' }}>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/edit-profile')}>My Profile</div>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/my-matches')}>My Matches</div>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/my-favorites')}>My Favorites</div>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }}>My Jobs</div>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }}>My Searches</div>
              <Button variant="link" style={{ padding: 0, color: '#FF3B3F', textDecoration: 'none', display: 'block', marginTop: '10px' }}>Sign Out</Button>
            </div>
            <Button variant="primary" style={{ marginTop: '20px', backgroundColor: '#007bff', border: 'none' }}>HELP CENTRE</Button>
          </Col>
          <Col xs={9} style={{ paddingLeft: '0' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>MY FAVORITES</h3>
              <Row>
                {Array(6).fill().map((_, idx) => (
                  <Col key={idx} xs={4} style={{ padding: '20px' }}>
                    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                      <div style={{ width: '100%', height: '150px', backgroundColor: '#E0E0E0', margin: '0 auto', borderRadius: '8px' }}></div>
                      <div style={{ fontWeight: 'bold', marginTop: '10px' }}>Ritika Rauthan</div>
                      <div>Company</div>
                      <div>Data Scientist</div>
                      <Button variant="outline-success" style={{ marginTop: '10px', borderColor: '#28a745', color: '#28a745' }}>Read more</Button>
                    </div>
                  </Col>
                ))}
              </Row>
              <Button variant="success" style={{ backgroundColor: '#28a745', border: 'none', marginTop: '20px', display: 'block', width: '100%' }}>See All</Button>
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

export default MyFavoritesPage;
