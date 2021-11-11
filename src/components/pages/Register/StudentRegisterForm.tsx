import React, { useState } from 'react';
import styled from 'styled-components';
import { Cascader, DatePicker, Input, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import CustomButton from '../../shared/CustomButton';
import CustomFormItem from '../../shared/CustomFormItem';
import CustomCard from '../../shared/CustomCard';
import { Link } from 'react-router-dom';
import UnauthenticatedForm from '../../shared/UnauthenticatedForm';
import { University } from '../../../enums/University';
import { Faculty } from '../../../enums/Faculty';
import { Specialization } from '../../../enums/Specialization';
import ApiService from '../../../services/apiService';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import ErrorHeader from '../../shared/ErrorHeader';
import { useHistory } from 'react-router-dom';
import { StudentRegisterModel } from '../../../interfaces/StudentRegisterModel';

const NamesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 150px;
  color: #107d9e;

  .ant-row:first-child {
    margin-right: 5px;
  }

  .ant-row:nth-child(2) {
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

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
  const [showEducationDetails, setShowEducationDetails] = useState(false);
  const [apiError, setApiError] = useState('');
  const history = useHistory();
  const [secondForm] = UnauthenticatedForm.useForm();

  const [fisrtPageValues, setFirstPageValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: null,
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleNext = (values) => {
    setShowEducationDetails(true);
    setFirstPageValues(values);
  };

  const handleRegisterSubmit = (values) => {
    setIsRegisterButtonDisabled(true);

    const requestValues = { ...fisrtPageValues, ...values };
    requestValues.university = requestValues.university[0];
    requestValues.faculty = requestValues.faculty[0];
    requestValues.specialization = requestValues.specialization[0];

    ApiService.post<any, StudentRegisterModel>(ApiEndpoints.studentRegister, requestValues)
      .then(() => {
        history.push('/login');
      })
      .catch((error) => {
        setApiError(error.errorMessages);
        setIsRegisterButtonDisabled(false);
      });
  };

  return (
    <CustomCard title='Student Register' bordered={false}>
      {
        !showEducationDetails &&
        <UnauthenticatedForm
          onFinish={handleNext}
          initialValues={fisrtPageValues}
        >

          <ErrorHeader>
            <p>{apiError}</p>
          </ErrorHeader>

          <>
            <NamesContainer>
              <CustomFormItem
                label='First Name'
                name='firstName'
                rules={[
                  { required: true, message: 'First Name is required' },
                  { min: 2, max: 100, message: 'First Name should have between 2 and 100 characters' }
                ]}
                hasFeedback
              >
                <Input
                  placeholder='John'
                  suffix={
                    <Tooltip title='First Name is required. First Name should have between 2 and 100 characters'>
                      <InfoCircleOutlined style={{ color: '#1890ff' }} />
                    </Tooltip>
                  }
                />
              </CustomFormItem>

              <CustomFormItem
                label='Last Name'
                name='lastName'
                rules={[
                  { required: true, message: 'Last Name is required' },
                  { min: 2, max: 100, message: 'Last Name should have between 2 and 100 characters' }
                ]}
                hasFeedback
              >
                <Input
                  placeholder='Doe'
                  suffix={
                    <Tooltip title='Last Name is required. Last Name should have between 2 and 100 characters'>
                      <InfoCircleOutlined style={{ color: '#1890ff' }} />
                    </Tooltip>
                  }
                />
              </CustomFormItem>
            </NamesContainer>

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
              label='Date of birth'
              name='dateOfBirth'
              rules={[
                { required: true, message: 'Date of birth is required' }
              ]}
              hasFeedback
            >
              <DatePicker />
            </CustomFormItem>

            <CustomFormItem
              label='Phone number'
              name='phone'
              rules={[
                { required: true, message: 'Phone number is required' },
                { pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g, message: 'Invalid phone number' }
              ]}
              hasFeedback
            >
              <Input
                suffix={
                  <Tooltip title='Phone number is required. Phone number should have a valid format'>
                    <InfoCircleOutlined style={{ color: '#1890ff' }} />
                  </Tooltip>
                }
              />
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
              name='confirmPassword'
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
              <Input.Password placeholder='******' />
            </CustomFormItem>

            <ButtonsContainer>
              <CustomButton onClick={onBackClick}> Back </CustomButton>
              <CustomButton htmlType='submit'> Next </CustomButton>
            </ButtonsContainer>
          </>
        </UnauthenticatedForm>
      }

      {
        showEducationDetails &&
        <UnauthenticatedForm
          form={secondForm}
          onFinish={handleRegisterSubmit}
        >

          <ErrorHeader>
            <p>{apiError}</p>
          </ErrorHeader>

          <CustomFormItem
            label='University'
            name='university'
            rules={[
              { required: true, message: 'University is required' }
            ]}
            hasFeedback
          >
            <Cascader options={University} placeholder='University' />
          </CustomFormItem>

          <CustomFormItem
            label='Faculty'
            name='faculty'
            rules={[
              { required: true, message: 'Faculty is required' }
            ]}
            hasFeedback
          >
            <Cascader options={Faculty} placeholder='Faculty domain' />
          </CustomFormItem>

          <CustomFormItem
            label='Specialization'
            name='specialization'
            rules={[
              { required: true, message: 'Specialization is required' }
            ]}
            hasFeedback
          >
            <Cascader options={Specialization} placeholder='Specialization domain' />
          </CustomFormItem>

          <CustomFormItem
            label='Year of study'
            name='yearOfStudy'
            rules={[
              { required: true, message: 'Year of study is required' },
              { pattern: /^[123456]$/g, message: 'Invalid year' }
            ]}
            hasFeedback
          >
            <Input
              suffix={
                <Tooltip title='Year of study is required. Year of study should have a valid format'>
                  <InfoCircleOutlined style={{ color: '#1890ff' }} />
                </Tooltip>
              }
            />
          </CustomFormItem>

          <ButtonsContainer>
            <CustomButton onClick={() => { setShowEducationDetails(false); }}> Back </CustomButton>
            <CustomButton disabled={isRegisterButtonDisabled} htmlType='submit'> Register </CustomButton>
          </ButtonsContainer>

          <p>
            If you already have an account <Link to='/login'> Login here </Link>
          </p>

        </UnauthenticatedForm>
      }
    </CustomCard>
  );
};

export default StudentRegisterForm;