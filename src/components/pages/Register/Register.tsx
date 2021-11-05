import { message } from 'antd';
import React, { Component } from 'react';
import Container from '../../shared/Container';
import RegisterContent from './RegisterContent';
import RegisterForm from './RegisterForm';
import RegisterFormWrapper from './RegisterFormWrapper';

export default class Register extends Component {



    onFinish = (values: any) => {
        console.log('Success:', values);
    };



    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    // const menu = (
    //   <Menu onClick={handleMenuClick}>
    //     <Menu.Item key="1" icon={<UserOutlined />}>
    //       1st menu item
    //     </Menu.Item>
    //     <Menu.Item key="2" icon={<UserOutlined />}>
    //       2nd menu item
    //     </Menu.Item>
    //     <Menu.Item key="3" icon={<UserOutlined />}>
    //       3rd menu item
    //     </Menu.Item>
    //   </Menu>
    // );

    render() {
        return (
            <div>
                <Container>
                    <RegisterContent>
                        <RegisterForm/>
                    </RegisterContent>
                </Container>
            </div>
        );
    }

}