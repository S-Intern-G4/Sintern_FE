import { Input, Card, Tooltip } from 'antd';
import React , { useState } from 'react';
import styled from 'styled-components';
import Container from '../../shared/Container';
import CustomButton from '../../shared/CustomButton';
import { Link } from 'react-router-dom';
import LoginContent from './LoginContent';
import LoginForm from './LoginForm';
import CustomFormItem from '../../shared/CustomFormItem';
import { InfoCircleOutlined } from '@ant-design/icons';

const Logo = styled.div`
  width: 200px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;


const CustomCard = styled(Card)`
  width: 30%;
  @media (max-width: 1860px) {
    width: 40%;
  }
  @media (max-width: 1024px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

const Login = () => {
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <LoginContent>

        <Logo>
          <img src='/src/assets/images/logo.png' alt='logo' />
        </Logo>

        <CustomCard title='Login' bordered={false}>

          <LoginForm
            name="loginForm"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <CustomFormItem
              label={'Email'}
              name='identifier'
              rules={[
                { required: true, message: 'Email is required' }
              ]}
              hasFeedback
            >
              <Input
                placeholder='johndoe@gmail.com'
                suffix={
                  <Tooltip title={'Email is required'}>
                    <InfoCircleOutlined style={{ color: '#1890ff' }}/>
                  </Tooltip>
                }
              />
            </CustomFormItem>

            <CustomFormItem
              label={'Password'}
              name='password'
              rules={[
                { required: true, message: 'Password is required' }
              ]}
              hasFeedback
            >
              <Input.Password
                placeholder='******'
                suffix={
                  <Tooltip title={'Password is required'}>
                    <InfoCircleOutlined style={{ color: '#1890ff' }} />
                  </Tooltip>
                }
              />
            </CustomFormItem>

            <CustomButton disabled={ isLoginButtonDisabled } htmlType='submit' style={{margin: '30px auto'}}> Login </CustomButton>

            <p>
              If you do not have an account <Link to='/register'> Register here </Link>
            </p>


          </LoginForm>


        </CustomCard>
      </LoginContent>
    </Container>
  );
};

export default Login;