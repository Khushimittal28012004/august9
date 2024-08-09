// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Row, Col, Button, Form } from 'react-bootstrap';

// const MyFavoritesPage = () => {
//   const navigate = useNavigate();
//   // const [showAllSkills, setShowAllSkills] = useState(false);

//   const handleNavigateRole = (role) => {
//     // Navigate to the role-specific page
//     console.log(`Navigate to ${role}`);
//   };

//   // const handleToggleSkills = () => {
//   //   setShowAllSkills(prev => !prev);
//   // };

//   return (
//     <Container fluid style={{ padding: 0, backgroundColor: '#F5F5F7', minHeight: '100vh' }}>
//       <Row style={{ backgroundColor: '#333333', padding: '10px 0' }}>
//         <Col xs={2} style={{ color: '#FFFFFF', textAlign: 'center', cursor: 'pointer', paddingLeft: '40px', fontSize: '24px', fontWeight: 'bold' }}>
//           LOGO
//         </Col>
//         <Col xs={8}>
//           <input type="text" placeholder="Search" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none' }} />
//         </Col>
//         <Col xs={2} style={{ display: 'flex', justifyContent: 'space-around', color: '#FFFFFF', alignItems: 'center' }}>
//           <div style={{ cursor: 'pointer' }}>COMPANIES</div>
//           <div style={{ cursor: 'pointer' }}>ROLES</div>
//           <div style={{ cursor: 'pointer' }}>BLOGS</div>
//           <div style={{ cursor: 'pointer' }}><i className="fas fa-user" style={{ fontSize: '24px' }}></i></div>
//         </Col>
//       </Row>
//       <div style={{ padding: '40px' }}>
//         <Row>
//           <Col xs={3} style={{ backgroundColor: '#F5F5F7', padding: '20px' }}>
//             <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', height: '300px', marginBottom: '30px' }}>
//               <div style={{ width: '200px', height: '200px', borderRadius: '50%', backgroundColor: '#E0E0E0', margin: '0 auto' }}></div>
//               <div style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '24px' }}>NAME</div>
//             </div>
//             <div style={{ marginTop: '30px' }}>
//               <div style={{
//                 backgroundColor: '#FFFFFF',
//                 padding: '20px',
//                 borderRadius: '8px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                 height: showAllSkills ? 'auto' : '500px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between'
//               }}>
//                 <div>
//                   <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>People in different roles</div>
//                   <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Data Scientist')}>1. Data Scientist</div>
//                   <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Data Analyst')}>2. Data Analyst</div>
//                   <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Data Engineer')}>3. Data Engineer</div>
//                   <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Business Analyst')}>4. Business Analyst</div>
//                   <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('ML Engineer/ML-Ops')}>5. ML Engineer/ML-Ops</div>
//                 </div>
//                 <div>
//                   {/* <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Jobs Based On Skills</div> */}
//                   {/* <Form>
//                     <Form.Check type="checkbox" label="SQL" style={{ marginBottom: '10px' }} />
//                     <Form.Check type="checkbox" label="Excel" style={{ marginBottom: '10px' }} />
//                     <Form.Check type="checkbox" label="Python" style={{ marginBottom: '10px' }} />
//                     <Form.Check type="checkbox" label="Tableau" style={{ marginBottom: '10px' }} />
//                     <Form.Check type="checkbox" label="Power BI" style={{ marginBottom: '10px' }} />
//                     {showAllSkills && (
//                       <>
//                         <Form.Check type="checkbox" label="Machine Learning" style={{ marginBottom: '10px' }} />
//                         <Form.Check type="checkbox" label="NLP" style={{ marginBottom: '10px' }} />
//                         <Form.Check type="checkbox" label="Deep Learning" style={{ marginBottom: '10px' }} />
//                         <Form.Check type="checkbox" label="Tableau" style={{ marginBottom: '10px' }} />
//                         <Form.Check type="checkbox" label="Apache Spark" style={{ marginBottom: '10px' }} />
//                         <Form.Check type="checkbox" label="Hadoop" style={{ marginBottom: '10px' }} />
//                         <Form.Check type="checkbox" label="AWS" style={{ marginBottom: '10px' }} />
//                         <Form.Check type="checkbox" label="Data modelling" style={{ marginBottom: '10px' }} />
//                         <Form.Check type="checkbox" label="Statistical Analysis" style={{ marginBottom: '10px' }} />
//                       </>
//                     )}
//                     <Button variant="link" onClick={handleToggleSkills} style={{ padding: 0, color: '#FF3B3F', textDecoration: 'none' }}>
//                       {showAllSkills ? '- Show less' : '+10 more'}
//                     </Button>
//                   </Form> */}
//                 </div>
//               </div>
//             </div>
//             <div style={{ marginTop: '30px', backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/profile-one')}>My Profile</div>
//               <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/my-matches')}>My Matches</div>
//               <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/my-favorites')}>My Favorites</div>
//               <div style={{ marginBottom: '10px', cursor: 'pointer' }}>My Jobs</div>
//             </div>
//           </Col>
//           <Col xs={9} style={{ paddingLeft: '0' }}>
//             <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//               <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>MY FAVORITES</h3>
//               <Row>
//                 {Array(6).fill().map((_, idx) => (
//                   <Col key={idx} xs={4} style={{ padding: '20px' }}>
//                     <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
//                       <div style={{ width: '100%', height: '150px', backgroundColor: '#E0E0E0', margin: '0 auto', borderRadius: '8px' }}></div>
//                       <div style={{ fontWeight: 'bold', marginTop: '10px' }}>Ritika Rauthan</div>
//                       <div>Company</div>
//                       <div>Data Scientist</div>
//                       <Button variant="outline-success" style={{ marginTop: '10px', borderColor: '#28a745', color: '#28a745' }}>Read more</Button>
//                     </div>
//                   </Col>
//                 ))}
//               </Row>
//               <Button variant="success" style={{ backgroundColor: '#28a745', border: 'none', marginTop: '20px', display: 'block', width: '100%' }}>See All</Button>
//             </div>
//           </Col>
//         </Row>
//       </div>
//       <footer style={{ backgroundColor: '#333333', color: '#FFFFFF', padding: '10px 0', textAlign: 'center' }}>
//         <Row>
//           <Col xs={6}>
//             <p>Copyright 2024 . Terms and Conditions . User Agreement . Contact Us . About Us . Feedback</p>
//           </Col>
//           <Col xs={6}>
//             <p>HAVE A QUERY? CONTACT US</p>
//           </Col>
//         </Row>
//       </footer>
//     </Container>
//   );
// };

