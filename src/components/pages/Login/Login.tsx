import { Input, Tooltip } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../../shared/Container';
import CustomButton from '../../shared/CustomButton';
import { Link } from 'react-router-dom';
import UnauthenticatedForm from '../../shared/UnauthenticatedForm';
import CustomFormItem from '../../shared/CustomFormItem';
import { InfoCircleOutlined } from '@ant-design/icons';
import CustomCard from '../../shared/CustomCard';
import UnauthenticatedPageContent from '../../shared/UnauthenticatedPageContent';

const Logo = styled.div`
  width: 200px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Login = () => {
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

  const onFinish = (values: any) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <UnauthenticatedPageContent>

        <Logo>
          <img src='/src/assets/images/logo.png' alt='logo' />
        </Logo>

        <CustomCard title='Login' bordered={false}>

          <UnauthenticatedForm
            name="loginForm"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <CustomFormItem
              label='Email'
              name='email'
              rules={[
                { required: true, message: 'Email is required' }
              ]}
              hasFeedback
            >
              <Input
                placeholder='johndoe@gmail.com'
                suffix={
                  <Tooltip title={'Email is required'}>
                    <InfoCircleOutlined style={{ color: '#1890ff' }} />
                  </Tooltip>
                }
              />
            </CustomFormItem>

            <CustomFormItem
              label='Password'
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

            <CustomButton disabled={isLoginButtonDisabled} htmlType='submit' style={{ margin: '30px auto' }}> Login </CustomButton>

            <p>
              If you do not have an account <Link to='/register'> Register here </Link>
            </p>


          </UnauthenticatedForm>


        </CustomCard>
      </UnauthenticatedPageContent>
    </Container>
  );
};

export default Login;