import React, { Component } from 'react';
import { DatePicker, Form, Input, Select } from 'antd';
import CustomButton from '../../../shared/CustomButton';

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
        return (
            <div>
                <h1>Detalii companie</h1>
                <div style={{ display: 'inline-flex' }}>
                    <CustomButton onClick={this.prev}>
                        Back
                    </CustomButton>
                    <CustomButton onClick={this.next}>
                        Next
                    </CustomButton>
                </div>
            </div>
        );
    }
}