// export default MyFavoritesPage;










// ---------------------------------------------
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MyFavoritesPage = () => {
  const navigate = useNavigate();

  const handleNavigateRole = (role) => {
    // Navigate to the role-specific page
    console.log(`Navigate to ${role}`);
  };

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
          <Col xs={3} style={{ backgroundColor: '#F5F5F7', padding: '20px' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',    marginTop: '-18px',width: '368px', textAlign: 'center', height: '300px', marginBottom: '30px' }}>
              <div style={{ width: '200px', height: '200px', borderRadius: '50%', backgroundColor: '#E0E0E0', margin: '0 auto' }}></div>
              <div style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '24px' }}>NAME</div>
            </div>
            <div style={{ marginTop: '30px' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height: '500px', // Set a fixed height or adjust as needed
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '329px'
              }}>
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>People in different roles</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Data Scientist')}>1. Data Scientist</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Data Analyst')}>2. Data Analyst</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Data Engineer')}>3. Data Engineer</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('Business Analyst')}>4. Business Analyst</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleNavigateRole('ML Engineer/ML-Ops')}>5. ML Engineer/ML-Ops</div>
                </div>
                <Button variant="link" onClick={() => navigate('/help-center')}>HELP CENTRE</Button>

              </div>
            </div>
            <div style={{ marginTop: '30px', backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/profile-one')}>My Profile</div>
              <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/my-matches')}>My Matches</div>
              <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/my-favorites')}>My Favorites</div>
              <div style={{ marginBottom: '10px', cursor: 'pointer' }}>My Jobs</div>
            </div>

            
          </Col>
          <Col xs={9} style={{ paddingLeft: '0' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px',marginLeft: '30px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '25px' }}>MY FAVORITES</h3>
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
              <Button variant="success" style={{ backgroundColor: '#28a745', border: 'none', marginTop: '20px', display: 'block', marginLeft: '45%',width: '10%' }}>See All</Button>
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
