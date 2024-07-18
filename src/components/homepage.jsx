import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './homepage.css';

const HomePage = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const navigate = useNavigate();

  const handleToggleSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  const handleNavigateRole = (role) => {
    navigate(`/roles/${role}`);
  };

  return (
    <Container fluid style={{ padding: 0, backgroundColor: '#F5F5F7', minHeight: '100vh' }}>
      <Row style={{ backgroundColor: '#333333', padding: '10px 0' }}>
        <Col xs={2} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer', paddingLeft: '40px', fontSize: '24px', fontWeight: 'bold' }} onClick={() => navigate('/home')}>
          LOGO
        </Col>
        <Col xs={7}>
          <Form.Control type="text" placeholder="Search" style={{ backgroundColor: '#444444', borderColor: '#444444', color: '#B0B0B0' }} />
        </Col>
        <Col xs={1} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer' }}>
          <div className="nav-link" onClick={() => navigate('/companies')}>COMPANIES</div>
        </Col>
        <Col xs={1} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer' }}>
          <div className="nav-link" onClick={() => navigate('/roles')}>ROLES</div>
        </Col>
        <Col xs={1} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer' }}>
          <div className="nav-link" onClick={() => navigate('/blogs')}>BLOGS</div>
        </Col>
        <Col xs={1} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer' }}>
          <i className="fas fa-user" style={{ fontSize: '24px' }}></i>
        </Col>
      </Row>
      <div style={{ padding: '0 40px' }}>
        <Row>
          <Col xs={3} style={{ backgroundColor: '#F5F5F7', padding: '20px' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', height: '300px', marginBottom: '30px' }}>
              <div style={{ width: '200px', height: '200px', borderRadius: '50%', backgroundColor: '#E0E0E0', margin: '0 auto' }}></div>
              <div style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '24px' }}>NAME</div>
            </div>
            <div style={{ marginTop: '30px' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height: showAllSkills ? 'auto' : '500px',
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
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Jobs Based On Skills</div>
                  <Form>
                    <Form.Check type="checkbox" label="SQL" style={{ marginBottom: '10px' }} />
                    <Form.Check type="checkbox" label="Excel" style={{ marginBottom: '10px' }} />
                    <Form.Check type="checkbox" label="Python" style={{ marginBottom: '10px' }} />
                    <Form.Check type="checkbox" label="Tableau" style={{ marginBottom: '10px' }} />
                    <Form.Check type="checkbox" label="Power BI" style={{ marginBottom: '10px' }} />
                    {showAllSkills && (
                      <>
                        <Form.Check type="checkbox" label="Machine Learning" style={{ marginBottom: '10px' }} />
                        <Form.Check type="checkbox" label="NLP" style={{ marginBottom: '10px' }} />
                        <Form.Check type="checkbox" label="Deep Learning" style={{ marginBottom: '10px' }} />
                        <Form.Check type="checkbox" label="Tableau" style={{ marginBottom: '10px' }} />
                        <Form.Check type="checkbox" label="Apache Spark" style={{ marginBottom: '10px' }} />
                        <Form.Check type="checkbox" label="Hadoop" style={{ marginBottom: '10px' }} />
                        <Form.Check type="checkbox" label="AWS" style={{ marginBottom: '10px' }} />
                        <Form.Check type="checkbox" label="Data modelling" style={{ marginBottom: '10px' }} />
                        <Form.Check type="checkbox" label="Statistical Analysis" style={{ marginBottom: '10px' }} />
                      </>
                    )}
                    <Button variant="link" onClick={handleToggleSkills} style={{ padding: 0, color: '#FF3B3F', textDecoration: 'none' }}>
                      {showAllSkills ? '- Show less' : '+10 more'}
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '30px', backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/edit-profile')}>My Profile</div>
              <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/my-matches')}>My Matches</div>
              <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/my-favorites')}>My Favorites</div>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }}>My Jobs</div>
            </div>
          </Col>
          <Col xs={9} style={{ padding: '20px' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', textAlign: 'center', height: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative', marginBottom: '30px' }}>
              <Button variant="success" style={{ backgroundColor: '#28a745', border: 'none', position: 'absolute', bottom: '20px', left: '40px', fontSize: '20px', padding: '15px 40px' }}>
                Find your Dream
              </Button>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', height: '500px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '20px' }}>People with us</h3>
              <Row>
                {Array(3).fill().map((_, idx) => (
                  <Col key={idx} xs={4} style={{ padding: '20px' }}>
                    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '20px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', textAlign: 'center' }}>
                      <div style={{ width: '100%', height: '150px', backgroundColor: '#E0E0E0', margin: '0 auto', borderRadius: '8px' }}></div>
                      <div style={{ fontWeight: 'bold', marginTop: '10px' }}>Ritika Rauthan</div>
                      <div>Company</div>
                      <div>Data Scientist</div>
                      <Button variant="outline-success" style={{ marginTop: '10px', borderColor: '#28a745', color: '#28a745' }} onClick={() => navigate(`/profile/${idx}`)}>Read more</Button>
                    </div>
                  </Col>
                ))}
              </Row>
              <div style={{ textAlign: 'right', marginTop: '10px' }}>
                <a href="/all-profiles" style={{ color: '#28a745', textDecoration: 'none', fontWeight: 'bold' }}>
                  View All Profiles <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '20px' }}>Companies they Work at</h3>
              <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '8px' }}>
                <img src="amazon-logo.png" alt="Amazon" style={{ width: '100px' }} />
                <img src="microsoft-logo.png" alt="Microsoft" style={{ width: '100px' }} />
                <img src="google-logo.png" alt="Google" style={{ width: '100px' }} />
                <img src="carenane-logo.png" alt="Carenane" style={{ width: '100px' }} />
              </div>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '20px' }}>Find Company Based on size</h3>
              <Row>
                {Array(3).fill().map((_, idx) => (
                  <Col key={idx} xs={4} style={{ padding: '20px' }}>
                    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '20px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', textAlign: 'center' }}>
                      <div style={{ width: '100%', height: '150px', backgroundColor: '#E0E0E0', margin: '0 auto', borderRadius: '8px' }}></div>
                      <div style={{ fontWeight: 'bold', marginTop: '10px' }}>Company name</div>
                      <div>Company</div>
                      <div>Info</div>
                      <Button variant="outline-success" style={{ marginTop: '10px', borderColor: '#28a745', color: '#28a745' }}>Read more</Button>
                    </div>
                  </Col> 
                ))}
              </Row>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
              <h3>Some text with Image</h3>
              <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <Button variant="success" style={{ backgroundColor: '#28a745', border: 'none' }}>Find me the best jobs</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <footer style={{ backgroundColor: '#333333', color: '#FFFFFF', padding: '10px 0', textAlign: 'center' }}>
        <Row>
          <Col xs={6}>
            <p>
              Copyright 2024 . Terms and Conditions . User Agreement . Contact Us . 
              <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/about-us')}>About Us</span> . Feedback
            </p>
          </Col>
          <Col xs={6}>
            <p>HAVE A QUERY? CONTACT US</p>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default HomePage;
