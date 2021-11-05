import React, { Component } from 'react';
import { Card, DatePicker, Form, Input, Select } from 'antd';
import RegisterFormWrapper from '../RegisterFormWrapper';
import CustomButton from '../../../shared/CustomButton';

const { Option } = Select;

export default class FormStudentPersonalDetails extends Component<any, any> {

    personalDetailsStudent = this.props.personalDetailsStudent;
    config = {
        rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }]
    };
    prefixSelector = (
        <Form.Item name='prefix' noStyle>
            <Select
                onChange={this.props.handleDateChange('numberPrefix')}
                defaultValue={this.personalDetailsStudent.numberPrefix}
                style={{ width: 70 }}>
                <Option value='+40'>+40</Option>
                <Option value='+39'>+39</Option>
            </Select>
        </Form.Item>
    );

    next = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    prev = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <Card title='Please enter your data :' bordered={false}>
                <RegisterFormWrapper>
                    <Form.Item
                        label='First Name'
                        name='first_name'
                        rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                        <Input placeholder='Enter your first name...'
                               onChange={this.props.handleChange('firstName')}
                               defaultValue={this.personalDetailsStudent.firstName}
                               maxLength={20}
                        />
                    </Form.Item>

                    <Form.Item
                        label='Last Name'
                        name='last_name'
                        rules={[{ required: true, message: 'Please input your last name!' }]}
                    >
                        <Input placeholder='Enter your last name...'
                               onChange={this.props.handleChange('lastName')}
                               defaultValue={this.personalDetailsStudent.lastName}
                               maxLength={20}
                        />
                    </Form.Item>

                    <Form.Item name='date-picker' label='DatePicker' {...this.config}>
                        <DatePicker onChange={this.props.handleDateChange('dateOfBirth')}
                                    defaultValue={this.personalDetailsStudent.dateOfBirth}/>
                    </Form.Item>

                    <Form.Item
                        name='phone'
                        label='Phone Number'
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input addonBefore={this.prefixSelector}
                               onChange={this.props.handleChange('phoneNumber')}
                               defaultValue={this.personalDetailsStudent.phoneNumber}
                               maxLength={10}
                               style={{ width: '100%' }}/>
                    </Form.Item>
                    <div style={{ display: 'inline-flex' }}>
                        <CustomButton onClick={this.prev}>
                            Back
                        </CustomButton>
                        <CustomButton onClick={this.next}>
                            Next
                        </CustomButton>
                    </div>
                </RegisterFormWrapper>
            </Card>

        );
    }
}