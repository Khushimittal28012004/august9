import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';
import './CareerInterests.css';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '40px',
    border: '1px solid rgba(153, 153, 153, 0.97)',
    borderRadius: '4px',
    marginBottom: '20px',
    paddingLeft: '10px',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    whiteSpace: 'nowrap', 
    textOverflow: 'ellipsis',
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    flexWrap: 'wrap',
    overflow: 'auto',
    maxHeight: '80px'  // Maximum height for the container to avoid excessive growth
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

  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/previous-experience');
  };

  const handleCreateOption = (inputValue, setOptions, setSelected) => {
    const newOption = { value: inputValue, label: inputValue };
    setOptions((prev) => [...prev, newOption]);
    setSelected((prev) => [...prev, newOption]);
  };

  return (
    <Container fluid style={{ background: '#F5F5F7', height: '100vh' }}>
      <div style={{ position: 'absolute', top: '80px', left: '80px', fontSize: '24px', fontWeight: 'bold' }}>LOGO</div>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="d-flex justify-content-center">
          <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)', maxWidth: '551px', width: '100%', margin: 'auto' }}>
            <h2 style={{ color: 'rgba(0, 0, 0, 0.5)', marginBottom: '40px', textAlign: 'center', fontWeight: 'bold', fontSize: '30px' }}>Career Interests</h2>
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
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="continue-btn button-with-shadow"
                block
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
