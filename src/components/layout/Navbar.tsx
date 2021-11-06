import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CustomNavbar = styled.div`
  height: 80px;
  width: 100vw;
  background: linear-gradient(to left, #2193b0, #6dd5ed);
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    color: #fff;
    margin: 5px 20px;
  }
`;


const Navbar = () => {

  return (
    <CustomNavbar>
      <Link to={'/'}>
        Home
      </Link>
      <Link to={'/login'}>
        Login
      </Link>
      <Link to={'/register'}>
        Register
      </Link>
      <Link to={'/cards'}>
        Cards
      </Link>
    </CustomNavbar>
  );
};

export default Navbar;