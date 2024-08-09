import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Carousel } from 'react-bootstrap';
import './homepage.css';
import CardComponent from './CardComponent';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import FlipCard from './FlipCard';
import 'bootstrap/dist/css/bootstrap.min.css';




// Example data for the cards
const cardData = [
  { id: 1, name: 'Jhonson Romio', company: 'Company A', role: 'Data Scientist', profilePic: 'images/dp4.webp' },
  { id: 2, name: 'John Doe', company: 'Company B', role: 'Software Engineer', profilePic: 'images/dp6.avif' },
  { id: 3, name: 'Jane Smith', company: 'Company C', role: 'UX Designer', profilePic: 'images/dp2.avif' },
  { id: 4, name: 'Alice Johnson', company: 'Company D', role: 'Product Manager', profilePic: 'images/dp3.avif' },
  { id: 5, name: 'Bob Brown', company: 'Company E', role: 'Marketing Specialist', profilePic: 'images/dp5.avif' },
  { id: 4, name: 'Alice Johnson', company: 'Company D', role: 'Product Manager', profilePic: 'images/dp7.avif' }
];

// Function to split card data into chunks of 3
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const HomePage = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const navigate = useNavigate();

  const handleToggleSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  const handleNavigateRole = (role) => {
    navigate(`/roles/${role}`);
  };

  // Chunk the card data into arrays of 3
  const cardChunks = chunkArray(cardData, 3);
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
              <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/profile-one')}>My Profile</div>
              <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/my-matches')}>My Matches</div>
              <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/my-favorites')}>My Favorites</div>
              <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/edit-profile')}>My profile(read more)</div>
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
                 {/* Replace this section with the carousel */}
            
                 <Carousel
  interval={3000}
  prevIcon={<FaChevronCircleLeft size={40} style={{ color: 'grey', position: 'absolute', left: '-30px' }} />}
  nextIcon={<FaChevronCircleRight size={40} style={{ color: 'grey', position: 'absolute', right: '-30px' }} />}
>
  {cardChunks.map((chunk, chunkIndex) => (
    <Carousel.Item key={chunkIndex}>
      <Row>
        {chunk.map((card, index) => (
          <Col key={index} xs={12} md={4}>
            <CardComponent
              id={card.id}
              image={card.profilePic}
              name={card.name}
              company={card.company}
              position={card.role}
            />
          </Col>
        ))}
      </Row>
    </Carousel.Item>
  ))}
</Carousel>


        
            {/* End of carousel section */}
            <div style={{ textAlign: 'right', marginTop: '10px' }}>
                <a href="/all-profiles" style={{ color: '#28a745', textDecoration: 'none', fontWeight: 'bold' }}>
                  View All Profiles <i className="fas fa-arrow-right"></i>
                </a>
            
            
            </div>

            
              </Row>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '20px' }}>Companies they Work at</h3>
              <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '8px' }}>
                <img src="images/amazon.png" alt="Amazon" style={{ width: '160px' }} />
                <img src="images/microsoft.png" alt="Microsoft" style={{ width: '160px' }} />
                <img src="images/google.png" alt="Google" style={{ width: '160px' }} />
                <img src="images/catenate.jpeg" alt="Catenate" style={{ width: '160px' }} />
              </div>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '20px' }}>Find Company Based on size</h3>
              <Row>
              <Col xs={4} style={{ padding: '20px' }}>
          <FlipCard
            frontContent={
              <>
                <div style={{ width: '100%', height: '150px', backgroundColor: '#FFFFFF', margin: '0 auto', borderRadius: '8px', position: 'relative' }}>
                  <img src="images/starttup.webp" alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover' }} />
                </div>
                <div style={{ fontWeight: 'bold', marginTop: '10px' }}></div>
                <div>START UP</div>
                <Button variant="outline-success" style={{ marginTop: '10px', borderColor: '#28a745', color: '#28a745' }}>Read more</Button>
              </>
            }
            backContent={
              <div>
                <h4>About Company 1</h4>
                <p>Detailed information about Company 1.</p>
              </div>
            }
            backColor="#ff5733" // Different back color
          />
        </Col>
        <Col xs={4} style={{ padding: '20px' }}>
          <FlipCard
            frontContent={
              <>
                <div style={{ width: '100%', height: '150px', backgroundColor: '#FFFFFF', margin: '0 auto', borderRadius: '8px', position: 'relative' }}>
                  <img src="images/med.avif" alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover' }} />
                </div>
                <div style={{ fontWeight: 'bold', marginTop: '10px' }}></div>
                <div>SMALL MEDIUM BUSINESS</div>
                <Button variant="outline-success" style={{ marginTop: '10px', borderColor: '#28a745', color: '#28a745' }}>Read more</Button>
              </>
            }
                        backContent={
              <div>
                <h4>About Company 2</h4>
                <p>Detailed information about Company 2.</p>
              </div>
            }
            backColor="#3498db" // Different back color
          />
        </Col>
        <Col xs={4} style={{ padding: '20px' }}>
          <FlipCard
            frontContent={
              <>
                <div style={{ width: '100%', height: '150px', backgroundColor: '#FFFFFF', margin: '0 auto', borderRadius: '8px', position: 'relative' }}>
                  <img src="images/large.avif" alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover' }} />
                </div>
                <div style={{ fontWeight: 'bold', marginTop: '10px' }}></div>
                <div>LARGE CAP</div>
                <Button variant="outline-success" style={{ marginTop: '10px', borderColor: '#28a745', color: '#28a745' }}>Read more</Button>
              </>
            }
            
            backContent={
              <div>
                <h4>About Company 3</h4>
                <p>Detailed information about Company 3.</p>
              </div>
            }
            backColor="#f39c12" // Different back color
          />
        </Col>
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
