import React, { useState } from 'react';
import styled from 'styled-components';
import CustomButton from '../../shared/CustomButton';
import { Link } from 'react-router-dom';
import CustomCard from '../../shared/CustomCard';
import Container from '../../shared/Container';
import UnauthenticatedPageContent from '../../shared/UnauthenticatedPageContent';
import StudentRegisterForm from './StudentRegisterForm';
import CompanyRegisterForm from './CompanyRegisterForm';

const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    border-radius: 10px;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
    opacity: 1;
    transition: all 1s;
    -webkit-transition: all 1s;
    z-index: ;
  }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 30px;
`;

const Logo = styled.div`
  width: 200px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;


const Register = () => {
  const [studentRegister, setStudentRegister] = useState(false);
  const [companyRegister, setCompanyRegister] = useState(false);

  return (
    <Container>
      <UnauthenticatedPageContent>

        <Logo>
          <img src='/src/assets/images/logo.png' alt='logo' />
        </Logo>

        {
          !studentRegister && !companyRegister &&
          <CustomCard title='What do you want to register as?' bordered={false}>
            <OptionsContainer>
              <h1></h1>

              <ButtonsContainer>
                <CustomButton onClick={() => { setStudentRegister(true); }}>Student</CustomButton>
                <CustomButton onClick={() => { setCompanyRegister(true); }}>Company</CustomButton>
              </ButtonsContainer>

              <p>If you already have an account <Link to='/login'> Login here </Link></p>

            </OptionsContainer>
          </CustomCard>
        }

        {
          studentRegister &&
          <StudentRegisterForm onBackClick={() => setStudentRegister(false)} />
        }

        {
          companyRegister &&
          <CompanyRegisterForm onBackClick={() => setCompanyRegister(false)}/>
        }

      </UnauthenticatedPageContent>
    </Container>
  );
};

export default Register;