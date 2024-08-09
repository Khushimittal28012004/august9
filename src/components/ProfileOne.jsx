
// // import React, { useState } from 'react';
// import React, { useState, useRef } from 'react';

// import { useNavigate } from 'react-router-dom';
// import { Row, Col, Form, Container } from 'react-bootstrap';
// import './ProfileOne.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCamera } from '@fortawesome/free-solid-svg-icons';



// const ProfilePage = () => {


//   const [socialLinks, setSocialLinks] = useState([
//     { username: 'Belgrave House eBooks', platform: 'LinkedIn' },
//     { username: 'belgravehouse', platform: 'Pinterest' },
//     { username: 'belgravelreads', platform: 'Instagram' },
//     { username: 'belgrave_house', platform: 'Instagram' },
//   ]);

//   // const [profilePic, setProfilePic] = useState('https://via.placeholder.com/150');
//   const [showPopup, setShowPopup] = useState(false);
//   const fileInputRef = useRef(null);
//   const navigate = useNavigate();
//   const [activeSection, setActiveSection] = useState('personal-info');
//   const [isDivVisible, setIsDivVisible] = useState(false);

//   // 
//   // const HeaderBackground = () => {
//   //   const [isDivVisible, setIsDivVisible] = useState(false);
  
//   //   const toggleDiv = () => {
//   //     setIsDivVisible(!isDivVisible);
//   //   };
  
//   // 
  
//     // const [isDivVisible, setIsDivVisible] = useState(false);
//     const [backgroundImage, setBackgroundImage] = useState('https://via.placeholder.com/1500x200');
  

//   const handleLinkClick = (section) => {
//     setActiveSection(section);
//   };

//   const addSocialLink = () => {
//     setSocialLinks([...socialLinks, { username: '', platform: '' }]);
//   };

//   const handleInputChange = (index, field, value) => {
//     const newLinks = [...socialLinks];
//     newLinks[index][field] = value;
//     setSocialLinks(newLinks);
//   };

//   // @@@@@@@@@@@@@@@@@@@@@@@@@@@@

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   // const togglePopup = () => {
//   //   setShowPopup(!showPopup);
//   // };

//   // for edit open 
//   // const handleFileChange = (event) => {
//   //   const file = event.target.files[0];
//   //   if (file) {
//   //     const newImageUrl = URL.createObjectURL(file);
//   //     setProfilePic(newImageUrl);
//   //   }
//   // };


//   //  const handleFileChange = (event) => {
//   //   const file = event.target.files[0];
//   //   if (file) {
//   //     const reader = new FileReader();
//   //     reader.onloadend = () => {
//   //       setProfilePic(reader.result);
//   //       setShowPopup(false); // Close popup after uploading
//   //     };
//   //     reader.readAsDataURL(file);
//   //   }
//   // };

//   // const handleUpload = () => {
//   //   fileInputRef.current.click();
//   // };

 
//   const handleOptionClick = (option) => {
//     if (option === 'upload') {
//       fileInputRef.current.click(); // Ensure this triggers the file input dialog
//       // handleUpload();
//     } else if (option === 'remove') {
//       // setProfilePic('https://via.placeholder.com/150');
//       setBackgroundImage('https://via.placeholder.com/1500x200');
//     setIsDivVisible(false);

//       setShowPopup(false);
//     }
//   };
//   const toggleDiv = () => setIsDivVisible(!isDivVisible);
 

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         console.log('New background image URL:', reader.result); // Add this line
//         setBackgroundImage(reader.result);
//         setIsDivVisible(false); // Close the menu after selecting the image
//       };
//       reader.readAsDataURL(file);
//     }
//   };


  

// // @@@@@@@@@


//   return (
//     <div className="profile-page">
//       <header>
//         <Row className="header-row">
//           <Col xs={2} className="header-logo" onClick={() => navigate('/home')}>
//             LOGO
//           </Col>
//           <Col xs={7}>
//             <Form.Control type="text" placeholder="Search" className="header-search" />
//           </Col>
//           <Col xs={1} className="header-link" onClick={() => navigate('/companies')}>
//             COMPANIES
//           </Col>
//           <Col xs={1} className="header-link" onClick={() => navigate('/roles')}>
//             ROLES
//           </Col>
//           <Col xs={1} className="header-link" onClick={() => navigate('/blogs')}>
//             BLOGS
//           </Col>
//           <Col xs={1} className="header-icon">
//             <i className="fas fa-user"></i>
//           </Col>
//         </Row>
//       </header>
    
