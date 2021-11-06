import React,{ Component } from 'react';
import CustomButton from '../../../shared/CustomButton';

export default class FormCompanyCredentials extends Component<any, any>{

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
                <h1>Credentiale companie</h1>
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