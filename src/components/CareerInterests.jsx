import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';
import './CareerInterests.css';

const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: '40px',
    border: '1px solid rgba(153, 153, 153, 0.97)',
    borderRadius: '4px',
    marginBottom: '20px',
    paddingLeft: '1px',
    backgroundColor: '#FFFFFF',
  }),
  valueContainer: (provided) => ({
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
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('careerInterests'));
    if (savedFormData) {
      setSelectedRoles(savedFormData.selectedRoles || []);
      setSelectedIndustries(savedFormData.selectedIndustries || []);
      setSelectedSkills(savedFormData.selectedSkills || []);
      setJobLocations(savedFormData.jobLocations || '');
    }
  }, []);

  const saveFormDataToLocalStorage = (updatedFormData) => {
    const formData = {
      selectedRoles,
      selectedIndustries,
      selectedSkills,
      jobLocations,
      ...updatedFormData,
    };
    localStorage.setItem('careerInterests', JSON.stringify(formData));
  };

  const handleChangeRoles = (value) => {
    setSelectedRoles(value);
    saveFormDataToLocalStorage({ selectedRoles: value });

    if (value.length > 0 && selectedIndustries.length > 0 && selectedSkills.length > 0 && jobLocations) {
      setError('');
    }
  };

  const handleChangeIndustries = (value) => {
    setSelectedIndustries(value);
    saveFormDataToLocalStorage({ selectedIndustries: value });

    if (selectedRoles.length > 0 && value.length > 0 && selectedSkills.length > 0 && jobLocations) {
      setError('');
    }
  };

  const handleChangeSkills = (value) => {
    setSelectedSkills(value);
    saveFormDataToLocalStorage({ selectedSkills: value });

    if (selectedRoles.length > 0 && selectedIndustries.length > 0 && value.length > 0 && jobLocations) {
      setError('');
    }
  };

  const handleJobLocationsChange = (e) => {
    const { value } = e.target;
    setJobLocations(value);
    saveFormDataToLocalStorage({ jobLocations: value });

    if (selectedRoles.length > 0 && selectedIndustries.length > 0 && selectedSkills.length > 0 && value) {
      setError('');
    }
  };

  const handleCreateOption = (inputValue, setOptions, setSelected) => {
    const newOption = { value: inputValue, label: inputValue };
    setOptions((prev) => [...prev, newOption]);
    setSelected((prev) => [...prev, newOption]);
    saveFormDataToLocalStorage();

    if (selectedRoles.length > 0 && selectedIndustries.length > 0 && selectedSkills.length > 0 && jobLocations) {
      setError('');
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (selectedRoles.length > 0 && selectedIndustries.length > 0 && selectedSkills.length > 0 && jobLocations) {
      navigate('/previous-experience');
    } else {
      setError('Please fill in all required fields to continue.');
    }
  };

  const isFormValid = selectedRoles.length > 0 && selectedIndustries.length > 0 && selectedSkills.length > 0 && jobLocations;

  return (
    <Container fluid className="career-interests-container">
      <div className="logo">LOGO</div>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="d-flex justify-content-center">
          <div className="career-interests-form">
            <h2 className="welcome-text">Career Interests</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleContinue}>
              <Form.Group controlId="formJobRoles">
                <CreatableSelect
                  isMulti
                  options={roleOptions}
                  value={selectedRoles}
                  onChange={handleChangeRoles}
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
                  onChange={handleChangeIndustries}
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
                  onChange={handleChangeSkills}
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
                  onChange={handleJobLocationsChange}
                  style={{ color: jobLocations ? '#000000' : 'rgba(0, 0, 0, 0.5)', backgroundColor: '#FFFFFF', border: '1px solid rgba(153, 153, 153, 0.97)', borderRadius: '4px', marginBottom: '20px', paddingLeft: '10px' }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className={`continue-btn button-with-shadow ${isFormValid ? 'valid' : 'invalid'}`}
                block
                style={{ opacity: isFormValid ? 1 : 0.7 }}
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
