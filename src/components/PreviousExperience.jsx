import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { fetchItems } from '../api'; // Import API function
import './PreviousExperience.css';
// import { fetchItems, createItem } from 'khushim/src/api.js';

function PreviousExperience() {
  const [experience, setExperience] = useState('');
  const [employmentTitle, setEmploymentTitle] = useState('');
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadItems = async () => {
      const fetchedItems = await fetchItems();
      setItems(fetchedItems);
    };

    loadItems();
  }, []);

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/AdditionalInformation.jsx'); // Adjust this to navigate to the correct next page
  };

  return (
    <Container fluid style={{ background: '#F5F5F7', height: '100vh' }}>
      <div style={{ position: 'absolute', top: '80px', left: '80px', fontSize: '24px', fontWeight: 'bold' }}>LOGO</div>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="d-flex justify-content-center">
          <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)', maxWidth: '551px', width: '100%', margin: 'auto' }}>
            <h2 style={{ color: 'rgba(0, 0, 0, 0.5)', marginBottom: '40px', textAlign: 'center', fontWeight: 'bold', fontSize: '30px' }}>Previous Experience</h2>
            <Form onSubmit={handleContinue}>
              <Form.Group controlId="formExperience">
                <Form.Control
                  type="text"
                  placeholder="Total Experience (Years and months)"
                  className="form-control"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  style={{ 
                    width: '475px', 
                    height: '40px', 
                    backgroundColor: '#FFFFFF', 
                    border: '1px solid rgba(153, 153, 153, 0.97)', 
                    borderRadius: '4px', 
                    marginBottom: '20px', 
                    paddingLeft: '10px', 
                    color: experience ? '#000000' : 'rgba(0, 0, 0, 0.5)' 
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formEmploymentTitle">
                <Form.Control
                  type="text"
                  placeholder="Previous Employment Title"
                  className="form-control"
                  value={employmentTitle}
                  onChange={(e) => setEmploymentTitle(e.target.value)}
                  style={{ 
                    width: '475px', 
                    height: '40px', 
                    backgroundColor: '#FFFFFF', 
                    border: '1px solid rgba(153, 153, 153, 0.97)', 
                    borderRadius: '4px', 
                    marginBottom: '20px', 
                    paddingLeft: '10px', 
                    color: employmentTitle ? '#000000' : 'rgba(0, 0, 0, 0.5)' 
                  }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="continue-btn button-with-shadow"
                block
                style={{ backgroundColor: '#00BBF0', border: 'none', marginTop: '20px', width: '475px', height: '35px', padding: '5px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)', color: '#ffffff', fontWeight: 'bold' }}
              >
                Continue
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PreviousExperience;
