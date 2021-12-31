import React from 'react';
import styled from 'styled-components';
import { Document } from 'react-pdf';

const CardFeed = styled.div`
  width: 100%;
  margin: 10px 0px;
  background-color: #2193b0;
  color: black;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const TextCard = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StudentName = styled.div`
  font-size: 20px;
`;
const University = styled.div`
  font-size: 20px;
`;
const Faculty = styled.div`
  font-size: 20px;
`;
const Specialization = styled.div`
  font-size: 20px;
`;
const YearOfStudy = styled.div`
  font-size: 20px;
`;
const PhoneNumber = styled.div`
  font-size: 20px;
`;
const Email = styled.div`
  font-size: 20px;
`;
const DateOfBirth = styled.div`
  font-size: 20px;
`;
const Description = styled.div`
  font-size: 20px;
`;
const DateOfSubmission = styled.div`
  font-size: 20px;
`;

const OpenPositionFeedComponent = (props) => {
  const { studentApplier } = props;

  return (
    <CardFeed>
      <Document file={studentApplier.cv} />
      <TextCard>
        <StudentName>
          <strong>First name:</strong> {studentApplier.firstName}
        </StudentName>
        <StudentName>
          <strong>Last name:</strong> {studentApplier.lastName}
        </StudentName>
        <University>
          <strong>University: </strong>
          {studentApplier.educationDetails.university}
        </University>
        <Faculty>
          <strong>Faculty:</strong> {studentApplier.educationDetails.faculty}
        </Faculty>
        <Specialization>
          <strong>Specialization:</strong>{' '}
          {studentApplier.educationDetails.specialization}
        </Specialization>
        <YearOfStudy>
          <strong>Year Of Study:</strong>{' '}
          {studentApplier.educationDetails.yearOfStudy}
        </YearOfStudy>
        <PhoneNumber>
          <strong>Phone Number:</strong> {studentApplier.phoneNumber}
        </PhoneNumber>
        <Email>
          <strong>Email:</strong> {studentApplier.email}
        </Email>
        <DateOfBirth>
          <strong>Date Of Birth:</strong> {studentApplier.dateOfBirth}
        </DateOfBirth>
        <Description>
          <strong>Description:</strong> {studentApplier.description}
        </Description>
        <DateOfSubmission>
          <strong>Date Of Submission:</strong> {studentApplier.dateOfSubmission}
        </DateOfSubmission>
      </TextCard>
    </CardFeed>
  );
};

export default OpenPositionFeedComponent;
