import React, { Component } from 'react';
import { Card, DatePicker, Form, Input, Select } from 'antd';
import RegisterFormWrapper from '../RegisterFormWrapper';
import CustomButton from '../../../shared/CustomButton';

const { Option } = Select;

const { RangePicker } = DatePicker;

export default class FormStudentPersonalDetails extends Component<any, any> {

    config = {
        rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }]
    };

    prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value='86'>+86</Option>
          <Option value='87'>+87</Option>
        </Select>
      </Form.Item>
    );

    render() {
        return(
            <Card title='Va rugam sa va introduceti datele :' bordered={false}>
                <RegisterFormWrapper>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item
                        label="First Name"
                        name="first_name"
                        rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="last_name"
                        rules={[{ required: true, message: 'Please input your last name!' }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item name="date-picker" label="DatePicker" {...this.config}>
                        <DatePicker/>
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input addonBefore={this.prefixSelector} style={{ width: '100%' }}/>
                    </Form.Item>
                    <CustomButton onClick={e => {this.props.nextStep()}}>
                        Continuati
                    </CustomButton>
                </RegisterFormWrapper>
            </Card>

        );
    }
}