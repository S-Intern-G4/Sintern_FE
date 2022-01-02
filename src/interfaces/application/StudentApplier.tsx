export interface StudentApplier {
  studentId: string
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
  description: string;
  dateOfSubmission: Date;
}
