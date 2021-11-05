import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Container from '../../shared/Container';
import RegisterContent from './RegisterContent';
import RegisterForm from './RegisterForm';
import CustomButton from '../../shared/CustomButton';

export default class Register extends Component {

  const onFinish = (values: any) => {
        // eslint-disable-next-line no-console
    console.log('Success:', values);
    };

  const onFinishFailed = (errorInfo: any) => {
        // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
    };

  const { Option } = Select;
        message.info('Click on menu item.');
        // eslint-disable-next-line no-console
        console.log('click', e);
    }

    render() {
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