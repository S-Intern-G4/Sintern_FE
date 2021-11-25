import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Cascader, Input, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import CustomButton from '../../shared/CustomButton';
import CustomFormItem from '../../shared/CustomFormItem';
import UnauthenticatedForm from '../../shared/UnauthenticatedForm';
import ErrorHeader from '../../shared/ErrorHeader';
import CustomForm from '../../shared/CustomForm';
import ApiService from '../../../services/apiService';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import { UserContext } from '../../context/UserContext';
import { Domain } from '../../../enums/Domain';
import Container from '../../shared/Container';
import { CompanyUpdateModel } from '../../../interfaces/company/CompanyUpdateModel';

const CompanyProfileForm = () => {
  const { id } = useContext(UserContext);
  const [isUpdateButtonDisabled, setIsUpdateButtonDisabled] = useState(false);
  const [apiError, setApiError] = useState('');
  const [successHeader, setSuccessHeader] = useState('');
  const [form] = UnauthenticatedForm.useForm();

  useEffect(() => {
    ApiService.get<any>(ApiEndpoints.companies(id))
      .then(({ data }) => {
        form.setFieldsValue({
          name: data.name,
          address: data.address,
          domain: [data.domain.domainType]
        });
      });
  }, []);


  const handleUpdateSubmit = values => {
    setIsUpdateButtonDisabled(true);
    const requestValues = { ...values };
    requestValues.id = id;
    requestValues.domain = requestValues.domain[0];
    ApiService.post<any, CompanyUpdateModel>(ApiEndpoints.updateCompany, requestValues)
      .then(({ data }) => {
        form.setFieldsValue({
          name: data.name,
          address: data.address,
          domain: [data.domain.domainType]
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
    <CompanyContainer>
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
    </CompanyContainer>
  );
};

export default CompanyProfileForm;

const CompanyContainer = styled(Container)`
  width: 60%;
  margin: 20px auto;

  @media (max-width: 768px) {
    width: 95%
  }
`;

const SuccessHeader = styled(ErrorHeader)`
  p {
    color: #009900;
  }
`;