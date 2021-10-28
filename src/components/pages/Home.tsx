import React from 'react';
import Navbar from '../layout/Navbar';
import Sider from '../layout/Sider';
import Container from '../shared/Container';
import MainContent from '../shared/MainContent';

const HomePage = () => {
  return (
    <Container>
      <Navbar />

      <MainContent>
        <Sider />
      </MainContent>
    </Container >
  );
};

export default HomePage;