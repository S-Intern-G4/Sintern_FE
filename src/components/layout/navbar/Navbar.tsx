import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProfileSection from './ProfileSection';

const CustomNavbar = styled.div`
  height: 80px;
  width: 100%;
  background: #00458B;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
    margin: 5px 20px;
    font-size: 1.5rem;
  }  
`;

const Logo = styled.div`
  width: 100px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-left: 20px;
`;

const Navbar = () => {

  return (
    <CustomNavbar>
      <Links>
        <Link to={'/'}>
          <Logo>
            <img src='/src/assets/images/logo.png' alt='logo' />
          </Logo>
        </Link>
      </Links>

      <ProfileSection />

    </CustomNavbar>
  );
};

export default Navbar;