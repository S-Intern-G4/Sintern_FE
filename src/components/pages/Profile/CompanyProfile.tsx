import React, { useState } from 'react';
import { Cascader, DatePicker, Input, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import CustomButton from '../../shared/CustomButton';
import CustomFormItem from '../../shared/CustomFormItem';
import CustomCard from '../../shared/CustomCard';
import UnauthenticatedForm from '../../shared/UnauthenticatedForm';
import ErrorHeader from '../../shared/ErrorHeader';
import { Specialization } from '../../../enums/Specialization';
import { Faculty } from '../../../enums/Faculty';
import { University } from '../../../enums/University';
import CustomForm from '../../shared/CustomForm';

const CompanyProfile = () => {
  const [isUpdateButtonDisabled, setIsUpdateButtonDisabled] = useState(false);
  const [apiError, setApiError] = useState('');
  const [form] = UnauthenticatedForm.useForm();

  const handleUpdateSubmit = values => {
    // TODO
    console.log('submit');
  };

  return (
    <CustomCard title='Company Register' bordered={false}>
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

        <CustomButton disabled={isUpdateButtonDisabled} htmlType='submit'> Update </CustomButton>
      </CustomForm>
    </CustomCard>
  );
};

export default CompanyProfile;