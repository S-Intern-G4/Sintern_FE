import { message } from 'antd';
import React, { Component } from 'react';
import React from 'react';
import Container from '../../shared/Container';
import RegisterContent from './RegisterContent';
import RegisterForm from './RegisterForm';
import RegisterFormWrapper from './RegisterFormWrapper';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

export default class Register extends Component {

    config = {
    };

    onFinish = (values: any) => {
    };

    // const { Option } = Select;
  const prefixSelector = (
      <Select style={{ width: 70 }}>
      </Select>
    </Form.Item>
  );
  const { RangePicker } = DatePicker;
  const config = {
    rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
  };
  
  function handleMenuClick(e) {
        message.info('Click on menu item.');
        // eslint-disable-next-line no-console
        console.log('click', e);
    }

    render() {
    render() {
        1st menu item
      </Menu.Item>
        2nd menu item
      </Menu.Item>
        3rd menu item
      </Menu.Item>
    </Menu>
  );
    render() {
        return (
            <div>
                <Container>
                    <RegisterContent>
        <Card title='Register' bordered={false}>
          <RegisterForm
                        </Form>
                    </RegisterContent>
                </Container>
            </div>
        );
    }

}