//       {/*  */}
  
//       {/*  */}
//       <header className="profile-header">
//       <div className="header-bg-wrapper" style={{ position: 'relative' }}>
//       {/* <img src="https://via.placeholder.com/1500x200" alt="Header Background" className="header-bg-img" /> */}
//       <img
//           src={backgroundImage}  // Ensure this uses the state variable
//           alt="Header Background"
//           className="header-bg-img"
//           style={{ width: '100%', height: 'auto' }} // Adjust to fit your layout
//         />
//       <div
//         className="edit-background-box"
//         style={{
//           position: 'absolute',
//           bottom: '-99px',
//           left: '172px',
//           background: 'rgba(121, 116, 116, 0.5)',
//           padding: '10px',
//           borderRadius: '6px',
//           height: '60px'
//         }}
//       >
//         <button
//           aria-label="Edit profile background"
//           className="edit-background-button"
//           style={{ background: 'none', border: 'none', color: 'black', display: 'flex', alignItems: 'center' }}
//           // style={{ border: 'none', color: 'black', display: 'flex', alignItems: 'center' }}
//           onClick={toggleDiv}
//         >
//           <FontAwesomeIcon icon={faCamera} />
//           <span className="button-text" style={{ marginLeft: '10px', color:'black' }}>Edit Background</span>
//         </button>
//         {isDivVisible && (
//           <div
//             className="side-menu"
//             style={{
//               position: 'absolute',
//               // bottom: '70px', // Adjust as needed
//               // left: '200px', // Adjust as needed
//               top: '64px',
//               left: '4px',
//               background: 'white',
//               boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//               borderRadius: '8px',
//               padding: '9px',
//               zIndex: 10,
//               display: 'flex',
//               flexDirection: 'column',
//               width: '137px',


//             }}
//           >

//            <label htmlFor="file-upload" style={{ margin: '5px', color: 'black', textDecoration: 'none', textAlign: 'center' }}>
//                 Upload
//               </label>
//               <input
//                 id="file-upload"
//                 type="file"
//                 accept="image/*"
//                 style={{ display: 'none' }}
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//                 />
//         {/* <a href="#upload" style={{ margin: '5px', color: 'black', textDecoration: 'none',textAlign: 'center' }}>Upload</a> */}
//         <a href="#edit" style={{ margin: '5px', color: 'black', textDecoration: 'none' , textAlign: 'center' }}>Edit</a>
//         <a href="#remove" style={{ margin: '5px', color: 'black', textDecoration: 'none' , textAlign: 'center' }}>Remove</a>

//           </div>
//         )}
//       </div>
//     </div>

//       <div className="profile-info">
//         <img src="https://via.placeholder.com/150" alt="Profile" className="profile-img" />
//         {/* <img src="" alt="Profile" className="profile-img" /> */}
//         <section className="profile-topcard-background-image-edit__icon">
//           <button
//             aria-label="Edit profile background"
//             id="ember31"
//             className="artdeco-button artdeco-button--circle artdeco-button--inverse artdeco-button--1 artdeco-button--primary ember-view"
//             fdprocessedid="vxogjp"
//             onClick={togglePopup} // Use togglePopup function here
//           >
//             <FontAwesomeIcon icon={faCamera} />
//             <span className="artdeco-button__text"></span>
//           </button>

//           {showPopup && (
//   <div className="popup-menu">
//     <div className="popup-header">
//       <h2 className="popup-title">Choose Profile Picture</h2>
//       <span className="popup-cancel" onClick={() => setShowPopup(false)}>x</span>
//     </div>
//     <div className="popup-actions">
//       <button onClick={() => handleOptionClick('upload')}>Upload</button>
//       <button onClick={() => handleOptionClick('edit')}>Edit</button>
//       <button onClick={() => handleOptionClick('update')}>Remove</button>
//     </div>
//   </div>
// )}
// <input
//               type="file"
//               ref={fileInputRef}
//               style={{ display: 'none' }}
//               // onChange={handleFileChange}
//             />

