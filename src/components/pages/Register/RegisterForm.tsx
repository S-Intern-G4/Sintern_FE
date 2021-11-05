import React, { Component } from 'react';
import styled from 'styled-components';
import FormStudentEducationDetails from './StrudentForm/FormStudentEducationDetails';
import RegisterConfirmation from './CommonForm/RegisterConfirmation';
import FormCompanyDetails from './CompanyForm/FormCompanyDetails';
import FormCompanyCredentials from './CompanyForm/FormCompanyCredentials';
import FormStudentCredentials from './StrudentForm/FormStudentCredentials';
import FormCompanyConfirmDetails from './CompanyForm/FormCompanyConfirmDetails';

export default class RegisterForm extends Component<any, any>
{
    border-radius: 10px;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
export default class RegisterForm extends Component<any, any> {
    state = {
        step: 1,
        name: '' ,
        name1: ''
    }
        numberPrefix: null,
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
        this.setState({ [input]: e.target.value } );
    }

    // Handle 'select' and 'date' change
    handleEmptyEventChange = input => e => {
        this.setState({ [input]: e });
    };
    }

export default RegisterForm;
    }

                            <RegisterConfirmation userDetailsPack={ userDetailsPack }
        if (step == 1){
                            />
                        );
                    case 2:
                        const { firstName, lastName, dateOfBirth, numberPrefix, phoneNumber } = this.state;
                        const personalDetailsStudent = { firstName, lastName, dateOfBirth, numberPrefix, phoneNumber };
                            <FormStudentPersonalDetails nextStep={this.nextStep}/>
                                                        prevStep = { this.prevStep }
                                                        handleChange = { this.handleChange }
                                                        handleDateChange = { this.handleEmptyEventChange }
                                                        personalDetailsStudent = { personalDetailsStudent }
                            />
                    case 3:
                    case 3: {
                        const { university, faculty, specialization, yearOfStudy } = this.state;
                        const educationDetailsStudent = { university, faculty, specialization, yearOfStudy };
                            <h1>Step 3 Student</h1>
                                                         prevStep = {this.prevStep}
                                                         handleChange = { this.handleEmptyEventChange }
                                                         educationDetailsStudent = { educationDetailsStudent }
                            />
                    }
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