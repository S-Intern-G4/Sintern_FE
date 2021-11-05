import React, { Component } from 'react';
import { Card } from 'antd';
import RegisterFormWrapper from '../RegisterFormWrapper';
import CustomButton from '../../../shared/CustomButton';


export default class FormStudentPersonalDetails extends Component {

    render() {
        return (
            <Card title="Unde studiati ?" bordered={false}>
                <RegisterFormWrapper>
                    <h1>Datele dumneavoastra sunt: </h1>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <CustomButton block>
                        Anulare
                    </CustomButton>
                    <CustomButton block>

                    </CustomButton>
                </RegisterFormWrapper>
            </Card>

        );
    }
}