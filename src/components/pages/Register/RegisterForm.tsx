import { Form } from 'antd';
import FormUserType from './CommonForm/FormUserType';
import FormStudentPersonalDetails from './StrudentForm/FormStudentPersonalDetails';
import FormStudentEducationDetails from './StrudentForm/FormStudentEducationDetails';
import FormStudentConfirmDetails from './StrudentForm/FormStudentConfirmDetails';
import RegisterConfirmation from './CommonForm/RegisterConfirmation';
import FormCompanyDetails from './CompanyForm/FormCompanyDetails';
import FormCompanyCredentials from './CompanyForm/FormCompanyCredentials';
import FormStudentCredentials from './StrudentForm/FormStudentCredentials';
import FormCompanyConfirmDetails from './CompanyForm/FormCompanyConfirmDetails';

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
        companyAddress: ''
    };

    // Proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev. step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    // Handle 'select' and 'date' change
    handleEmptyEventChange = input => e => {
        this.setState({ [input]: e });
    };

    // Handle the switch between user type
    switchToStudentType = () => {
        this.setState({ student: true, company: false });
    };

    // Handle the switch between user type
    switchToCompanyType = () => {
        this.setState({ company: true, student: false });
    };

    render() {
        const { step, student, company } = this.state;
        if (step == 1) {
            return (
                <FormUserType nextStep={this.nextStep}
                              switchToStudentType={this.switchToStudentType}
                              switchToCompanyType={this.switchToCompanyType}
                />
            );
        } else if (step > 1) {
            if (student) {
                switch (step) {
                    case 2: {
                        const { firstName, lastName, dateOfBirth, numberPrefix, phoneNumber } = this.state;
                        const personalDetailsStudent = { firstName, lastName, dateOfBirth, numberPrefix, phoneNumber };
                        return (
                            <FormStudentPersonalDetails nextStep = { this.nextStep }
                                                        prevStep = { this.prevStep }
                                                        handleChange = { this.handleChange }
                                                        handleDateChange = { this.handleEmptyEventChange }
                                                        personalDetailsStudent = { personalDetailsStudent }
                            />
                        );
                    }
                    case 3: {
                        const { university, faculty, specialization, yearOfStudy } = this.state;
                        const educationDetailsStudent = { university, faculty, specialization, yearOfStudy };
                        return (
                            <FormStudentEducationDetails nextStep = {this.nextStep}
                                                         prevStep = {this.prevStep}
                                                         handleChange = { this.handleEmptyEventChange }
                                                         educationDetailsStudent = { educationDetailsStudent }
                            />
                        );
                    }
                    case 4: {
                        const { emailStudent, passwordStudent } = this.state;
                        const studentCredentials = { emailStudent, passwordStudent };
                        return (
                            <FormStudentCredentials nextStep={this.nextStep}
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
                        );
                    }
                }
            } else if (company) {
                switch (step) {
                    case 2: {
                        const { companyName, companyDomain, companyAddress } = this.state;
                        const companyDetailes = { companyName, companyDomain, companyAddress };
                        return (
                            <FormCompanyDetails nextStep = { this.nextStep }
                                                prevStep = { this.prevStep }
                                                handleChange = { this.handleChange }
                                                handleDomainChange = { this.handleEmptyEventChange }
                                                companyDetailes = { companyDetailes }
                            />
                        );
                    }
                    case 3:{
                        const { emailCompany, passwordCompany } = this.state;
                        const companyCredentials =  { emailCompany, passwordCompany } ;
                        return (
                            <FormCompanyCredentials nextStep = { this.nextStep }
                                                    prevStep = { this.prevStep }
                                                    handleChange = { this.handleChange }
                                                    companyCredentials = { companyCredentials }
                            />
                        );
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