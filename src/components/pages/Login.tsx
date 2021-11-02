import React from 'react';
import Navbar from '../layout/navbar/Navbar';
import Container from '../shared/Container';
import CustomButton from '../shared/CustomButton';


const Login = () => {
  return (
    <Container>
      <Navbar />
      <CustomButton>Salut</CustomButton>
    </Container>
  );
};

export default Login;