//         </section>
//       </div>
//     </header>
// {/*  */}
//       <nav className="tabs">
//         <ul>
//           <li>
//             <a style={{ marginLeft: '20px', marginRight: '20px' }} href="/about">
//               About
//             </a>
//           </li>
//           <li><a href="/matches">My Matches</a></li>
//           <li><a href="/jobs">My Jobs</a></li>
//           <li><a href="/searches">My Searches</a></li>
//           <li><a href="/favorites">My Favorites</a></li>
//           <li><a href="/account-settings">Account Settings</a></li>
//         </ul>
//       </nav>

//       <Container fluid style={{ backgroundColor: '#F5F5F7', minHeight: '100vh' }}>
//         <div className="content">
//           <Col xs={3} style={{ backgroundColor: '#F5F5F7', padding: '20px' ,marginLeft:'-26px' }}>
//             <div style={{ marginTop: '30px' }}>
//               <div style={{
//                 backgroundColor: '#FFFFFF',
//                 padding: '20px',
//                 borderRadius: '8px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 marginTop: '30px',
//                 marginBottom: '30px',
//                 marginLeft: '30px',
//                 marginRight: '30px',
//                 height: '90%',
//               }}>
//                 <h2 style={{ textAlign: 'center' , marginBottom:'40px' }}>About</h2>
//                 <ul id='side'>
//                 <li>
//                     <a
//                       className={activeSection === 'personal-info' ? 'active' : ''}
//                       href="#personal-info"
//                       onClick={() => handleLinkClick('personal-info')}
//                     >
//                       Personal Information
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className={activeSection === 'academic-info' ? 'active' : ''}
//                       href="#academic-info"
//                       onClick={() => handleLinkClick('academic-info')}
//                     >
//                       Academic Information
//                     </a>
//                   </li>                 
//                   <li>
//                     <a
//                       className={activeSection === 'career-interest' ? 'active' : ''}
//                       href="#career-interest"
//                       onClick={() => handleLinkClick('career-interest')}
//                     >
//                       Career Interest
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className={activeSection === 'experience' ? 'active' : ''}
//                       href="#experience"
//                       onClick={() => handleLinkClick('experience')}
//                     >
//                       Experience
//                     </a>
//                   </li>
//                 </ul>
//                 <button id='signout'>Sign Out</button>
//               </div>
//             </div>
//           </Col>
//           <Col xs={9}>
//             {activeSection === 'personal-info' && (
//               <section className="main-content">
//                 <div className="info-section">
//                   <h3 style={{ marginTop: '-25px', marginBottom: '30px' }}>Contact and basic info</h3>
//                   <div className="category">Product/service</div>
//                   <div className="contact-info">
//                     <button style={{ width: '100%', textAlign: 'left' }}>Add your address</button>
//                     <button style={{ width: '100%', textAlign: 'left' }}>Add service area</button>
//                     <button style={{ width: '100%', textAlign: 'left' }}>Add phone</button>
//                     <button style={{ width: '100%', textAlign: 'left' }}>Add email</button>
//                   </div>
//                   <div className="websites-section">
//                     <h3 style={{ marginTop: '40px', marginBottom: '30px' }}>Websites and social links</h3>
//                     {socialLinks.map((link, index) => (
//                       <div key={index} className="social-link">
//                         <input
//                           type="text"
//                           value={link.username}
//                           onChange={(e) => handleInputChange(index, 'username', e.target.value)}
//                           placeholder="Username"
//                         />
//                         <select
//                           value={link.platform}
//                           onChange={(e) => handleInputChange(index, 'platform', e.target.value)}
//                         >
//                           <option value="LinkedIn">LinkedIn</option>
//                           <option value="Pinterest">Pinterest</option>
//                           <option value="Instagram">Instagram</option>
//                         </select>
//                       </div>
//                     ))}
//                     <button onClick={addSocialLink}>+ Add a social link</button>
//                   </div>
//                 </div>
//                 <div className="actions">
//                   <button className="cancel-btn">Cancel</button>
//                   <button className="save-btn">Save</button>
//                 </div>
//               </section>
//             )}
//             {activeSection === 'academic-info' && (
//               <section className="main-content">
//               <style>
//                   {`
                   
//                     .form-container {
//                         background: #fff;
//                         padding: 20px;
//                         border-radius: 8px;
//                         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//                         width: 300px;
//                     }
//                     .form-container h2 {
//                         margin-bottom: 20px;
//                     }
//                     .form-group {
//                         margin-bottom: 15px;
//                     }
//                     .form-group label {
//                         display: block;
//                         margin-bottom: 18px;
//                         margin-top:21px;
//                     }
//                     .form-group input,
//                     .form-group select {
//                         width: 100%;
//                         padding: 8px;
//                         border: 1px solid #ccc;
//                         border-radius: 4px;
//                     }
//                     .form-group input[type="date"] {
//                         padding: 7px;
//                     }
                   
