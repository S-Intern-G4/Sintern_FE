import React from 'react';
import styled from 'styled-components';

import UpdateCV from './UpdateCV';
import StudentProfileForm from './StudentProfileForm';



const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;

  height: calc(100vh - 80px);
  
  width: 80%;

  margin: 0 auto;

  @media (max-width:1024px){
    width:95%;
  };

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: unset;
  }
`;

const ProfilePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow-y: scroll;
  overflow-x: none;

  @media (max-width: 768px) {
    overflow-y: unset; 
    &:first-of-type {
      marginTop: 100px;
    }
  }
`;

const Profile = () => {

  return (
    <ProfileContainer>
      <ProfilePage>
        <h1>Profile details</h1>
        <StudentProfileForm />
      </ProfilePage>

      <ProfilePage>
        <UpdateCV />
      </ProfilePage>
    </ProfileContainer>
  );
};

export default Profile;