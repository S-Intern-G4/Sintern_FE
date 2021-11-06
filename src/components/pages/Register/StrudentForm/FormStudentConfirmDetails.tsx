import React, { Component } from 'react';
import { Card } from 'antd';
import RegisterFormWrapper from '../RegisterFormWrapper';
import CustomButton from '../../../shared/CustomButton';

export default class FormStudentConfirmDetails extends Component<any, any> {

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
            <Card title='Your data :' bordered={false}>
                <RegisterFormWrapper>
                    <ul style={{ listStyle : 'none' , paddingLeft : '0pt', color: 'black', fontSize: '20px' }}>
                        <li>Email: {this.props.studentDetails.emailStudent}</li>
                        <li>Password: {this.props.studentDetails.passwordStudent}</li>
                        <li>First Name: {this.props.studentDetails.firstName}</li>
                        <li>Last Name: {this.props.studentDetails.lastName}</li>
                        <li>Date of birth: {(this.props.studentDetails.dateOfBirth==null ? '' :
                            this.props.studentDetails.dateOfBirth.format('DD/MM/YYYY').toString())}</li>
                        <li>Phone number: {this.props.studentDetails.numberPrefix} {this.props.studentDetails.phoneNumber}</li>
                        <li>University: {this.props.studentDetails.university}</li>
                        <li>Faculty: {this.props.studentDetails.faculty}</li>
                        <li>Specialization: {this.props.studentDetails.specialization}</li>
                        <li>Year of study: {this.props.studentDetails.yearOfStudy}</li>
                    </ul>
                    <div style={{ display: 'inline-flex' }}>
                        <CustomButton onClick={this.prev}>
                            Back
                        </CustomButton>
                        <CustomButton onClick={this.next}>
                            Confirm
                        </CustomButton>
                    </div>
                </RegisterFormWrapper>
            </Card>
        );
    }
}