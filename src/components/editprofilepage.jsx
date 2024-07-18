import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import './editProfilePage.css';

const EditProfilePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Container fluid style={{ padding: 0, backgroundColor: '#F5F5F7', minHeight: '100vh' }}>
      <Row style={{ backgroundColor: '#333333', padding: '10px 0' }}>
        <Col xs={2} className="logo-column">LOGO</Col>
        <Col xs={8}>
          <input type="text" placeholder="Search" className="search-input" />
        </Col>
        <Col xs={2} className="header-items">
          <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>HOME</Link>
          <Link to="/companies" style={{ color: '#FFFFFF', textDecoration: 'none' }}>COMPANIES</Link>
          <Link to="/roles" style={{ color: '#FFFFFF', textDecoration: 'none' }}>ROLES</Link>
          <Link to="/blog" style={{ color: '#FFFFFF', textDecoration: 'none' }}>BLOG</Link>
        </Col>
      </Row>
      <div style={{ padding: '40px' }}>
        <Row>
          <Col xs={3} className="sidebar">
            <div className="profile-image"></div>
            <div className="profile-name">Name</div>
            <div className="profile-menu">
              <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}><div>My Profile</div></Link>
              <div>My Matches</div>
              <div>My Jobs</div>
              <div>My Searches</div>
              <div>My Favorites</div>
              <div>Account Settings</div>
              <Button variant="link" className="sign-out-button">Sign Out</Button>
            </div>
            <Button variant="primary" className="help-center-button" onClick={() => navigate('/help-center')}>HELP CENTRE</Button> {/* Add navigation */}
          </Col>
          <Col xs={9} style={{ padding: '20px' }}>
            <h2>Edit Information</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group controlId="formSkill">
                <Form.Label>Skill</Form.Label>
                <Form.Control type="text" placeholder="Enter skill" />
              </Form.Group>
              <Form.Group controlId="formPlace">
                <Form.Label>Place</Form.Label>
                <Form.Control type="text" placeholder="Enter place" />
              </Form.Group>
              <Form.Group controlId="formCV">
                <Form.Label>Update CV</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </div>
      <footer className="footer">
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

export default EditProfilePage;
