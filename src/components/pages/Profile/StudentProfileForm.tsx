import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Cascader, DatePicker, Input, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import CustomButton from '../../shared/CustomButton';
import CustomFormItem from '../../shared/CustomFormItem';
import UnauthenticatedForm from '../../shared/UnauthenticatedForm';
import ErrorHeader from '../../shared/ErrorHeader';
import CustomForm from '../../shared/CustomForm';
import { University } from '../../../enums/University';
import { Faculty } from '../../../enums/Faculty';
import { Specialization } from '../../../enums/Specialization';
import ApiService from '../../../services/apiService';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import { UserContext } from '../../context/UserContext';
import moment from 'moment';
import { StudentUpdateModel } from '../../../interfaces/students/StudentUpdateModel';

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

const StudentProfileForm = () => {
  const { id } = useContext(UserContext);
  const [isUpdateButtonDisabled, setIsUpdateButtonDisabled] = useState(false);
  const [apiError, setApiError] = useState('');
  const [successHeader, setSuccessHeader] = useState('');
  const [form] = UnauthenticatedForm.useForm();

  useEffect(() => {
    ApiService.get<any>(ApiEndpoints.students(id))
      .then(({ data }) => {
        form.setFieldsValue({
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          dateOfBirth: moment(data.dateOfBirth),
          university: [data.educationDetails.university],
          faculty: [data.educationDetails.faculty],
          specialization: [data.educationDetails.specialization],
          yearOfStudy: data.educationDetails.yearOfStudy
        });
      });
  }, []);

  const handleUpdateSubmit = values => {
    setIsUpdateButtonDisabled(true);
    const requestValues = { ...values };
    requestValues.id = id;
    requestValues.university = requestValues.university[0];
    requestValues.faculty = requestValues.faculty[0];
    requestValues.specialization = requestValues.specialization[0];

    ApiService.post<any, StudentUpdateModel>(ApiEndpoints.updateStudent, requestValues)
      .then(({ data }) => {
        form.setFieldsValue({
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          dateOfBirth: moment(data.dateOfBirth),
          university: [data.educationDetails.university],
          faculty: [data.educationDetails.faculty],
          specialization: [data.educationDetails.specialization],
          yearOfStudy: data.educationDetails.yearOfStudy
        });
        setIsUpdateButtonDisabled(false);
        setSuccessHeader('Successfully updated');
      })
      .catch((error) => {
        setApiError(error.errorMessages);
        setIsUpdateButtonDisabled(false);
      });
  };

  return (
    <CustomForm name='basic'
      form={form}
      onFinish={handleUpdateSubmit}
      initialValues={{
        email: '',
        password: '',
        name: '',
        domain: null,
        passwordRepeat: ''
      }
      }
    >

      <ErrorHeader>
        <p>{apiError}</p>
      </ErrorHeader>

      <SuccessHeader>
        <p>{successHeader}</p>
      </SuccessHeader>

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
        name='phoneNumber'
        rules={[
          { required: true, message: 'Phone number is required' },
          { pattern: /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/g, message: 'Invalid phone number' }
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
        <Cascader options={Faculty} placeholder='Faculty' />
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
          { required: true, message: 'Year of study is required' }
        ]}
        hasFeedback
      >
        <Input
          suffix={
            <Tooltip title='Year of study is required'>
              <InfoCircleOutlined style={{ color: '#1890ff' }} />
            </Tooltip>
          }
        />
      </CustomFormItem>

      <CustomButton disabled={isUpdateButtonDisabled} htmlType='submit'> Update </CustomButton>
    </CustomForm>
  );
};

export default StudentProfileForm;


const SuccessHeader = styled(ErrorHeader)`
  p {
    color: #009900;
  }
`;