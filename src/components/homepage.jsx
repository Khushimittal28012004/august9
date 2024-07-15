import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { fetchJobData, fetchUserProfiles } from './apiService'; // Adjust the import path as needed
import './homepage.css';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const jobData = await fetchJobData();
        setJobs(jobData);
        const userProfiles = await fetchUserProfiles();
        setProfiles(userProfiles);
      } catch (error) {
        setError("Error loading data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <Container fluid className="homepage-container">
      <Row className="header-row">
        <Col xs={2} className="logo-column">
          LOGO
        </Col>
        <Col xs={7}>
          <Form.Control type="text" placeholder="Search" className="search-input" />
        </Col>
        <Col xs={1} className="header-item">COMPANIES</Col>
        <Col xs={1} className="header-item">ROLES</Col>
        <Col xs={1} className="header-item">BLOGS</Col>
        <Col xs={1} className="header-item">
          <i className="fas fa-user"></i>
        </Col>
      </Row>
      <div className="main-content">
        <Row>
          <Col xs={3} className="sidebar">
            {/* Sidebar content */}
            <div className="profile-card">
              <div className="profile-image"></div>
              <div className="profile-name">NAME</div>
            </div>
            <div className="sidebar-menu">
              <div className="menu-item">My Profile</div>
              <div className="menu-item">My Matches</div>
              <div className="menu-item">My Jobs</div>
              <div className="menu-item">My Favorites</div>
            </div>
            <div className="roles-section">
              <div className="section-title">People in different roles</div>
              <div className="role-item">Data Scientist</div>
              <div className="role-item">Data Analyst</div>
              <div className="role-item">Data Engineer</div>
            </div>
            <div className="skills-section">
              <div className="section-title">Job Based On Skills</div>
              <Form>
                <Form.Check type="checkbox" label="SQL" />
                <Form.Check type="checkbox" label="Python" />
                <Form.Check type="checkbox" label="Tableau" />
              </Form>
            </div>
          </Col>
          <Col xs={9} className="main-content-col">
            {/* Main content */}
            <div className="find-job-card">
              <Button variant="success" className="find-job-button">
                Find your Dream
              </Button>
            </div>
            <div className="profiles-section">
              <h3 className="section-title">People with us</h3>
              <Row>
                {profiles.map((profile, idx) => (
                  <Col key={idx} xs={4} className="profile-col">
                    <div className="profile-card">
                      <img src={profile.imageUrl} alt="Profile" className="profile-image" />
                      <div className="profile-name">{profile.name}</div>
                      <div className="profile-company">{profile.company}</div>
                      <div className="profile-role">{profile.role}</div>
                      <Button variant="outline-success" className="read-more-button">Read more</Button>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="companies-section">
              <h3 className="section-title">Companies they Work at</h3>
              <div className="company-logos">
                <img src="amazon-logo.png" alt="Amazon" className="company-logo" />
                <img src="microsoft-logo.png" alt="Microsoft" className="company-logo" />
                <img src="google-logo.png" alt="Google" className="company-logo" />
                <img src="carenane-logo.png" alt="Carenane" className="company-logo" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default HomePage;