//                     .form-group button:hover {
//                         background-color: #0056b3;
//                     }
//                   `}
//                 </style>
//                 <div className="info-section">
//                   <h3 style={{ marginTop: '-25px', marginBottom: '30px' }}>Academic Information</h3>
//                   <div className="category">Education</div>
//                   <div className="contact-info" >
                    
//                   <form>
//             <div class="form-group">
//                 <label for="current-degree">Current Degree</label>
//                 <input type="text" id="current-degree" name="current-degree" required/> 
//             </div>
//             <div class="form-group">
//                 <label for="major">Major</label>
//                 <input type="text" id="major" name="major" required/>
//             </div>
//             <div class="form-group">
//                 <label for="graduation-date">Graduation Date</label>
//                 <input type="date" id="graduation-date" name="graduation-date" required/>
//             </div>
//             <div class="form-group">
//                 <label for="previous-degree">Previous Degree</label>
//                 <input type="text" id="previous-degree" name="previous-degree" required/>
//             </div>
           
//         </form>
//                   </div>
//                   </div>
                 

               
//                 <div className="actions">
//                   <button className="cancel-btn">Cancel</button>
//                   <button className="save-btn">Save</button>
//                 </div>
//               </section>
//             )}
//             {activeSection === 'career-interest' && (
//               <section className="main-content">
//               <style>
//                   {`
                   
//                     .form-container {
//                         background: #fff;
//                         padding: 20px;
//                         border-radius: 8px;
//                         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//                         width: 300px;
//                     }
//                     .form-container h2 {
//                         margin-bottom: 20px;
//                     }
//                     .form-group {
//                         margin-bottom: 15px;
//                     }
//                     .form-group label {
//                         display: block;
//                         margin-bottom: 18px;
//                         margin-top:21px;
//                     }
//                     .form-group input,
//                     .form-group select {
//                         width: 100%;
//                         padding: 8px;
//                         border: 1px solid #ccc;
//                         border-radius: 4px;
//                     }
//                     .form-group input[type="date"] {
//                         padding: 7px;
//                     }
                   
//                     .form-group button:hover {
//                         background-color: #0056b3;
//                     }
//                   `}
//                 </style>
//                 <div className="info-section">
//                   <h3 style={{ marginTop: '-25px', marginBottom: '30px' }}>Career Interest</h3>
//                   <div className="category">Interests</div>
//                   <div className="contact-info" >
                    
//                   <form>
//             <div class="form-group">
//                 <label for="Preferred_Job_Roles">Preferred Job Roles</label>
//                 <input type="text" id="Preferred_Job_Roles" name="Preferred_Job_Roles" required/> 
//             </div>
//             <div class="form-group">
//                 <label for="Industries_of_Interest">Industries of Interest</label>
//                 <input type="text" id="Industries_of_Interest" name="Industries_of_Interest" required/>
//             </div>
//             <div class="form-group">
//                 <label for="Skills">Skills</label>
//                 <input type="text" id="Skills" name="Skills" required/>
//             </div>
//             <div class="form-group">
//                 <label for="Preferred_Job_Locations">Preferred Job Locations</label>
//                 <input type="text" id="Preferred_Job_Locations" name="Preferred_Job_Locations" required/>
//             </div>
           
//         </form>
//                   </div>
//                   </div>
                 
//                 <div className="actions">
//                   <button className="cancel-btn">Cancel</button>
//                   <button className="save-btn">Save</button>
//                 </div>
//               </section>
//             )}
//             {activeSection === 'experience' && (
//               <section className="main-content">
//               <style>
//                   {`
                   
//                     .form-container {
//                         background: #fff;
//                         padding: 20px;
//                         border-radius: 8px;
//                         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//                         width: 300px;
//                     }
//                     .form-container h2 {
//                         margin-bottom: 20px;
//                     }
//                     .form-group {
//                         margin-bottom: 15px;
//                     }
//                     .form-group label {
//                         display: block;
//                         margin-bottom: 18px;
//                         margin-top:21px;
//                     }
//                     .form-group input,
//                     .form-group select {
//                         width: 100%;
//                         padding: 8px;
//                         border: 1px solid #ccc;
//                         border-radius: 4px;
//                     }
//                     .form-group input[type="date"] {
//                         padding: 7px;
//                     }
                   
