import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Cascader, DatePicker, Input, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import CustomButton from '../../shared/CustomButton';
import CustomFormItem from '../../shared/CustomFormItem';
import UnauthenticatedForm from '../../shared/UnauthenticatedForm';
import { useHistory } from 'react-router-dom';
import ErrorHeader from '../../shared/ErrorHeader';
import CustomForm from '../../shared/CustomForm';
import { University } from '../../../enums/University';
import { Faculty } from '../../../enums/Faculty';
import { Specialization } from '../../../enums/Specialization';
import ApiService from '../../../services/apiService';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import { UserContext } from '../../context/UserContext';
import moment from 'moment';
import { Domain } from '../../../enums/Domain';

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

const CompanyProfileForm = () => {
  const { id } = useContext(UserContext);
  const [isUpdateButtonDisabled, setIsUpdateButtonDisabled] = useState(false);
  const [apiError, setApiError] = useState('');
  const [form] = UnauthenticatedForm.useForm();

  useEffect(() => {
    ApiService.get<any>(ApiEndpoints.companies(id))
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
  }, [])

  const handleUpdateSubmit = values => {
    // TODO: update student endpoint
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
        label='Company domain'
        name='domain'
        rules={[
          { required: true, message: 'Company domain is required' }
        ]}
        hasFeedback
      >
        <Cascader options={Domain} placeholder='Company domain' />
      </CustomFormItem>

      <CustomButton disabled={isUpdateButtonDisabled} htmlType='submit'> Update </CustomButton>
    </CustomForm>
  );
};

export default CompanyProfileForm;