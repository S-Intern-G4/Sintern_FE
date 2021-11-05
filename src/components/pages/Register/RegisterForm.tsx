import { Form } from 'antd';
import FormUserType from './FormUserType';
import FormStudentPersonalDetails from './StrudentForm/FormStudentPersonalDetails';
import FormStudentEducationDetails from './StrudentForm/FormStudentEducationDetails';

export default class RegisterForm extends Component<any, any> {
    state = {
        company: false,
        student: false,
        step: 1,
        firstName: '',
        lastName: '',
        dateOfBirth: null,
        numberPrefix: null,
        phoneNumber: null,
        university: null,
        faculty: null,
        specialization: null,
        yearOfStudy: null
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