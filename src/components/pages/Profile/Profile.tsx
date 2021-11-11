import React from 'react';
import StudentProfile from './StudentProfile';
import CompanyProfile from './CompanyProfile';
import Navbar from '../../layout/navbar/Navbar';
import Container from '../../shared/Container';


const Profile = () => {

  return (
    <Container>
      <Navbar />
    {
       true  &&
        <StudentProfile />
    }
    {
      false && 
      <CompanyProfile />
    }
    </Container>
  );
};

export default Profile;