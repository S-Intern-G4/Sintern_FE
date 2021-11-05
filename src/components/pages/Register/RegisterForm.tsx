import React, { Component } from 'react';
import styled from 'styled-components';
import CustomForm from '../../shared/CustomForm';
import FormStudentEducationDetails from './StrudentForm/FormStudentEducationDetails';
import FormStudentConfirmDetails from './StrudentForm/FormStudentConfirmDetails';
import RegisterConfirmation from './CommonForm/RegisterConfirmation';
import FormCompanyDetails from './CompanyForm/FormCompanyDetails';
import FormCompanyCredentials from './CompanyForm/FormCompanyCredentials';
import FormStudentCredentials from './StrudentForm/FormStudentCredentials';
import FormCompanyConfirmDetails from './CompanyForm/FormCompanyConfirmDetails';

const RegisterForm = styled(CustomForm)`
  &:after {
    border-radius: 10px;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
export default class RegisterForm extends Component<any, any> {
    state = {
        step: 1,

        // student attributes
        student: false,
        emailStudent: '',
        passwordStudent: '',
        firstName: '',
        lastName: '',
        dateOfBirth: null,
        numberPrefix: null,
        phoneNumber: null,
        university: null,
        faculty: null,
        specialization: null,
        yearOfStudy: null,

        // company attributes
        company: false,
        emailCompany: '',
        passwordCompany: '',
        companyName: '',
        companyDomain: null,
  }
    };

    // Proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

            step: step - 1
        });
    };

`;

export default RegisterForm;

                            <RegisterConfirmation userDetailsPack={ userDetailsPack }
                            />
                        );
                    }
                }
            } else {
                return (
                    <h1>Error</h1>
                );
            }
        }
    }
}