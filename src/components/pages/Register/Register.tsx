import { Form, message } from 'antd';
import React, { Component } from 'react';
import Container from '../../shared/Container';
import RegisterContent from './RegisterContent';
import RegisterForm from './RegisterForm';

export default class Register extends Component {

    onFinish = (values: any) => {
        // eslint-disable-next-line no-console
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo: any) => {
        // eslint-disable-next-line no-console
        console.log('Failed:', errorInfo);
    };

    handleMenuClick(e) {
        message.info('Click on menu item.');
        // eslint-disable-next-line no-console
        console.log('click', e);
    }

    render() {
        return (
            <div>
                <Container>
                    <RegisterContent>
                        <Form>
                            <RegisterForm/>
                        </Form>
                    </RegisterContent>
                </Container>
            </div>
        );
    }

}