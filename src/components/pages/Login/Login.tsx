import { Checkbox, Form, Input, Card } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Container from '../../shared/Container';
import CustomButton from '../../shared/CustomButton';
import CustomForm from '../../shared/CustomForm';
import MainContent from '../../shared/MainContent';
import { Link } from 'react-router-dom';
import LoginContent from './LoginContent';
import LoginForm from './LoginForm';

const Logo = styled.div`
  width: 200px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;


const Login = () => {
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

        <Card title='Login' bordered={false}>

          <LoginForm
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <CustomButton type="primary" htmlType="submit">
                Login
              </CustomButton>
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Link to={'/register'}>
                Don’t have an account? Register here
              </Link>
            </Form.Item>


          </LoginForm>


        </Card>
      </LoginContent>
    </Container>
  );
};

export default Login;