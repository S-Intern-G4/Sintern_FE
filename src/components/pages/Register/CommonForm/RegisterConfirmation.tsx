import React, { Component } from 'react';
import CustomButton from '../../../shared/CustomButton';

export default class RegisterConfirmation extends Component<any, any>{
    userDetailsPack = this.props.userDetailsPack;

    render() {
        if (this.userDetailsPack.student)
            return (
                <div>
                    <h1>Student account created successfully</h1>
                    <CustomButton type='link' href='/login' >
                        Login now
                    </CustomButton>
                </div>
            );
        else if(this.userDetailsPack.company){
            return (
                <div>
                    <h1>Company account created successfully</h1>
                    <CustomButton type='link' href='/login' >
                        Login now
                    </CustomButton>
                </div>
            );
        }
        else{
            return (
                <h1>ERROR: student: false - company: false</h1>
            );
        }
    }
}