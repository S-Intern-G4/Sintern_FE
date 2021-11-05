import React, { Component } from 'react';
import { Card, DatePicker, Form, Input, Select } from 'antd';
import RegisterFormWrapper from '../RegisterFormWrapper';
import CustomButton from '../../../shared/CustomButton';

const { Option } = Select;

    );

    next = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    prev = e => {
        e.preventDefault();
        this.props.prevStep();
    };
                style={{ width: 70 }}>
                <Option value='+40'>+40</Option>
                <Option value='+39'>+39</Option>

    next = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    prev = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return undefined;
                <RegisterFormWrapper>
                    <Form.Item
                               onChange={this.props.handleChange('firstName')}
                               defaultValue={this.personalDetailsStudent.firstName}
                               maxLength={20}
                        />
                               onChange={this.props.handleChange('lastName')}
                               defaultValue={this.personalDetailsStudent.lastName}
                               maxLength={20}
                        />
                                    defaultValue={this.personalDetailsStudent.dateOfBirth}/>
                               onChange={this.props.handleChange('phoneNumber')}
                               defaultValue={this.personalDetailsStudent.phoneNumber}
                               maxLength={10}
                               style={{ width: '100%' }}/>
                            Back
                        <CustomButton onClick={this.next}>
                            Next
                        </CustomButton>
                    </div>
                </RegisterFormWrapper>
            </Card>

        );
    }
}