import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import AcademicInfo from './components/AcademicInfo.jsx';
import CareerInterests from './components/CareerInterests.jsx';
import PreviousExperience from './components/PreviousExperience.jsx';
import AdditionalInformation from './components/AdditionalInformation.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/academic-info" element={<AcademicInfo />} />
        <Route path="/career-interests" element={<CareerInterests />} />
        <Route path="/previous-experience" element={<PreviousExperience />} />
        <Route path="/additional-info" element={<AdditionalInformation />} />
      </Routes>
    </Router>
  );
}

export default App;
