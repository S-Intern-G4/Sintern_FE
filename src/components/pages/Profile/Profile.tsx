import React, { useContext } from 'react';
import StudentProfile from './StudentProfile';
import CompanyProfile from './CompanyProfile';
import Navbar from '../../layout/navbar/Navbar';
import Container from '../../shared/Container';
import { UserContext } from '../../context/UserContext';


const Profile = () => {
  const { type } = useContext(UserContext);

  return (
    <Container>
      <Navbar />
      {
        type === 'student' &&
        <StudentProfile />
      }
      {
        type === 'company' &&
        <CompanyProfile />
      }
    </Container>
  );
};

export default Profile;