//                     .form-group button:hover {
//                         background-color: #0056b3;
//                     }
//                   `})
//                 </style>
//                 <div className="info-section">
//                   <h3 style={{ marginTop: '-25px', marginBottom: '30px' }}>Experience</h3>
//                   <div className="category">Previous Experience</div>
//                   <div className="contact-info" >
                    
//                   <form>
//             <div class="form-group">
//                 <label for="Total_Experience">Total Experience (Years and Month)</label>
//                 <input type="text" id="Total_Experience" name="Total_Experience" required/> 
//             </div>
//             <div class="form-group">
//                 <label for="Previous_Employment_Title">Previous Employment Title</label>
//                 <input type="text" id="Previous_Employment_Title" name="Previous_Employment_Title" required/>
//             </div>
//             <div class="form-group">
//                 <label for="Another_Employment_Title">Another  Employment Title </label>
//                 <input type="text" id="Another_Employment_Title" name="Another_Employment_Title" required/>
//             </div>
//             <div class="form-group">
//                 <label for="Company ">Company </label>
//                 <input type="text" id="Company " name="Company " required/>
//             </div>
           
//         </form>
//                   </div>
//                   </div>
//                 <div className="actions">
//                   <button className="cancel-btn">Cancel</button>
//                   <button className="save-btn">Save</button>
//                 </div>
//               </section>
//             )}
//           </Col>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default ProfilePage;





// ****************************



// import React, { useState } from 'react';
import React, { useState, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import { Row, Col, Form, Container } from 'react-bootstrap';
import './ProfileOne.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';



const ProfilePage = () => {


  const [socialLinks, setSocialLinks] = useState([
    { username: 'Belgrave House eBooks', platform: 'LinkedIn' },
    { username: 'belgravehouse', platform: 'Pinterest' },
    { username: 'belgravelreads', platform: 'Instagram' },
    { username: 'belgrave_house', platform: 'Instagram' },
  ]);

  const [profilePic, setProfilePic] = useState('https://via.placeholder.com/150');
  const [showPopup, setShowPopup] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('personal-info');
  const [isDivVisible, setIsDivVisible] = useState(false);

  // 
  // const HeaderBackground = () => {
  //   const [isDivVisible, setIsDivVisible] = useState(false);
  
  //   const toggleDiv = () => {
  //     setIsDivVisible(!isDivVisible);
  //   };
  
  // 
  
    // const [isDivVisible, setIsDivVisible] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState('https://via.placeholder.com/1500x200');
  

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { username: '', platform: '' }]);
  };

  const handleInputChange = (index, field, value) => {
    const newLinks = [...socialLinks];
    newLinks[index][field] = value;
    setSocialLinks(newLinks);
  };

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // const togglePopup = () => {
  //   setShowPopup(!showPopup);
  // };

  // for edit open 
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const newImageUrl = URL.createObjectURL(file);
  //     setProfilePic(newImageUrl);
  //   }
  // };


  //  const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setProfilePic(reader.result);
  //       setShowPopup(false); // Close popup after uploading
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleUpload = () => {
  //   fileInputRef.current.click();
  // };

 
  const handleOptionClick = (option) => {
    if (option === 'upload') {
      fileInputRef.current.click(); // Ensure this triggers the file input dialog
      // handleUpload();
    } else if (option === 'remove') {
      // setProfilePic('https://via.placeholder.com/150');
      setBackgroundImage('https://via.placeholder.com/1500x200');
    setIsDivVisible(false);

      setShowPopup(false);
    }
  };
  const toggleDiv = () => setIsDivVisible(!isDivVisible);
 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (fileInputRef.current.id === 'background-file-upload') {
          setBackgroundImage(reader.result);
        } else {
          setProfilePic(reader.result);
        }
        setShowPopup(false); // Close popup after uploading
      };
      reader.readAsDataURL(file);
    }
  };

  

