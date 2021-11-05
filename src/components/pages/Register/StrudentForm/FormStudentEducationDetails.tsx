import React, { Component } from 'react';
import { Card, DatePicker, Form, Input, Select } from 'antd';
import RegisterFormWrapper from '../RegisterFormWrapper';

const { Option } = Select;

export default class FormStudentPersonalDetails extends Component<any, any> {

    render() {
        return (
            <Card title="Unde studiati ?" bordered={false}>
                <RegisterFormWrapper>
                    <Form.Item name="educationDetails" label="Education Details" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>

                        </Select>
                    </Form.Item>
                </RegisterFormWrapper>
            </Card>

        );
    }
}