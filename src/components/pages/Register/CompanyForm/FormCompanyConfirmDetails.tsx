import React,{ Component } from 'react';
import CustomButton from '../../../shared/CustomButton';
import RegisterFormWrapper from '../RegisterFormWrapper';
import { Card } from 'antd';

export default class FormCompanyConfirmDetails extends Component<any, any>{

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
                        <li>Email: {this.props.companyDetails.emailCompany}</li>
                        <li>Password: {this.props.companyDetails.passwordCompany}</li>
                        <li>Name: {this.props.companyDetails.companyName}</li>
                        <li>Domain: {this.props.companyDetails.companyDomain}</li>
                        <li>Address: {this.props.companyDetails.companyAddress}</li>
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