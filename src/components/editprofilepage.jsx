import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 
import './editProfilePage.css';

const EditProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setProfileImage(file);
        setIsUploaded(true);
        setIsEditing(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!isUploaded) {
      document.getElementById('fileInput').click();
    } else {
      console.log('Profile photo has already been uploaded.');
    }
  };

  const handleEdit = () => {
    if (isUploaded) {
      setIsEditing(true);
      document.getElementById('fileInput').click();
    } else {
      console.log('No profile photo to edit.');
    }
  };

  const handleFileInputChange = (event) => {
    handleImageChange(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Container fluid style={{ padding: 0, backgroundColor: '#F5F5F7', minHeight: '100vh' }}>
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
          <div style={{ cursor: 'pointer', marginLeft: '-186px' }} onClick={() => navigate('/home')}>
            HOME
          </div>
          <div style={{ cursor: 'pointer', marginLeft: '50px' }} onClick={() => navigate('/companies')}>
            COMPANIES
          </div>
          <div style={{ cursor: 'pointer', marginLeft: '50px' }} onClick={() => navigate('/roles')}>
            ROLES
          </div>
          <div style={{ cursor: 'pointer', marginLeft: '50px' }} onClick={() => navigate('/blogs')}>
            BLOGS
          </div>
          <div style={{ cursor: 'pointer', marginLeft: '50px' }}>
            <i className="fas fa-user" style={{ fontSize: '24px' }}></i>
          </div>
        </Col>
      </Row>
      <div style={{ padding: '40px' }}>
        <Row>
          <Col xs={3} style={{ backgroundColor: '#F5F5F7', padding: '20px' }}>
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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height:'300px',
                marginTop: '90%',
              }}>
                <div>
                  <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/profile-one')}>My Profile</div>
                  <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/my-matches')}>My Matches</div>
                  <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/my-favorites')}>My Favorites</div>
                  <div className="nav-link" style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => navigate('/edit-profile')}>My profile(read more)</div>
                  <div style={{ marginBottom: '10px', cursor: 'pointer' }}>My Jobs</div>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative', marginTop: '30px', backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '300px' }}>
  <a href="" style={{ color: 'black', textDecoration: 'none', position: 'absolute', top: '27px', left: '21px', fontSize: '18px', }}>Sign out</a>
  
  <style>
    {`
      a:hover {
        text-decoration: underline;
      }
    `}
  </style>

  <Button variant="primary" className="help-center-button" onClick={() => navigate('/help-center')}>HELP CENTRE</Button>
</div>


            {/* right side  */}
          </Col>
           {/* profile */}


          <Col xs={9} style={{ padding: '20px' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', textAlign: 'center', height: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative', marginBottom: '30px',    marginLeft: '-406px' }}>
             <div style={{ width: '200px', height: '200px', borderRadius: '50%', backgroundColor: '#E0E0E0',     marginLeft: '64px'}}></div>
              <div style={{ fontWeight: 'bold', marginTop: '18px', fontSize: '24px',textAlign: 'left' ,    marginLeft: '122px'}}>NAME</div>

             
            </div>

            {/* ************************************ */}
            {/* for information */}
            <div style={{ 
  display: 'flex', 
  backgroundColor: '#FFFFFF', 
  padding: '20px', 
  borderRadius: '8px', 
  textAlign: 'center', 
  height: '300px', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
  position: 'relative', 
  marginBottom: '30px' 
}}>
  <div style={{ flex: 1, paddingRight: '10px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div>
      <span style={{ fontWeight: 'bold' }}>Education</span>
      <span style={{ marginLeft: '40px' }}>abc</span>
      <hr style={{ width: '50%' }} />
    </div>
    <div>
      <span style={{ fontWeight: 'bold' }}>Industry Experience</span>
      <span style={{ marginLeft: '40px' }}>abc</span>
      <hr style={{ width: '50%' }} />
    </div>
    <div>
      <span style={{ fontWeight: 'bold' }}>Industry Type</span>
      <span style={{ marginLeft: '40px' }}>abc</span>
      <hr style={{ width: '50%' }} />
    </div>
  </div>
  <div style={{ flex: 1, paddingLeft: '10px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div>
      <span style={{ fontWeight: 'bold' }}>Skill Set</span>
      <span style={{ marginLeft: '40px' }}>abc</span>
      <hr style={{ width: '50%' }} />
    </div>
    <div>
      <span style={{ fontWeight: 'bold' }}>Language-Spoken</span>
      <span style={{ marginLeft: '40px' }}>abc</span>
      <hr style={{ width: '50%' }} />
    </div>
    <div>
      <span style={{ fontWeight: 'bold' }}>Achievement</span>
      <span style={{ marginLeft: '40px' }}>abc</span>
      <hr style={{ width: '50%' }} />
    </div>
  </div>
</div>




            {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
            {/* for role description  */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', textAlign: 'center', height: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative', marginBottom: '30px' }}>
              {/* <Button variant="success" style={{ backgroundColor: '#28a745', border: 'none', position: 'absolute', bottom: '20px', left: '40px', fontSize: '20px', padding: '15px 40px' }}>
                Find your Dream
              </Button> */}
              
              <h2 style={{ marginLeft:'0px',}}>Role Description/Responsibilities</h2>
            <p   style={{ marginLeft:'0px', marginTop:'30px', textAlign:'left'}}> Lorem ipsum  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut eligendi tempora accusantium ut quibusdam facilis quia cumque aliquid, obcaecati repudiandae voluptates incidunt neque non. Incidunt, numquam aspernatur fugiat adipisci laborum rerum sapiente et mollitia eius voluptatibus esse, sunt quos excepturi deserunt suscipit. Dignissimos sint pariatur eum modi. Saepe, libero aliquam.dolor sit amet consectetur adipisicing elit. Impedit ex nostrum consequuntur  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi necessitatibus perspiciatis soluta sequi non fugiat quaerat deleniti? Quasi, consequuntur sed.iusto. Quo nobis quod iste suscipit, aut ab.</p>
            </div>
            {/* <div className="edit_info">
              <h2>Edit Information</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label className='name'>Name</Form.Label>
                  <Form.Control type="text" className='input' placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formSkill">
                  <Form.Label id="A">Skill</Form.Label>
                  <Form.Control className='input' type="text" placeholder="Enter skill" />
                </Form.Group>
                <Form.Group controlId="formPlace">
                  <Form.Label id="A">Place</Form.Label>
                  <Form.Control className='input' type="text" placeholder="Enter place" />
                </Form.Group>
                <Form.Group controlId="formCV">
                  <Form.Label id="A">Update CV</Form.Label>
                  <Form.Control className='input' type="file" />
                </Form.Group>
                <Button id="submit" variant="primary" type="submit">Submit</Button>
              </Form>
            </div> */}
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