// @@@@@@@@@


  return (
    <div className="profile-page">
      <header>
        <Row className="header-row">
          <Col xs={2} className="header-logo" onClick={() => navigate('/home')}>
            LOGO
          </Col>
          <Col xs={7}>
            <Form.Control type="text" placeholder="Search" className="header-search" />
          </Col>
          <Col xs={1} className="header-link" onClick={() => navigate('/companies')}>
            COMPANIES
          </Col>
          <Col xs={1} className="header-link" onClick={() => navigate('/roles')}>
            ROLES
          </Col>
          <Col xs={1} className="header-link" onClick={() => navigate('/blogs')}>
            BLOGS
          </Col>
          <Col xs={1} className="header-icon">
            <i className="fas fa-user"></i>
          </Col>
        </Row>
      </header>
    
      {/*  */}
  
      {/*  */}
      <header className="profile-header">
      <div className="header-bg-wrapper" style={{ position: 'relative' }}>
      <img src="https://via.placeholder.com/1500x200" alt="Header Background" className="header-bg-img" />
      <img
          src={backgroundImage}  // Ensure this uses the state variable
          alt="Header Background"
          className="header-bg-img"
          style={{ width: '100%', height: 'auto' }} // Adjust to fit your layout
        />
      <div
        className="edit-background-box"
        style={{
          position: 'absolute',
          bottom: '-99px',
          left: '172px',
          background: 'rgba(121, 116, 116, 0.5)',
          padding: '10px',
          borderRadius: '6px',
          height: '60px'
        }}
      >
        <button
          aria-label="Edit profile background"
          className="edit-background-button"
          style={{ background: 'none', border: 'none', color: 'black', display: 'flex', alignItems: 'center' }}
          // style={{ border: 'none', color: 'black', display: 'flex', alignItems: 'center' }}
          onClick={toggleDiv}
        >
          <FontAwesomeIcon icon={faCamera} />
          <span className="button-text" style={{ marginLeft: '10px', color:'black' }}>Edit Background</span>
        </button>
        {isDivVisible && (
          <div
            className="side-menu"
            style={{
              position: 'absolute',
              // bottom: '70px', // Adjust as needed
              // left: '200px', // Adjust as needed
              top: '64px',
              left: '4px',
              background: 'white',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              padding: '9px',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              width: '137px',


            }}
          >

           <label htmlFor="background-file-upload" style={{ margin: '5px', color: 'black', textDecoration: 'none', textAlign: 'center' }}>
                Upload
              </label>
              <input
                id="background-file-upload"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
                />
        {/* <a href="#upload" style={{ margin: '5px', color: 'black', textDecoration: 'none',textAlign: 'center' }}>Upload</a> */}
        <a href="#edit" style={{ margin: '5px', color: 'black', textDecoration: 'none' , textAlign: 'center' }}>Edit</a>
        <a href="#remove" style={{ margin: '5px', color: 'black', textDecoration: 'none' , textAlign: 'center' }} onClick={() => handleOptionClick('remove')}>Remove</a>

          </div>
        )}
      </div>
    </div>

      <div className="profile-info">
        <img src={profilePic} alt="Profile" className="profile-img" />
        {/* <img src="" alt="Profile" className="profile-img" /> */}
        <section className="profile-topcard-background-image-edit__icon">
          <button
            aria-label="Edit profile background"
            id="ember31"
            className="artdeco-button artdeco-button--circle artdeco-button--inverse artdeco-button--1 artdeco-button--primary ember-view"
            fdprocessedid="vxogjp"
            onClick={togglePopup} // Use togglePopup function here
          >
            <FontAwesomeIcon icon={faCamera} />
            <span className="artdeco-button__text"></span>
          </button>

          {showPopup && (
  <div className="popup-menu">
    <div className="popup-header">
      <h2 className="popup-title">Choose Profile Picture</h2>
      <span className="popup-cancel" onClick={() => setShowPopup(false)}>x</span>
    </div>
    <div className="popup-actions">
      <button onClick={() => handleOptionClick('upload')}>Upload</button>
      <button onClick={() => handleOptionClick('edit')}>Edit</button>
      <button onClick={() => handleOptionClick('update')}>Remove</button>
    </div>
  </div>
)}
<input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />

        </section>
      </div>
    </header>
{/*  */}
      <nav className="tabs">
        <ul>
          <li>
            <a style={{ marginLeft: '20px', marginRight: '20px' }} href="/about">
              About
            </a>
          </li>
          <li><a href="/matches">My Matches</a></li>
          <li><a href="/jobs">My Jobs</a></li>
          <li><a href="/searches">My Searches</a></li>
          <li><a href="/favorites">My Favorites</a></li>
          <li><a href="/account-settings">Account Settings</a></li>
        </ul>
      </nav>

      <Container fluid style={{ backgroundColor: '#F5F5F7', minHeight: '100vh' }}>
        <div className="content">
          <Col xs={3} style={{ backgroundColor: '#F5F5F7', padding: '20px' ,marginLeft:'-26px' }}>
            <div style={{ marginTop: '30px' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginTop: '30px',
                marginBottom: '30px',
                marginLeft: '30px',
                marginRight: '30px',
                height: '90%',
              }}>
                <h2 style={{ textAlign: 'center' , marginBottom:'40px' }}>About</h2>
                <ul id='side'>
                <li>
                    <a
                      className={activeSection === 'personal-info' ? 'active' : ''}
                      href="#personal-info"
                      onClick={() => handleLinkClick('personal-info')}
                    >
                      Personal Information
                    </a>
                  </li>
                  <li>
                    <a
                      className={activeSection === 'academic-info' ? 'active' : ''}
                      href="#academic-info"
                      onClick={() => handleLinkClick('academic-info')}
                    >
                      Academic Information
                    </a>
                  </li>                 
                  <li>
                    <a
                      className={activeSection === 'career-interest' ? 'active' : ''}
                      href="#career-interest"
                      onClick={() => handleLinkClick('career-interest')}
                    >
                      Career Interest
                    </a>
                  </li>
                  <li>
                    <a
                      className={activeSection === 'experience' ? 'active' : ''}
                      href="#experience"
                      onClick={() => handleLinkClick('experience')}
                    >
                      Experience
                    </a>
                  </li>
                </ul>
                <button id='signout'>Sign Out</button>
              </div>
            </div>
          </Col>
          <Col xs={9}>
            {activeSection === 'personal-info' && (
              <section className="main-content">
                <div className="info-section">
                  <h3 style={{ marginTop: '-25px', marginBottom: '30px' }}>Contact and basic info</h3>
                  <div className="category">Product/service</div>
                  <div className="contact-info">
                    <button style={{ width: '100%', textAlign: 'left' }}>Add your address</button>
                    <button style={{ width: '100%', textAlign: 'left' }}>Add service area</button>
                    <button style={{ width: '100%', textAlign: 'left' }}>Add phone</button>
                    <button style={{ width: '100%', textAlign: 'left' }}>Add email</button>
                  </div>
                  <div className="websites-section">
                    <h3 style={{ marginTop: '40px', marginBottom: '30px' }}>Websites and social links</h3>
                    {socialLinks.map((link, index) => (
                      <div key={index} className="social-link">
                        <input
                          type="text"
                          value={link.username}
                          onChange={(e) => handleInputChange(index, 'username', e.target.value)}
                          placeholder="Username"
                        />
                        <select
                          value={link.platform}
                          onChange={(e) => handleInputChange(index, 'platform', e.target.value)}
                        >
                          <option value="LinkedIn">LinkedIn</option>
                          <option value="Pinterest">Pinterest</option>
                          <option value="Instagram">Instagram</option>
                        </select>
                      </div>
                    ))}
                    <button onClick={addSocialLink}>+ Add a social link</button>
                  </div>
                </div>
                <div className="actions">
                  <button className="cancel-btn">Cancel</button>
                  <button className="save-btn">Save</button>
                </div>
              </section>
            )}
            {activeSection === 'academic-info' && (
              <section className="main-content">
              <style>
                  {`
                   
                    .form-container {
                        background: #fff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        width: 300px;
                    }
                    .form-container h2 {
                        margin-bottom: 20px;
                    }
                    .form-group {
                        margin-bottom: 15px;
                    }
                    .form-group label {
                        display: block;
                        margin-bottom: 18px;
                        margin-top:21px;
                    }
                    .form-group input,
                    .form-group select {
                        width: 100%;
                        padding: 8px;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                    }
                    .form-group input[type="date"] {
                        padding: 7px;
                    }
                   
                    .form-group button:hover {
                        background-color: #0056b3;
                    }
                  `}
                </style>
                <div className="info-section">
                  <h3 style={{ marginTop: '-25px', marginBottom: '30px' }}>Academic Information</h3>
                  <div className="category">Education</div>
                  <div className="contact-info" >
                    
                  <form>
            <div class="form-group">
                <label for="current-degree">Current Degree</label>
                <input type="text" id="current-degree" name="current-degree" required/> 
            </div>
            <div class="form-group">
                <label for="major">Major</label>
                <input type="text" id="major" name="major" required/>
            </div>
            <div class="form-group">
                <label for="graduation-date">Graduation Date</label>
                <input type="date" id="graduation-date" name="graduation-date" required/>
            </div>
            <div class="form-group">
                <label for="previous-degree">Previous Degree</label>
                <input type="text" id="previous-degree" name="previous-degree" required/>
            </div>
           
        </form>
                  </div>
                  </div>
                 

               
                <div className="actions">
                  <button className="cancel-btn">Cancel</button>
                  <button className="save-btn">Save</button>
                </div>
              </section>
            )}
            {activeSection === 'career-interest' && (
              <section className="main-content">
              <style>
                  {`
                   
                    .form-container {
                        background: #fff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        width: 300px;
                    }
                    .form-container h2 {
                        margin-bottom: 20px;
                    }
                    .form-group {
                        margin-bottom: 15px;
                    }
                    .form-group label {
                        display: block;
                        margin-bottom: 18px;
                        margin-top:21px;
                    }
                    .form-group input,
                    .form-group select {
                        width: 100%;
                        padding: 8px;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                    }
                    .form-group input[type="date"] {
                        padding: 7px;
                    }
                   
                    .form-group button:hover {
                        background-color: #0056b3;
                    }
                  `}
                </style>
                <div className="info-section">
                  <h3 style={{ marginTop: '-25px', marginBottom: '30px' }}>Career Interest</h3>
                  <div className="category">Interests</div>
                  <div className="contact-info" >
                    
                  <form>
            <div class="form-group">
                <label for="Preferred_Job_Roles">Preferred Job Roles</label>
                <input type="text" id="Preferred_Job_Roles" name="Preferred_Job_Roles" required/> 
            </div>
            <div class="form-group">
                <label for="Industries_of_Interest">Industries of Interest</label>
                <input type="text" id="Industries_of_Interest" name="Industries_of_Interest" required/>
            </div>
            <div class="form-group">
                <label for="Skills">Skills</label>
                <input type="text" id="Skills" name="Skills" required/>
            </div>
            <div class="form-group">
                <label for="Preferred_Job_Locations">Preferred Job Locations</label>
                <input type="text" id="Preferred_Job_Locations" name="Preferred_Job_Locations" required/>
            </div>
           
        </form>
                  </div>
                  </div>
                 
                <div className="actions">
                  <button className="cancel-btn">Cancel</button>
                  <button className="save-btn">Save</button>
                </div>
              </section>
            )}
            {activeSection === 'experience' && (
              <section className="main-content">
              <style>
                  {`
                   
                    .form-container {
                        background: #fff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        width: 300px;
                    }
                    .form-container h2 {
                        margin-bottom: 20px;
                    }
                    .form-group {
                        margin-bottom: 15px;
                    }
                    .form-group label {
                        display: block;
                        margin-bottom: 18px;
                        margin-top:21px;
                    }
                    .form-group input,
                    .form-group select {
                        width: 100%;
                        padding: 8px;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                    }
                    .form-group input[type="date"] {
                        padding: 7px;
                    }
                   
                    .form-group button:hover {
                        background-color: #0056b3;
                    }
                  `})
                </style>
                <div className="info-section">
                  <h3 style={{ marginTop: '-25px', marginBottom: '30px' }}>Experience</h3>
                  <div className="category">Previous Experience</div>
                  <div className="contact-info" >
                    
                  <form>
            <div class="form-group">
                <label for="Total_Experience">Total Experience (Years and Month)</label>
                <input type="text" id="Total_Experience" name="Total_Experience" required/> 
            </div>
            <div class="form-group">
                <label for="Previous_Employment_Title">Previous Employment Title</label>
                <input type="text" id="Previous_Employment_Title" name="Previous_Employment_Title" required/>
            </div>
            <div class="form-group">
                <label for="Another_Employment_Title">Another  Employment Title </label>
                <input type="text" id="Another_Employment_Title" name="Another_Employment_Title" required/>
            </div>
            <div class="form-group">
                <label for="Company ">Company </label>
                <input type="text" id="Company " name="Company " required/>
            </div>
           
        </form>
                  </div>
                  </div>
                <div className="actions">
                  <button className="cancel-btn">Cancel</button>
                  <button className="save-btn">Save</button>
                </div>
              </section>
            )}
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
