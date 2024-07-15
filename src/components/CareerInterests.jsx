import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';
import axios from 'axios';
import './CareerInterests.css';
// import {createitem } from 'khushim/src/api.js';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '40px',
    border: '1px solid rgba(153, 153, 153, 0.97)',
    borderRadius: '4px',
    marginBottom: '20px',
    paddingLeft: '1px',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    whiteSpace: 'nowrap', 
    textOverflow: 'ellipsis',
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    flexWrap: 'wrap',
    overflow: 'auto',
    maxHeight: '80px',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'rgba(0, 0, 0, 0.5)',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#000000',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#00BBF0',
    color: '#FFFFFF',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#FFFFFF',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: '#FFFFFF',
    ':hover': {
      backgroundColor: '#00BBF0',
      color: '#FFFFFF',
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: 'rgba(153, 153, 153, 0.97)',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};

function CareerInterests() {
  const [roleOptions, setRoleOptions] = useState([
    { value: 'Data Scientist', label: 'Data Scientist' },
    { value: 'Data Engineer', label: 'Data Engineer' },
    { value: 'Data Analyst', label: 'Data Analyst' },
    { value: 'Business Analyst', label: 'Business Analyst' },
    { value: 'ML Engineer/ML Ops', label: 'ML Engineer/ML Ops' },
  ]);
  const [industryOptions, setIndustryOptions] = useState([
    { value: 'E-commerce', label: 'E-commerce' },
    { value: 'Retail', label: 'Retail' },
    { value: 'IT Consulting & Software', label: 'IT Consulting & Software' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'Aviation', label: 'Aviation' },
  ]);
  const [skillsOptions, setSkillsOptions] = useState([
    { value: 'SQL', label: 'SQL' },
    { value: 'Python Programming', label: 'Python Programming' },
    { value: 'Machine Learning', label: 'Machine Learning' },
    { value: 'Tableau', label: 'Tableau' },
    { value: 'NLP', label: 'NLP' },
    { value: 'Deep Learning', label: 'Deep Learning' },
  ]);

  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [jobLocations, setJobLocations] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const userEmail = 'user@example.com'; // Replace with actual user email from authentication context or state

  useEffect(() => {
    const fetchCareerInterests = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/career-interests/${userEmail}`);
        const { roles, industries, skills, jobLocations } = response.data || {};
        setSelectedRoles(roles?.map(role => ({ value: role, label: role })) || []);
        setSelectedIndustries(industries?.map(industry => ({ value: industry, label: industry })) || []);
        setSelectedSkills(skills?.map(skill => ({ value: skill, label: skill })) || []);
        setJobLocations(jobLocations || '');
      } catch (error) {
        console.error('Error fetching career interests:', error);
        setError('Failed to fetch career interests.');
      }
    };

    fetchCareerInterests();
  }, [userEmail]);

  const handleContinue = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/career-interests', {
        email: userEmail,
        roles: selectedRoles.map(role => role.value),
        industries: selectedIndustries.map(industry => industry.value),
        skills: selectedSkills.map(skill => skill.value),
        jobLocations
      });
      navigate('/previous-experience');
    } catch (error) {
      console.error('Error saving career interests:', error);
      setError('Failed to save career interests.');
    }
  };

  const handleCreateOption = (inputValue, setOptions, setSelected) => {
    const newOption = { value: inputValue, label: inputValue };
    setOptions(prev => [...prev, newOption]);
    setSelected(prev => [...prev, newOption]);
  };

  return (
    <Container fluid style={{ background: '#F5F5F7', height: '100vh' }}>
      <div style={{ position: 'absolute', top: '80px', left: '80px', fontSize: '24px', fontWeight: 'bold' }}>LOGO</div>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="d-flex justify-content-center">
          <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)', maxWidth: '551px', width: '100%', margin: 'auto' }}>
            <h2 style={{ color: 'rgba(0, 0, 0, 0.5)', marginBottom: '40px', textAlign: 'center', fontWeight: 'bold', fontSize: '30px' }}>Career Interests</h2>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            <Form onSubmit={handleContinue}>
              <Form.Group controlId="formJobRoles">
                <CreatableSelect
                  isMulti
                  options={roleOptions}
                  value={selectedRoles}
                  onChange={setSelectedRoles}
                  onCreateOption={(inputValue) => handleCreateOption(inputValue, setRoleOptions, setSelectedRoles)}
                  styles={customStyles}
                  placeholder="Preferred Job Roles"
                />
              </Form.Group>

              <Form.Group controlId="formIndustries">
                <CreatableSelect
                  isMulti
                  options={industryOptions}
                  value={selectedIndustries}
                  onChange={setSelectedIndustries}
                  onCreateOption={(inputValue) => handleCreateOption(inputValue, setIndustryOptions, setSelectedIndustries)}
                  styles={customStyles}
                  placeholder="Industries of Interest"
                />
              </Form.Group>

              <Form.Group controlId="formSkills">
                <CreatableSelect
                  isMulti
                  options={skillsOptions}
                  value={selectedSkills}
                  onChange={setSelectedSkills}
                  onCreateOption={(inputValue) => handleCreateOption(inputValue, setSkillsOptions, setSelectedSkills)}
                  styles={customStyles}
                  placeholder="Skills"
                />
              </Form.Group>

              <Form.Group controlId="formJobLocations">
                <Form.Control
                  type="text"
                  placeholder="Preferred Job Locations"
                  className="form-control"
                  value={jobLocations}
                  onChange={(e) => setJobLocations(e.target.value)}
                  style={{ color: jobLocations ? '#000000' : 'rgba(0, 0, 0, 0.5)', backgroundColor: '#FFFFFF', border: '1px solid rgba(153, 153, 153, 0.97)', borderRadius: '4px', marginBottom: '20px', paddingLeft: '10px' }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="continue-btn button-with-shadow"
                block
                style={{ backgroundColor: '#00BBF0', border: 'none', marginTop: '20px', width: '100%', height: '35px', padding: '5px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)', color: '#ffffff', fontWeight: 'bold' }}
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

export default CareerInterests;
