import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './employeeProfilepage.css';

const ProfilePage = () => {
  // eslint-disable-next-line
  const { id } = useParams(); // Get the profile ID from the URL
  // Mock profile data for demonstration
  const profile = {
    name: 'Ritika Rauthan',
    company: 'Company',
    title: 'Data Scientist',
    location: 'Current Place',
    education: 'abc',
    skills: 'abc',
    experience: 'cdf',
    languages: 'abc',
    industryType: 'acd',
    achievements: 'abc',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  };

  // Mock recommendations data for demonstration
  const recommendations = [
    { name: 'Ritika Rauthan', company: 'Company', title: 'Data Scientist' },
    { name: 'Ritika Rauthan', company: 'Company', title: 'Data Scientist' },
    { name: 'Ritika Rauthan', company: 'Company', title: 'Data Scientist' },
    { name: 'Ritika Rauthan', company: 'Company', title: 'Data Scientist' }
  ];

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
          <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>HOME</Link>
          <Link to="/companies" style={{ color: '#FFFFFF', textDecoration: 'none' }}>COMPANIES</Link>
          <Link to="/roles" style={{ color: '#FFFFFF', textDecoration: 'none' }}>ROLES</Link>
          <Link to="/blog" style={{ color: '#FFFFFF', textDecoration: 'none' }}>BLOG</Link>
        </Col>
      </Row>
      <div style={{ padding: '40px' }}>
        <Row>
          <Col xs={3} style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#E0E0E0', margin: '0 auto', marginBottom: '20px' }}></div>
            <div style={{ fontWeight: 'bold', fontSize: '24px' }}>{profile.name}</div>
            <div style={{ marginTop: '20px', textAlign: 'left' }}>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }}>My Matches</div>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }}>My Jobs</div>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }}>My Searches</div>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }}>My Favorites</div>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }}>Account Settings</div>
              <Button variant="link" style={{ padding: 0, color: '#FF3B3F', textDecoration: 'none', display: 'block', marginTop: '10px' }}>Sign Out</Button>
            </div>
            <Button variant="primary" style={{ marginTop: '20px', backgroundColor: '#007bff', border: 'none' }}>HELP CENTRE</Button>
          </Col>
          <Col xs={9} style={{ padding: '20px' }}>
            <Row>
              <Col xs={4}>
                <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#E0E0E0', margin: '0 auto', marginBottom: '20px' }}></div>
                <div>
                  <h2>{profile.name}</h2>
                  <p>Works at: {profile.company}</p>
                  <p>Title: {profile.title}</p>
                  <p>Current Place: {profile.location}</p>
                </div>
              </Col>
              <Col xs={8} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Button variant="outline-secondary" style={{ borderColor: '#28a745', color: '#28a745', fontSize: '24px' }}>
                  <i className="fas fa-heart"></i>
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: '20px' }}>
              <Col xs={6}>
                <h5>Education</h5>
                <p>{profile.education}</p>
              </Col>
              <Col xs={6}>
                <h5>Skill Set</h5>
                <p>{profile.skills}</p>
              </Col>
              <Col xs={6}>
                <h5>Industry Experience</h5>
                <p>{profile.experience}</p>
              </Col>
              <Col xs={6}>
                <h5>Languages Spoken</h5>
                <p>{profile.languages}</p>
              </Col>
              <Col xs={6}>
                <h5>Industry Type</h5>
                <p>{profile.industryType}</p>
              </Col>
              <Col xs={6}>
                <h5>Achievements</h5>
                <p>{profile.achievements}</p>
              </Col>
            </Row>
            <Row style={{ marginTop: '20px' }}>
              <h5>Role description/Responsibilities</h5>
              <p>{profile.description}</p>
            </Row>
            <Row style={{ marginTop: '40px', backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '20px' }}>RECOMMENDATIONS</h3>
              <Row>
                {recommendations.map((recommendation, idx) => (
                  <Col key={idx} xs={3} style={{ padding: '20px' }}>
                    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                      <div style={{ width: '100%', height: '150px', backgroundColor: '#E0E0E0', margin: '0 auto', borderRadius: '50%' }}></div>
                      <div style={{ fontWeight: 'bold', marginTop: '10px' }}>{recommendation.name}</div>
                      <div>{recommendation.company}</div>
                      <div>{recommendation.title}</div>
                      <Button variant="outline-success" style={{ marginTop: '10px', borderColor: '#28a745', color: '#28a745' }}>Read more</Button>
                    </div>
                  </Col>
                ))}
              </Row>
            </Row>
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

export default ProfilePage;
