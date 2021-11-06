import React, { Component } from 'react';
import CustomButton from '../../../shared/CustomButton';
import { Card } from 'antd';
import RegisterFormWrapper from '../RegisterFormWrapper';

export default class FormUserType extends Component<any, any> {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        return (
            <Card title='You are ?' bordered={false}>
                <RegisterFormWrapper>
                    <CustomButton block onClick={e => {
                        this.props.switchToStudentType();
                        this.continue(e);
                    }}>
                        Student
                    </CustomButton>
                    <CustomButton block onClick={e => {
                        this.props.switchToCompanyType();
                        this.continue(e);
                    }}>
                        Company
                    </CustomButton>
                </RegisterFormWrapper>
            </Card>
        );
    }
}