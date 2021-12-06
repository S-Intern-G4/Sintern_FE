export interface StudentApplier {
  firstName: string;
  lastName: string;
  educationDetails: {
    university: string;
    faculty: string;
    specialization: string;
    yearOfStudy: string;
  };
  phoneNumber: string;
  email: string;
  dateOfBirth: Date;
  CV: string;
  description: string;
  dateOfSubmission: Date;
}
