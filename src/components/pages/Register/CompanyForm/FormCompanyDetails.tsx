import React, { Component } from 'react';
import { Card, DatePicker, Form, Input, Select } from 'antd';
import CustomButton from '../../../shared/CustomButton';
import RegisterFormWrapper from '../RegisterFormWrapper';

const { Option } = Select;

export default class FormCompanyDetails extends Component<any, any> {

    next = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    prev = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { companyDetails } = this.props;
        return (
            <Card title='Please enter your data :' bordered={false}>
                <RegisterFormWrapper>
                    <Form.Item
                        label='Company name'
                        name='company_name'
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input placeholder='Enter your name...'
                               onChange={this.props.handleChange('companyName')}
                               defaultValue={companyDetails.companyName}
                               maxLength={20}
                        />
                    </Form.Item>

                    <Form.Item name='company-domain' label='Domain' rules={[{ required: true }]}>
                        <Select
                            placeholder='Select a domain'
                            onChange={this.props.handleDomainChange('companyDomain')}
                            defaultValue={companyDetails.companyDomain}
                        >
                            <Option value='it'>IT</Option>
                            <Option value='medicine'>Medicine</Option>
                            <Option value='atomization'>Atomization</Option>
                            <Option value='other'>other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name='company-address'
                        label='Address'
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input.TextArea placeholder='Enter your address...'
                                        onChange={this.props.handleChange('companyAddress')}
                                        defaultValue={companyDetails.companyAddress}
                                        maxLength={50}
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