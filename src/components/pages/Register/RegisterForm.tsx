import React, { Component } from 'react';
import CustomForm from '../../shared/CustomForm';
import FormCompanyConfirmDetails from './CompanyForm/FormCompanyConfirmDetails';

export default class RegisterForm extends Component<any, any>
{
    state = {
        company: false,
        student: false,
        step: 1 ,
        name: '' ,
        name1: ''
    left: 0;
    background: rgba(0,0,0,0.8);
    opacity: 1;
    transition: all 1s;
    -webkit-transition: all 1s;
    z-index: ;
  }
        university: null,
  .ant-form-item-control, 
  .ant-form-item-label {
    z-index: 2;
        this.setState({
            step: step + 1
        });
  }

  .ant-form-item-required {
    color: #fff;
        const { step } = this.state;
        this.setState({
        });
  }

    }

    // Handle the switch between user type
    // Handle 'select' and 'date' change
    handleEmptyEventChange = input => e => {
        this.setState({ [input]: e });
    };
    }

    // Handle the switch between user type
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