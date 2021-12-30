import React from 'react';
import styled from 'styled-components';

const ResultCardFeed = styled.div`
  width: 100%;
  margin: 10px 0px;
  background-color: #2193b0;
  color:black;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const TextCard = styled.div`
  width:50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
`;

const Grade = styled.div`
    font-size: 20px;
`;
const FullName = styled.div`
    font-size: 20px;
`;
const PhoneNumber = styled.div`
    font-size: 20px;
`;
const Email = styled.div`
    font-size: 20px;
`;
const HasPassed = styled.div`
    font-size: 20px;
`;

const ResultsCard = (props)=>{
    return(
        <ResultCardFeed>
            <TextCard>
                <FullName><strong>Full name:</strong> {props.fullName}</FullName>
                <Grade><strong>Grade:</strong> {props.grade}</Grade>
                <PhoneNumber><strong>Phone number:</strong> {props.phoneNumber}</PhoneNumber>
                <Email><strong>Email:</strong> {props.email}</Email>
                <HasPassed><strong>Has passed:</strong> {props.hasPassed.toString()}</HasPassed>
            </TextCard>
        </ResultCardFeed>
    );
}

export default ResultsCard;