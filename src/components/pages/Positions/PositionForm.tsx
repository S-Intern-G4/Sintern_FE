import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Input, InputNumber, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import CustomButton from '../../shared/CustomButton';
import CustomFormItem from '../../shared/CustomFormItem';
import UnauthenticatedForm from '../../shared/UnauthenticatedForm';
import ErrorHeader from '../../shared/ErrorHeader';
import CustomForm from '../../shared/CustomForm';
import ApiService from '../../../services/apiService';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import { UserContext } from '../../context/UserContext';
import TextArea from 'antd/lib/input/TextArea';
import { PositionResponseModel } from '../../../interfaces/PositionsResponseModel';

const PositionContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 80px);
  width: 80%;
  margin: 0 auto;
`;

const PositionContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow-y: scroll;
  padding: 20px;
`;

const PositionForm = () => {
    const { id } = useContext(UserContext);
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
    const [apiError, setApiError] = useState('');
    const [successHeader, setSuccessHeader] = useState('');
    const [form] = UnauthenticatedForm.useForm();

    const handleAddSubmit = (values) => {
        setIsAddButtonDisabled(true);
        const requestValues = { ...values };
        requestValues.companyId = id;

        ApiService.post<any, PositionResponseModel>(
            ApiEndpoints.createOpenPosition,
            requestValues
        )
            .then(({ data }) => {
                //console.log(requestValues);
                //console.log(data);
                setIsAddButtonDisabled(false);
                setSuccessHeader('Successfully added');
            })
            .catch((error) => {
                setApiError(error.errorMessages);
                setIsAddButtonDisabled(false);
            });
    };

    return (
        <PositionContainer>
            <PositionContent>
                <h1>Open position</h1>
                <CustomForm
                    name='basic'
                    form={form}
                    onFinish={handleAddSubmit}
                    initialValues={{
                        availablePositions: 0,
                        department: '',
                        description: '',
                        name: ''
                    }}
                >
                    <ErrorHeader>
                        <p>{apiError}</p>
                    </ErrorHeader>

                    <SuccessHeader>
                        <p>{successHeader}</p>
                    </SuccessHeader>

                    <CustomFormItem
                        label='Name'
                        name='name'
                        rules={[
                            { required: true, message: 'Name is required' },
                            {
                                min: 2,
                                max: 100,
                                message: 'Name should have between 2 and 100 characters'
                            }
                        ]}
                        hasFeedback
                    >
                        <Input
                            placeholder='Java Backend Internship'
                            suffix={
                                <Tooltip title='Name is required. First Name should have between 2 and 100 characters'>
                                    <InfoCircleOutlined style={{ color: '#1890ff' }} />
                                </Tooltip>
                            }
                        />
                    </CustomFormItem>

                    <CustomFormItem
                        label='Department'
                        name='department'
                        rules={[
                            { required: true, message: 'Department is required' },
                            {
                                min: 2,
                                max: 100,
                                message: 'Department should have between 2 and 100 characters'
                            }
                        ]}
                        hasFeedback
                    >
                        <Input
                            placeholder='Java Backend'
                            suffix={
                                <Tooltip title='Department is required. Department should have between 2 and 100 characters'>
                                    <InfoCircleOutlined style={{ color: '#1890ff' }} />
                                </Tooltip>
                            }
                        />
                    </CustomFormItem>

                    <CustomFormItem
                        label='Available positions'
                        name='availablePositions'
                        rules={[
                            { required: true, message: 'Available positions is required' }
                        ]}
                        hasFeedback
                    >
                        <InputNumber min={1} max={10} defaultValue={1} />
                    </CustomFormItem>

                    <CustomFormItem
                        label='Description'
                        name='description'
                        rules={[{ required: true, message: 'Description is required' }]}
                        hasFeedback
                    >
                        <TextArea showCount maxLength={200} />
                    </CustomFormItem>
                    <br />
                    <CustomButton disabled={isAddButtonDisabled} htmlType='submit'>
                        {' '}
                        Add{' '}
                    </CustomButton>
                </CustomForm>
            </PositionContent>
        </PositionContainer>
    );
};

export default PositionForm;

const SuccessHeader = styled(ErrorHeader)`
  p {
    color: #009900;
  }
`;
