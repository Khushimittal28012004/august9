import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <Container fluid style={{ padding: 0, backgroundColor: '#F5F5F7', minHeight: '100vh' }}>
      <Row style={{ backgroundColor: '#333333', padding: '10px 0' }}>
        <Col xs={2} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer', paddingLeft: '40px', fontSize: '24px', fontWeight: 'bold' }} onClick={() => navigate('/home')}>
          LOGO
        </Col>
        <Col xs={8}>
          <input type="text" placeholder="Search" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none' }} />
        </Col>
        <Col xs={2} style={{ display: 'flex', justifyContent: 'space-around', color: '#FFFFFF', alignItems: 'center' }}>
          <div style={{ cursor: 'pointer' }} onClick={() => navigate('/home')}>HOME</div>
          <div style={{ cursor: 'pointer' }} onClick={() => navigate('/companies')}>COMPANIES</div>
          <div style={{ cursor: 'pointer' }} onClick={() => navigate('/roles')}>ROLES</div>
          <div style={{ cursor: 'pointer' }} onClick={() => navigate('/blogs')}>BLOGS</div>
          <div style={{ cursor: 'pointer' }}><i className="fas fa-user" style={{ fontSize: '24px' }}></i></div>
        </Col>
      </Row>
      <div style={{ padding: '40px' }}>
        <Row>
          <Col xs={12} style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
            <h3>Heading</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Col>
          <Col xs={12} style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
            <h3>Heading</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Button variant="success" style={{ backgroundColor: '#28a745', border: 'none', width: '100%' }}>Find me the best jobs</Button>
          </Col>
          <Col xs={12} style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
            <h3>Heading</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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

export default Blogs;
