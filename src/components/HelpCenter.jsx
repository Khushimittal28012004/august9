import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HelpCenter.css'; // Import the CSS file

const HelpCenter = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Container fluid className="help-center-container">

    {/* ******************** */}

    <Row style={{ backgroundColor: '#333333', padding: '10px 10px' }}>
        <Col
          xs={2}
          style={{
            color: '#FFFFFF',
            textAlign: 'center',
            cursor: 'pointer',
            paddingLeft: '40px',
            fontSize: '24px',
            fontWeight: 'bold'
          }}
          onClick={() => navigate('/home')}
        >
          LOGO
        </Col>
        <Col
          xs={7}
          style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
        >
          <input
            type="text"
            id="search1"
            placeholder="Search"
            style={{
              width: '60%',
              padding: '10px',
              borderRadius: '5px',
              border: 'none'
            }}
          />
        </Col>
        <Col
          xs={3}
          className="headerup"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            color: '#FFFFFF',
            alignItems: 'center',
            paddingRight: '10px'
          }}
        >
          <div style={{ cursor: 'pointer' ,marginLeft: '-186px'}} onClick={() => navigate('/home')}>
            HOME
          </div>
          <div style={{ cursor: 'pointer' ,marginLeft: '50px'}} onClick={() => navigate('/companies')}>
            COMPANIES
          </div>
          <div style={{ cursor: 'pointer',marginLeft: '50px' }} onClick={() => navigate('/roles')}>
            ROLES
          </div>
          <div style={{ cursor: 'pointer',marginLeft: '50px' }} onClick={() => navigate('/blogs')}>
            BLOGS
          </div>
          <div style={{ cursor: 'pointer',marginLeft: '50px' }}>
            <i className="fas fa-user" style={{ fontSize: '24px' }}></i>
          </div>
        </Col>
      </Row>
    {/* ******************** */}
    <div style={{ padding: '0 40px' }}>
    <Row>
    <Col xs={3} style={{ backgroundColor: '#F5F5F7', padding: '20px',    marginTop: '21%' }}>
            {/* <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', height: '300px', marginBottom: '30px' }}>
              <div style={{ width: '200px', height: '200px', borderRadius: '50%', backgroundColor: '#E0E0E0', margin: '0 auto' }}></div>
              <div style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '24px' }}>NAME</div>
            </div> */}
            <div style={{ marginTop: '30px' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                // height: showAllSkills ? 'auto' : '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  {/* <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>People in different roles</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Data Scientist')}>1. Data Scientist</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Data Analyst')}>2. Data Analyst</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Data Engineer')}>3. Data Engineer</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Business Analyst')}>4. Business Analyst</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('ML Engineer/ML-Ops')}>5. ML Engineer/ML-Ops</div> */}
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Jobs Based On Skills</div>
                  {/* <Form>
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
                  </Form> */}
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
      {/* <Row className="header-row"> */}
      <Col xs={9} style={{ padding: '20px' }}>

      <div style={{ backgroundColor: '#3498db', padding: '20px', borderRadius: '8px', textAlign: 'center', height: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative', marginBottom: '30px',  marginLeft: '-412px',  marginTop: '20px' }}>
      {/* <Col xs={12} className="header"> */}
          <h1 className="header">HOW CAN WE HELP YOU?</h1>
          </div>
        {/* </Col> */}
        {/* <div className="header" style={{ backgroundColor: '#3498db', padding: '20px', borderRadius: '8px', textAlign: 'center', height: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative', marginBottom: '30px' }}>
              <h1 variant="success" style={{ backgroundColor: '#28a745', border: 'none', position: 'absolute', bottom: '20px', left: '40px', fontSize: '20px', padding: '15px 40px' }}>
              HOW CAN WE HELP YOU?
                </h1>
            </div> */}
      
      <Row className="main-content">
        <Col xs={4} className="card" onClick={() => navigate('/profile')}>
          <h3 className="card-title">PROFILE</h3>
        </Col>
        <Col xs={4} className="card" onClick={() => navigate('/support')}>
          <h3 className="card-title">SUPPORT</h3>
        </Col>
        <Col xs={4} className="card" onClick={() => navigate('/alerts')}>
          <h3 className="card-title">ALERTS</h3>
        </Col>
      </Row>
      <Row className="main-content">
        <Col xs={4} className="card" onClick={() => navigate('/faq')}>
          <h3 className="card-title">FAQ</h3>
        </Col>
        <Col xs={4} className="card" onClick={() => navigate('/reviews')}>
          <h3 className="card-title">REVIEWS</h3>
        </Col>
        <Col xs={4} className="card" onClick={() => navigate('/about-us')}>
          <h3 className="card-title">ABOUT US</h3>
        </Col>
      </Row>
      </Col>

        </Row>
        
      </div>
      
    </Container>
  );
};

export default HelpCenter;
