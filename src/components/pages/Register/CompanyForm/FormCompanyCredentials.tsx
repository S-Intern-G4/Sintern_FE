import React, { Component } from 'react';
import CustomButton from '../../../shared/CustomButton';
import { Card, Form, Input } from 'antd';
import RegisterFormWrapper from '../RegisterFormWrapper';

export default class FormCompanyCredentials extends Component<any, any> {

    next = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    prev = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { companyCredentials } = this.props;
        return (
            <Card title='Please enter your credentials :' bordered={false}>
                <RegisterFormWrapper>
                    <Form.Item
                        label='Email'
                        name='email_company'
                        rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
                    >
                        <Input placeholder='Enter your email...'
                               onChange={this.props.handleChange('emailCompany')}
                               defaultValue={companyCredentials.emailCompany}
                               maxLength={40}
                        />
                    </Form.Item>

                    <Form.Item
                        label='Password'
                        name='password_company'
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder='Enter your password...'
                                        onChange={this.props.handleChange('passwordCompany')}
                                        defaultValue={companyCredentials.passwordCompany}
                                        maxLength={30}
                        />
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