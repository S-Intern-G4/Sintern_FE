import React, { Component } from 'react';
import FormUserType from './FormUserType';
import FormStudentEducationDetails from './StrudentForm/FormStudentEducationDetails';
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
        passwordStudent: '',
        dateOfBirth: null,
        numberPrefix: null,
        phoneNumber: null,
        university: null,
        faculty: null,
        specialization: null,
        yearOfStudy: null,
        companyAddress: ''
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
                    case 4:
                        const { emailStudent, passwordStudent } = this.state;
                        const studentCredentials = { emailStudent, passwordStudent };
                            <h1>Step 4 Student</h1>
                                                    prevStep={this.prevStep}
                                                    studentCredentials={studentCredentials}
                            />
                        );
                    }
                    case 5: {
                        const {
                            emailStudent, passwordStudent, firstName, lastName, dateOfBirth, numberPrefix, phoneNumber, university,
                            faculty, specialization, yearOfStudy
                        } = this.state;
                        const studentDetails = {
                            emailStudent, passwordStudent, firstName, lastName, dateOfBirth, numberPrefix, phoneNumber, university,
                            faculty, specialization, yearOfStudy
                        };
                        return (
                            <FormStudentConfirmDetails nextStep={this.nextStep}
                                                       prevStep={this.prevStep}
                                                       studentDetails={studentDetails}
                            />
                        );
                    }
                    case 6: {
                        const {
                            student, company, emailStudent, passwordStudent, firstName, lastName, dateOfBirth, numberPrefix, phoneNumber, university,
                            faculty, specialization, yearOfStudy
                        } = this.state;
                        const userDetailsPack = {
                            student, company, emailStudent, passwordStudent, firstName, lastName, dateOfBirth, numberPrefix, phoneNumber, university,
                            faculty, specialization, yearOfStudy
                        };
                        return (
                            <RegisterConfirmation userDetailsPack={ userDetailsPack }
                            />
                    }
                }
                    case 2:
                        const { companyName, companyDomain, companyAddress } = this.state;
                        const companyDetailes = { companyName, companyDomain, companyAddress };
                            <h1>Step 2 Company</h1>
                                                prevStep = { this.prevStep }
                                                handleChange = { this.handleChange }
                                                handleDomainChange = { this.handleEmptyEventChange }
                                                companyDetailes = { companyDetailes }
                            />
                    case 3:
                    case 3:{
                        const { emailCompany, passwordCompany } = this.state;
                        const companyCredentials =  { emailCompany, passwordCompany } ;
                            <h1>Step 3 Company</h1>
                                                    prevStep = { this.prevStep }
                                                    handleChange = { this.handleChange }
                                                    companyCredentials = { companyCredentials }
                            />
                    }
                    case 4:{
                        const {
                            emailCompany, passwordCompany, companyName,
                            companyDomain, companyAddress } = this.state;
                        const companyDetails = {
                            emailCompany, passwordCompany, companyName,
                            companyDomain, companyAddress
                        };
                        return (
                            <FormCompanyConfirmDetails nextStep={this.nextStep}
                                                       prevStep={this.prevStep}
                                                       companyDetails={companyDetails}
                            />
                        );
                    }
                    case 5:{
                        const {
                            student, company, emailCompany, passwordCompany, companyName,
                            companyDomain, companyAddress } = this.state;
                        const userDetailsPack = {
                            student, company, emailCompany, passwordCompany, companyName,
                            companyDomain, companyAddress
                        };
                        return (
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