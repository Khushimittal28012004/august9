import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './PeopleInDifferentRoles.css';

const PeopleInDifferentRoles = () => {
  const { role } = useParams();
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch profiles from backend
    const fetchProfiles = async () => {
      try {
        const response = await fetch(`/api/profiles?role=${role}`);
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };
    fetchProfiles();
  }, [role]);

  return (
    <Container fluid className="roles-container">
      <Row className="header-row">
        <Col xs={12} className="header">
          <h1>{role}</h1>
        </Col>
      </Row>
      <Row className="profiles-grid">
        {profiles.map((profile) => (
          <Col xs={12} md={6} lg={4} key={profile.id} className="profile-card">
            <div className="profile-card-inner">
              <div className="profile-picture" />
              <div className="profile-details">
                <h3>{profile.name}</h3>
                <p>{profile.company}</p>
                <p>{profile.role}</p>
                <Button variant="outline-success" onClick={() => navigate(`/profile/${profile.id}`)}>Read more</Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="text-center">
          <Button variant="success" className="see-all-button">See All</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PeopleInDifferentRoles;
