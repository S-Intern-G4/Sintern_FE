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

    render() {
        return undefined;
                <RegisterFormWrapper>
                    <Form.Item
                    >
                </RegisterFormWrapper>
            </Card>

        );
    }
}