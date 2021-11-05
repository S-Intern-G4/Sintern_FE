import { Form } from 'antd';
import FormUserType from './FormUserType';

export default class RegisterForm extends Component<any, any>
{
    state = {
        company: false,
        student: false,
        step: 1 ,
        name: '' ,
        name1: ''
    }



    // Proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to prev. step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value } );
    }

    // Handle the switch between user type
    switchToStudentType = () => {
        this.setState({ student: true, company: false });
    }

    // Handle the switch between user type
    switchToCompanyType = () => {
        this.setState({ company: true, student: false });
    }

    render() {
        const { step, student, company } = this.state;
        if (step == 1){
            return (
                <FormUserType nextStep={this.nextStep}
                              switchToStudentType={this.switchToStudentType}
                              switchToCompanyType={this.switchToCompanyType}
                />
            );
        } else if (step > 1) {
            if (student) {
                switch (step) {
                    case 2:
                        return (
                            <h1>Step 2 Student</h1>
                        );
                    case 3:
                        return (
                            <h1>Step 3 Student</h1>
                        );
                    case 4:
                        return (
                            <h1>Step 4 Student</h1>
                        );
                }
            } else if (company) {
                switch (step) {
                    case 2:
                        return (
                            <h1>Step 2 Company</h1>
                        );
                    case 3:
                        return (
                            <h1>Step 3 Company</h1>
                        );
                }
            } else {
                return (
                    <h1>Error</h1>
                );
            }
        }
    }
}




// <Container>
//     <RegisterContent>
//         <Card title="Register" bordered={
//             false
//         }
//
//         >
//             <RegisterForm
//                 name="basic"
//                 labelCol={{ span: 8 }}
//                 wrapperCol={{ span: 16 }}
//                 initialValues={{ remember: true }}
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//             >
//                 <Form.Item
//                     label="Email"
//                     name="email"
//                     rules={[{ required: true, message: 'Please input your username!' }]}
//                 >
//                     <Input/>
//                 </Form.Item>
//
//                 <Form.Item
//                     label="Password"
//                     name="password"
//                     rules={[{ required: true, message: 'Please input your password!' }]}
//                 >
//                     <Input.Password/>
//                 </Form.Item>
//
//                 <Form.Item
//                     label="First Name"
//                     name="first_name"
//                     rules={[{ required: true, message: 'Please input your first name!' }]}
//                 >
//                     <Input/>
//                 </Form.Item>
//
//                 <Form.Item
//                     label="Last Name"
//                     name="last_name"
//                     rules={[{ required: true, message: 'Please input your last name!' }]}
//                 >
//                     <Input/>
//                 </Form.Item>
//
//                 <Form.Item name="date-picker" label="DatePicker" {...config}>
//                     <DatePicker/>
//                 </Form.Item>
//
//                 <Form.Item
//                     name="phone"
//                     label="Phone Number"
//                     rules={[{ required: true, message: 'Please input your phone number!' }]}
//                 >
//                     <Input addonBefore={prefixSelector} style={{ width: '100%' }}/>
//                 </Form.Item>
//
//                 <Form.Item name="educationDetails" label="Education Details" rules={[{ required: true }]}>
//                     <Select
//                         placeholder="Select a option and change input text above"
//                         allowClear
//                     >
//                         <Option value="male">male</Option>
//                         <Option value="female">female</Option>
//                         <Option value="other">other</Option>
//
//                     </Select>
//                 </Form.Item>
//
//
//                 <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//                     <Link to={'/login'}>
//                         <CustomButton type="primary" htmlType="submit">
//                             Save
//                         </CustomButton>
//                     </Link>
//                 </Form.Item>
//
//
//             </RegisterForm>
//
//
//         </Card>
//     </RegisterContent>
// </Container>