import { Link } from 'react-router-dom';
import { Card, DatePicker, Form, Input, Menu, message, Select } from 'antd';
import React from 'react';
import Container from '../../shared/Container';
import RegisterContent from './RegisterContent';
import RegisterForm from './RegisterForm';
import CustomButton from '../../shared/CustomButton';
import { UserOutlined } from '@ant-design/icons';

const Register = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select style={{ width: 70 }}>
        <Option value='86'>+86</Option>
        <Option value='87'>+87</Option>
      </Select>
    </Form.Item>
  );

  const { RangePicker } = DatePicker;

  const config = {
    rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
  };
  
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='1' icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key='2' icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key='3' icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <Container>
      <RegisterContent>
        <Card title='Register' bordered={false}>
          <RegisterForm
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              label='Email'
              name='email'
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label='First Name'
              name='first_name'
              rules={[{ required: true, message: 'Please input your first name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Last Name'
              name='last_name'
              rules={[{ required: true, message: 'Please input your last name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item name='date-picker' label='DatePicker' {...config}>
              <DatePicker />
            </Form.Item>

            <Form.Item
              name='phone'
              label='Phone Number'
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name='educationDetails' label='Education Details' rules={[{ required: true }]}>
              <Select
                  placeholder='Select a option and change input text above'
                  allowClear
              >
                <Option value='male'>male</Option>
                <Option value='female'>female</Option>
                <Option value='other'>other</Option>

              </Select>
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Link to={'/login'}>
                <CustomButton type='primary' htmlType='submit'>
                  Save
                </CustomButton>
              </Link>
            </Form.Item>


          </RegisterForm>


        </Card>
      </RegisterContent>
    </Container>
  );
};

export default Register;