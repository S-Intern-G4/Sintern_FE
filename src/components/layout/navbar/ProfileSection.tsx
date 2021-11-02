import React from 'react';
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';


const Profile = styled.div`
  height: 50px;
  color: #fff;
  font-size: 1.5rem;
  margin-right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    padding: 0;
  }
`;

const CustomUserIcon = styled(UserOutlined)`
  font-size: 3rem;
  margin: 3px;
`;

const ProfileSection = () => {

  return (
    <Profile>
      <CustomUserIcon />
      <p>Nume Prenume</p>
    </Profile>
  );
};

export default ProfileSection;