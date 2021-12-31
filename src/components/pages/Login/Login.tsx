import { Input, Tooltip } from 'antd';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Container from '../../shared/Container';
import CustomButton from '../../shared/CustomButton';
import { Link } from 'react-router-dom';
import UnauthenticatedForm from '../../shared/UnauthenticatedForm';
import CustomFormItem from '../../shared/CustomFormItem';
import { InfoCircleOutlined } from '@ant-design/icons';
import CustomCard from '../../shared/CustomCard';
import UnauthenticatedPageContent from '../../shared/UnauthenticatedPageContent';
import ApiService from '../../../services/apiService';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import { UserContext } from '../../context/UserContext';
import { UserLoginModel } from '../../../interfaces/user/UserLoginModel';
import { UserInfo } from '../../../interfaces/user/UserInfo';
import ErrorHeader from '../../shared/ErrorHeader';

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
  const { setToken } = useContext(UserContext);
  const [apiError, setApiError] = useState('');

  const loginSubmit = (values: UserLoginModel) => {
    setIsLoginButtonDisabled(true);
    ApiService.post<UserInfo, UserLoginModel>(ApiEndpoints.login, values)
      .then(({ data: { token } }) => {
        localStorage.setItem('token', token);
        setToken(token);
      })
      .catch((error) => {
        setApiError(error.response.data.errorMessage);
        setIsLoginButtonDisabled(false);
      });
  };

  return (
    <Container>
      <UnauthenticatedPageContent>

        <Logo>
          <img src='/src/assets/images/logo.png' alt='logo' />
        </Logo>

        <CustomCard title='Login' bordered={false}>

          <UnauthenticatedForm
            name='loginForm'
            initialValues={{ remember: true }}
            onFinish={loginSubmit}
            autoComplete='off'
          >

            <ErrorHeader>
              <p>{apiError}</p>
            </ErrorHeader>

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