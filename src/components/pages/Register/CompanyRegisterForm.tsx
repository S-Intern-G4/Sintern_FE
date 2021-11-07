import React, { useState } from 'react';
import styled from 'styled-components';
import { Cascader, Input, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import CustomButton from '../../shared/CustomButton';
import CustomFormItem from '../../shared/CustomFormItem';
import CustomCard from '../../shared/CustomCard';
import { Link } from 'react-router-dom';
import UnauthenticatedForm from '../../shared/UnauthenticatedForm';
import { Domain } from '../../../enums/Domain';
import ApiService from '../../../services/apiService';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import { CompanyRegisterModel } from '../../../interfaces/CompanyRegisterModel';
import { useHistory } from 'react-router-dom';
import ErrorHeader from '../../shared/ErrorHeader';

const ButtonsContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

interface StudentRegisterFormProps {
  onBackClick: () => void
}

const StudentRegisterForm = ({ onBackClick }: StudentRegisterFormProps) => {
  const [isRegisterButtonDisabled, setIsRegisterButtonDisabled] = useState(false);
  const [ apiErrors, setApiErrors] = useState([]);
  const [form] = UnauthenticatedForm.useForm();
  const history = useHistory();

  const handleRegisterSubmit = (values: CompanyRegisterModel) => {
    setIsRegisterButtonDisabled(true);
    ApiService.post<any, CompanyRegisterModel>(ApiEndpoints.companyRegister, values)
      .then(() => {
        history.push('/login');
      })
      .catch((error) => {
        setApiErrors(error.errorMessages);
        setIsRegisterButtonDisabled(false);
      });
  };

  return (
    <CustomCard title='Company Register' bordered={false}>
      <UnauthenticatedForm name='basic'
        form={form}
        onFinish={handleRegisterSubmit}
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          username: '',
          password: ''
        }
        }
      >

        <ErrorHeader>
          {
            apiErrors.map((error, index) => {
              return (
                <p key={index}>{error}</p>
              );
            })
          }
        </ErrorHeader>

        <CustomFormItem
          label='Company Name'
          name='name'
          rules={[
            { required: true, message: 'Name is required' },
            { min: 2, max: 100, message: 'Name should have between 2 and 100 characters' }
          ]}
          hasFeedback
        >
          <Input
            placeholder='Company Name'
            suffix={
              <Tooltip title='Name is required. Name should have between 2 and 100 characters'>
                <InfoCircleOutlined style={{ color: '#1890ff' }} />
              </Tooltip>
            }
          />
        </CustomFormItem>

        <CustomFormItem
          label='Address'
          name='address'
          rules={[
            { required: true, message: 'Address is required' },
            { min: 2, max: 100, message: 'Address should have between 2 and 100 characters' }
          ]}
          hasFeedback
        >
          <Input
            placeholder='Street, Number, City, Country'
            suffix={
              <Tooltip title='Address is required. Address should have between 2 and 100 characters'>
                <InfoCircleOutlined style={{ color: '#1890ff' }} />
              </Tooltip>
            }
          />
        </CustomFormItem>

        <CustomFormItem
          label='Email'
          name='email'
          rules={[
            { required: true, message: 'Email is required' },
            { min: 7, max: 74, message: 'Email should have between 7 and 74 characters' },
            { pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g, message: 'Invalid email format' }
          ]}
          hasFeedback
        >
          <Input
            placeholder='johndoe@gmail.com'
            suffix={
              <Tooltip title='Email is required. Email should have a valid format'>
                <InfoCircleOutlined style={{ color: '#1890ff' }} />
              </Tooltip>
            }
          />
        </CustomFormItem>

        <CustomFormItem
          label='Company domain'
          name='domain'
          rules={[
            { required: true, message: 'Company domain is required' }
          ]}
          hasFeedback
        >
          <Cascader options={Domain} placeholder='Company domain' />
        </CustomFormItem>

        <CustomFormItem
          label='Password'
          name='password'
          rules={[
            { required: true, message: 'Password is required' },
            { pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g, message: 'Password should contain minimum eight characters, at least one letter, one number and one special character' }
          ]}
          hasFeedback
        >
          <Input.Password
            placeholder='******'
            suffix={
              <Tooltip title='Password is required. Password should contain minimum eight characters, at least one letter, one number and one special character'>
                <InfoCircleOutlined style={{ color: '#1890ff' }} />
              </Tooltip>
            }
          />
        </CustomFormItem>

        <CustomFormItem
          name='confirm'
          label='Confirm Password'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!'
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match!'));
              }
            })
          ]}
        >
          <Input.Password placeholder='******'/>
        </CustomFormItem>

        <ButtonsContainer>
          <CustomButton onClick={onBackClick}> Back </CustomButton>
          <CustomButton disabled={isRegisterButtonDisabled} htmlType='submit'> Register </CustomButton>
        </ButtonsContainer>

        <p>
          If you already have an account <Link to='/login'> Login here </Link>
        </p>

      </UnauthenticatedForm>
    </CustomCard>
  );
};

export default StudentRegisterForm;