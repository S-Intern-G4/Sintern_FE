import { message } from 'antd';
import React, { Component } from 'react';
import Container from '../../shared/Container';
import RegisterContent from './RegisterContent';
import RegisterForm from './RegisterForm';
import RegisterFormWrapper from './RegisterFormWrapper';

export default class Register extends Component {

    config = {
        rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }]
    };

    onFinish = (values: any) => {
        console.log('Success:', values);
    };

    // const { Option } = Select;

    // prefixSelector = (
    //   <Form.Item name="prefix" noStyle>
    //     <Select style={{ width: 70 }}>
    //       <Option value="86">+86</Option>
    //       <Option value="87">+87</Option>
    //     </Select>
    //   </Form.Item>
    // );

    // const { RangePicker } = DatePicker;

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