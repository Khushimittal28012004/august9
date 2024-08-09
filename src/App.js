import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import AcademicInfo from './components/AcademicInfo.jsx';
import CareerInterests from './components/CareerInterests.jsx';
import PreviousExperience from './components/PreviousExperience.jsx';
import AdditionalInformation from './components/AdditionalInformation.jsx';
import HomePage from './components/homepage.jsx';
import ProfilePage from './components/employeeProfilepage.jsx';
import EditProfilePage from './components/editprofilepage.jsx';
import ProfileOne from './components/ProfileOne.jsx';
import MyMatches from './components/MyMatches.jsx';
import MyFavoritesPage from './components/myFavoritesPage.jsx';
import Blogs from './components/Blogs.jsx';
import AboutUs from './components/AboutUs.jsx';
import HelpCenter from './components/HelpCenter.jsx';
import PeopleInDifferentRoles from './components/PeopleInDifferentRoles.jsx';
// C:\Users\hp\OneDrive\Desktop\july23\Rolync\src\components\ForgetPassword.jsx
import ForgetPassword from './components/ForgetPassword.jsx';
// C:\Users\hp\OneDrive\Desktop\july23\Rolync\src\components\ResetPassword.jsx
import ResetPassword from './components/ResetPassword.jsx';
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
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/profile-one" element={<ProfileOne />} />
        <Route path="/my-matches" element={<MyMatches />} />
        <Route path="/my-favorites" element={<MyFavoritesPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/roles/:role" element={<PeopleInDifferentRoles />} />
        <Route path="/forget-pass" element={<ForgetPassword />} />
        <Route path="/Reset-pass" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
